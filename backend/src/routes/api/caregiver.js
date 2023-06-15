import express from "express";
import { Caregiver } from "../../db/caregiverSchema.js";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';


const router = express.Router();    

router.post('/create', async (req, res) => {
    try {
        let {email, role, password } = req.body;

        if(!(email && role && password)) {
            return res.status(400).json({message: "All registration information is required"});
        }

        const isEmailTaken = await Caregiver.findOne({email});

        if (isEmailTaken) {
            return res.status(409).json({message: "A user with the specified email already exists"});
        }

        password = await bcrypt.hash(password, 10);
        
        const newCaregiver = await Caregiver.create({
            email,
            role,
            password
        })

        res.status(200).json(newCaregiver);
        
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }

})

router.post('/login', async (req, res) => {
    try {
        let {email, password} = req.body;

        if(!(email && password)) {
            return res.status(400).json({message: "All login information is required"});
        }

    
        const caregiver = await Caregiver.findOne({ email });

        if (caregiver && (await bcrypt.compare(password, caregiver.password))) {
            const token = jwt.sign(
                { email },
                process.env.JWT_KEY,
                {
                    expiresIn: "10h"
                }
            )
            caregiver.token = token;
            res.status(200).json(caregiver);
        } else {
            res.status(400).send("Invalid Credentials");
        }
    }
    catch (error) {
        res.status(400).json({message: "failed"})
    }
})

export default router;