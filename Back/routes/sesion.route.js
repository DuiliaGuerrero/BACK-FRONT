import express from "express";
import userSchema from "../models/users.model.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
const router = express.Router();

//POST registro
router.post('/register', async (req, res)=>{
    try {
        req.body.password = bcrypt.hashSync(req.body.password, 12);
        const userCreate = await userSchema.create(req.body);
        res.json(userCreate);
    }catch (error) {
        res.json({error: error.message})
    }
});

//POST login
router.post('/login', async (req, res)=>{
    //Comprobar existencia del email
    const user = await userSchema.findOne({ email: req.body.email });
    if(!user){
        return res.json({ error: 'Error, revisa tu nombre de usuario y contraseña' })
    }

    const validar = bcrypt.compareSync(req.body.password, user.password)
    if(!validar){
        return res.json({ error: 'Error, revisa tu nombre de usuario y contraseña' })
    }

    res.json({ success: 'Has ingresado con éxito', 
    token: createToken(user)});
});

//TOKEN
function createToken(user) {
    const payload = {
        user_id: user._id,
        user_role: user.role
    }

    console.log(payload)
    return jwt.sign(payload, 'TOKEN')
}


export default router;