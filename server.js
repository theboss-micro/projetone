require('dotenv').config()
const express = require ('express')
const connectDB = require ('./config/connectDB')
const user = require('./Routes/user')
const veterinaireProfileRoutes = require('./Routes/veterinaireProfile.route')
const passport = require('passport')
const cors = require('cors')

const app = express()

app.use(cors())

app.use(passport.initialize())

app.use(express.json())

connectDB()





app.use("/user", user)
app.use('/VeterinaireProfile', veterinaireProfileRoutes);



const PORT = process.env.PORT ||  process.env.port
app.listen(PORT, err=>{
    err?console.log("server connection failed", err)
       :console.log(`server is running on port ${PORT}`)
})