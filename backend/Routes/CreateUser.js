const express = require('express');
const router = express.Router();
const user = require('../models/User');
const { query, validationResult } = require('express-validator');

const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const jwtSecret = process.env.REACT_APP_JWT_SECRET;

router.post('/createuser',
// [query('name','name cannot be empty').notEmpty(),
// query('email', 'not a valid email').isEmail(),
// query('password', 'min length should be 5').isLength({min:5})],
async (req,res)=>{

//     const errors = validationResult(req);
//   if (!(errors.isEmpty())) {
//     res.send({ errors: errors.array() });

//   }

    let salt = await bcrypt.genSalt(10);
    let secPass =await bcrypt.hash(req.body.password , salt)

    try {
        await user.create({
            name: req.body.name,
            address: req.body.address,
            email: req.body.email,
            password: secPass
        })
      
        res.json({success:true})

    } catch (error) {   
        console.log(error);
        res.json({success:false})
    }
})


router.post('/loginuser',
async (req,res)=>{  
    let email = req.body.email;
    let success = false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    try {
        let userData =  await user.findOne({email})
        
        if(!userData){
            return res.status(400).json({ success, error: "No user found" });
        }

        let pwdCompare = bcrypt.compare(req.body.password , userData.password)

        if(!pwdCompare){
            return res.status(400).json({ success, error: "Enter valid credentials" });
        }

        const authToken = jwt.sign({id: userData._id}, jwtSecret)
        res.json({success:true , authToken:authToken})

    } catch (error) {   
        console.log(error.message);
        res.send("server error");
    }
})

module.exports = router;
