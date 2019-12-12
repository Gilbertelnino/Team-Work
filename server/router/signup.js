import express from 'express';
import signupVal from '../model/signupVal';

const router = express.Router();
router.post('/',(req,res)=>{
    const {firstName,lastName,email,password,gender,jobRole,department,address} = req.body;

    const {error} = signupVal(req.body);
    if(error){
        return res.status(400).send(error.details[0].message)
    } else{
        res.status(201).json({
            message: 'User created successfully'
        });
    }
})

export default router;
