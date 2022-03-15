const mongoose = require('mongoose');

const VeterinaireProfileSchema = new mongoose.Schema({
    Nom: {
        type:String,
        // required:[true, 'veuillez entrer votre nom'],
        // // trim:true,
        // maxlength: [50, 'le nom ne peut pas dépasser 50 caractères']
    },
  
    Prenom: {
        type:String,
        // required:[true, 'veuillez entrer votre prenom'],
        // // trim:true,
        // maxlength: [50, 'le Prenom ne peut pas dépasser 50 caractères']
    },
    Email: {
        type:String,
        // required:[true, 'veuillez entrer votre email'],
        // unique: true, 
        
        // match:[/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'veuillez ajouter un email valide'],

    },
    Telephone: {
        type:Number,
        // required:[true, 'veuillez entrer votre numéro de telephone'],
        // unique: true, 
        // // trim:true,
        // maxlength: [50, 'le numero ne peut pas dépasser 50 chiffre']
    },
    Adresse: {
        type:String,
        // required:[true, 'veuillez entrer votre adresse'],
        // maxlength: [50, 'Adresse ne peut pas dépasser 50 caractères']
    }, 
    Ville: {
        type:String,
        // required:[true, 'veuillez saisir votre ville'],
        // maxlength: [50, 'le nom de votre ville ne peut pas dépasser 50 caractères']
    },
    Gouvernorat: {
        type:String,
        // required:[true, 'veuillez entrer votre gouvernorat'],
        // maxlength: [50, 'le nom de votre gouvernorat ne peut pas dépasser 50 caractères']
    },
    Pays: {
        type:String,
        // required:[true, 'veuillez entrer votre pays'],
        // maxlength: [50, 'le nom de votre pays ne peut pas dépasser 50 caractères']
    },
    Horaire: {
        type:String,
        // required:[true, 'veuillez entrer vos Horaire'],
        // maxlength: [50, 'les horaires ne peut pas dépasser 50 caractères']
    },
    CodePostal: {
        type:Number,
        // required:[true, 'veuillez entrer votre code postal'],
        // maxlength: [50, 'le code postal ne peut pas dépasser 50 caractères']
    },
    // photo: {
    //     type:String,
    //     default:'no-photo.jpg'
    // },
    Password:{
        type: String,
        // required:[true, 'veuillez entrer votre password'],
        // maxlength: [20, 'le password ne peut pas dépasser 20 caractères']
    },
})

module.exports = VeterinaireProfile = mongoose.model('VeterinaireProfiles', VeterinaireProfileSchema);
