const express = require("express")
const  {registerUser, userLogin} = require('../Controllers/user.controller')
const {registerRules,validator} = require("../middlewares/validator")
const isAuth = require ("../middlewares/passportSetup")

const Router = express.Router()

Router.post('/register', registerRules(),validator, registerUser )

Router.post('/login', userLogin)

Router.get('/currentuser' , isAuth(), function(req, res){
    res.send(req.user)
})

module.exports = Router