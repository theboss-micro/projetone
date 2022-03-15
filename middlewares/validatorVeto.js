const { check, validationResult } = require("express-validator");



exports.registerRules=()=>[
    check(`Nom`, `this filed is required`).notEmpty(),
    check(`Prenom`, `this field is required`).notEmpty(),
    check(`Email`, `this field is required`).notEmpty(),
    check(`Email`, `this is not a valid email`).isEmail(),
    check(`Telephone`, `this field is required`).notEmpty(),
    check(`Telephone`, `this is not a valid phone`).isLength({min:8}),
    check(`Adresse`, `this filed is required`).notEmpty(),
    check(`Ville`, `this filed is required`).notEmpty(),
    check(`Gouvernorat`, `this filed is required`).notEmpty(),
    check(`Pays`, `this filed is required`).notEmpty(),
    check(`CodePostal`, `this filed is required`).notEmpty(),
    check(`Horaire`, `this filed is required`).notEmpty(),
    check(`Password`, `this filed is required`).notEmpty(),
    check(`Password`, `this is not a valid password`).isLength({min:6, max:20}),
]

exports.validator= (req, res, next)=>{
    const errors = validationResult(req)

    errors.isEmpty()? next(): res.status(400).json({errors: errors.array()}) 
}