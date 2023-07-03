const express = require('express')
const router = require('/Users/amitsudhalkar/Software/VSCode/CRUD_app/routes/user-routes.js')
const mongoose = require('mongoose')


const app = express()

app.use(express.json()); 


app.use("/users", router)

mongoose
.connect(
    "mongodb+srv://arjunsudhalkar:SnmoVtuAhdvLDlny@cluster0.fuemsro.mongodb.net/?retryWrites=true&w=majority"
)
.then(()=> app.listen(3500, ()=> console.log('running at 3500'))).catch((err)=>console.log(err))

