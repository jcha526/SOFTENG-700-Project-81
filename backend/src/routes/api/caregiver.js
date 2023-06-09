import express from "express";
import { Caregiver } from "../../db/caregiverSchema.js";
import bcrypt from "bcrypt";


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

export default router;