const VeterinaireProfile = require('../Models/veterinaireProfile')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
// const VeterinaireProfile = require('../Models/veterinaireProfile')


exports.registerVeterinaireProfile = async(req, res)=>{
    
    const veterinaireProfile = {...req.body}
    const email = veterinaireProfile.email
    const searchRes = await VeterinaireProfile.findOne({email})

    if(searchRes) return res.status(403).json({msg:"Email already exist"})
    try {
        const newVeterinaireProfile = await new VeterinaireProfile({...veterinaireProfile})
        const salt = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(newVeterinaireProfile.Password, salt)

        newVeterinaireProfile.Password = hash

        await newVeterinaireProfile.save()
        res.status(200).json({msg:"user_Veterinaire added successfuly"})

    } catch (error) {
        console.log(error)
        res.status(401).json({msg:"user_veterinaire register failed"})
    }
}


exports.veterinaireProfileLogin = async(req, res) =>{
    const {email , password} = req.body
    const veterinaireProfile = await VeterinaireProfile.findOne({email})

    if(!veterinaireProfile) return res.status(403).json({msg:"Email not already exist "})

    const isMatch = await bcrypt.compare(password, veterinaireProfile.password)
   

    if(!isMatch) return res.status(400).json({msg:"Bad credentiel"})

    const payload ={
        id: user._id,
        Nom: veterinaireProfile.Nom,
        Prenom: veterinaireProfile.Prenom,
        Email: veterinaireProfile.Email,
        Telephone: veterinaireProfile.Telephone,
        Adresse: veterinaireProfile.Adresse,
        Ville: veterinaireProfile.ville,
        Gouvernorat: veterinaireProfile.Gouvernorat,
        Pays: veterinaireProfile.Pays,
        Horaire: veterinaireProfile.Horaire,
        CodePostal: veterinaireProfile.CodePostal,
    }

    try{
            const token = await jwt.sign(payload, process.env.secretOrKey)
            return res.status(200).json({msg:"login with success", token:`Bearer ${token}`})
    } catch(error){
        res.status(401).json({msg:"login failed"})
    }

}



