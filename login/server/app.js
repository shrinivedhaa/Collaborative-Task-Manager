const express = require('express')
const dotenv = require("dotenv")
const { request } = require('express')
const app = express()
const cookieParser = require("cookie-parser")
app.use(cookieParser())


dotenv.config({path:'./config.env'})
require('./db/conn')

// const User = require('./model/userSchema')

app.use(express.json())

app.use(require('./router/auth')) //link the router files

const PORT = process.env.PORT || 5000;


// app.get('/about', (req, res)=>{
//     res.send('Hello about world from the server')
// })

app.get('/contact',(req, res)=>{
    res.send('Hello contact world from the server')
})

app.get('/signin',(req, res)=>{
    res.send('Hello login world from the server')
})

app.get('/signup',(req, res)=>{
    res.send('Hello registration world from the server')
})

// if(process.env.NODE)

app.listen(PORT, ()=>{
    console.log(`Example app listening on port ${PORT}`)
})