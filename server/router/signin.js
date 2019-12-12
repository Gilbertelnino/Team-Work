import express from 'express';
import signinVal from '../model/signinVal';

const router = express.Router();

router.post('/',(req,res)=>{
    const { email, password } = req.body;
    const {error} = signinVal(req.body);
    if(error){
        return res.status(400).send(error.details[0].message);
    } else{
        res.status(200).json({
            message: 'User logged in successfully'
        });
    }
})

export default router;
