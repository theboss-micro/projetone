const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const passport = require('passport')
const VeterinaireProfile = require ("../Models/veterinaireProfile")

let secretOrKey = process.env.secretOrKey
// console.log(secretOrKey)

let opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey
}

passport.use(
    new JwtStrategy(opts, async(jwt_payload, done)=>{
        const {id} = jwt_payload
        const veterinaireProfile = await VeterinaireProfile.findById(id);
        try {
            veterinaireProfile? done(null, veterinaireProfile) : done(null, false)
        } catch (error) {
            console.log(error)
        }

    })
)
module.exports = isAuth = () => passport.authenticate("jwt", { session: false})