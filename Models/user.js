const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
    nom:{
        type: String
    },
    prenom:{
        type: String
    },
    email:{
        type: String
    },
    telephone:{
        type: Number
    },
    password:{
        type: String
    }
    
})

module.exports = User = mongoose.model("users", userSchema )