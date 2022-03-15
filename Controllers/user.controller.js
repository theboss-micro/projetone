const User = require ('../Models/user')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')


exports.registerUser = async(req, res)=>{
    
    const user = {...req.body}
    const email = user.email
    const searchRes = await User.findOne({email})

    if(searchRes) return res.status(403).json({msg:"Email already exist"})
    try {
        const newUser = await new User({...user})

        const salt = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(newUser.password, salt)

        newUser.password = hash

        await newUser.save()
        res.status(200).json({msg:"user added successfuly"})

    } catch (error) {
        console.log(error)
        res.status(401).json({msg:"user register failed"})
    }
}


exports.userLogin = async(req, res) =>{
    const {email , password} = req.body
    const user = await User.findOne({email})

    if(!user) return res.status(403).json({msg:"Email not already exist "})

    const isMatch = await bcrypt.compare(password, user.password)
   

    if(!isMatch) return res.status(400).json({msg:"Bad credentiel"})

    const payload ={
        id: user._id,
        email: user.email,
        nom: user.nom,
        prenom: user.prenom,
        telephone: user.telephone
    }

    try{
            const token = await jwt.sign(payload, process.env.secretOrKey)
            return res.status(200).json({msg:"login with success", token:`Bearer ${token}`})
    } catch(error){
        res.status(401).json({msg:"login failed"})
    }

}