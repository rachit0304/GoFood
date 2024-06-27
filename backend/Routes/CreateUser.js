const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { query, body, validationResult } = require('express-validator');

const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const jwtSecret = process.env.REACT_APP_JWT_SECRET;

router.post('/createuser',
[
query('name','name cannot be empty').notEmpty(),
query('email', 'not a valid email').isEmail(),
query('password', 'min length should be 5').isLength({min:5})
],
async (req,res)=>{

    const errors = validationResult(req);
  if (!(errors.isEmpty())) {
     return res.status(400).json({ success, errors: errors.array() })
  }

    let salt = await bcrypt.genSalt(10);
    let secPass =await bcrypt.hash(req.body.password , salt)

    try {
        await User.create({
            name: req.body.name,
            address: req.body.address,
            email: req.body.email,
            password: secPass
        }).then(user => {
            const data = {
                user: {
                    id: user._id
                }
            }
            const authToken = jwt.sign(data, jwtSecret);
            success = true
            res.json({ success, authToken })
        })
            .catch(err => {
                console.log(err);
                res.json({ error: "Please enter a unique value." })
            })
    } catch (error) {
        console.error(error.message)
    }
})


router.post('/loginuser',
async (req,res)=>{  
    
    let success = false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }
    
    let email = req.body.email;
    let password = req.body.password;


    try {
        let userData =  await User.findOne({email})
        
        if(!userData){
            return res.status(400).json({ success, error: "No user found" });
        }

        let pwdCompare = await bcrypt.compare(password , userData.password)

        if(!pwdCompare){
            return res.status(400).json({ success, error: "Enter valid credentials" });
        }
        
        const data = {
            userData: {
                id: userData._id
            }
        }
        success = true;
        const authToken = jwt.sign(data, jwtSecret , { expiresIn: '1h'});
        res.json({ success, authToken });

    } catch (error) {   
        console.log(error.message);
        res.send("server error");
    }
})

module.exports = router;
