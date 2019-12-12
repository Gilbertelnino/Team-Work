import Joi from '@hapi/joi';

const signupValidation = (data)=>{
    const schema = Joi.object({
        firstName: Joi.string().min(3).max(50).required(),
        lastName: Joi.string().min(3).max(50).required(),
        email: Joi.string().email().required(),
        password: Joi.string().min(6).required(),
        gender: Joi.string().min(4).max(6),
        jobRole: Joi.string(),
        department: Joi.string(),
        address: Joi.string()
    });
    return schema.validate(data)
}

export default signupValidation;
