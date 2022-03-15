const express = require("express")
const  {registerVeterinaireProfile, veterinaireProfileLogin} = require('../Controllers/veterinaireProfile.controller')
const {registerRules,validator} = require("../middlewares/validatorVeto")
const isAuth = require ("../middlewares/passportSetupVeto")
const veterinaireProfile = require("../Models/veterinaireProfile")

const Router = express.Router()

Router.post('/register', registerRules(),validator, registerVeterinaireProfile )

Router.post('/login', veterinaireProfileLogin)

Router.get('/GET',(req, res)=>{
    veterinaireProfile.find()
    .then(veterinaireProfiles=>res.status(200).json(veterinaireProfiles))
    .catch(err=> res.status(400).json(err))
})

module.exports = Router