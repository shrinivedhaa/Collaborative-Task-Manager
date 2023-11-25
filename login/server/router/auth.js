const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const authenticate = require("../middleware/authenticate")
const cookieParser = require("cookie-parser")
router.use(cookieParser())


require('../db/conn')
const User = require("../model/userSchema")

router.get('/',(req, res)=>{
    res.send('Hello world from the server router js')
})


router.post('/register', async (req,res) => {

    const {name, email, phone, work, password, cpassword } = req.body;

    if(!name || !email || !phone || !work || !password || !cpassword){
        return res.status(422).json({error:"Please fill the form properly"})
    }

    try{

        const userExist = await User.findOne({email:email})

        if(userExist){
            return res.status(422).json({error:"Email already exist"})
        }else if(password != cpassword){
            return res.status(422).json({error:"Password doesn't match"})
        }else {
                 
            const user = new User({name, email, phone, work, password, cpassword })
                    
            await user.save()
                    
            res.status(201).json({message:"User registered succesfully"})
        }

    }catch(err){
        console.log(err);
    }

})

//login route

router.post('/signin', async(req, res) => {
    
    try{
        let token;
        const {email, password} = req.body;

        if(!email || !password){
            return res.status(400).json({error:"Please fill the data"})
        }

        const userLogin = await User.findOne({email:email})


        // console.log(userLogin);

        if(userLogin){
            const isMatch = await bcrypt.compare(password, userLogin.password)

            const token = await userLogin.generateAuthToken()
            console.log(token)

            res.cookie("jwtoken", token, {
                expires: new Date(Date.now() + 25892000000),
                httpOnly:true
            })

            if(!isMatch){
                res.status(400).json({error:"Invalid Credential"})
            }
            else{
                res.json({message:"User signin successfully"})
            }
        }else{  
            res.status(400).json({error:"Invalid Credential"})
        }

    }catch(err){
        console.log(err)
    }
})


//about us page

router.get('/about', authenticate, (req, res)=>{
    console.log('Hello about world from the server')
    res.send(req.rootUser)
})

router.get('/getdata', authenticate, (req,res) => {
    console.log('Hello about world from the server')
    res.send(req.rootUser)
})


//Logout page

router.get('/logout',(req, res)=>{
    console.log('Hello logout page from the server')
    res.clearCookie('jwtoken', {path:'/'})
    res.status(200).send('User logout')
})



module.exports = router;



