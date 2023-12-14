import express from "express";
import userSchema from "../models/users.model.js"
const router = express.Router();

//Voy a crear mi usuario
router.post('/list', (req, res) => {
    const user = userSchema(req.body);
    user
    .save()
    .then((data) => res.json(data))
    .catch((error)=> res.json({ message: error }))
});

//Traer todos los usuarios
router.get('/list', (req, res) => {
   userSchema
   .find()
   .then((data) => res.json(data))
   .catch((error)=> res.json({ message: error }))
    
});

//Eliminar usuario
router.delete('/list/:id', (req, res) =>{
    const { id } = req.params;
    userSchema.deleteOne({ _id: id })
    .then((data) => res.json(data))
   .catch((error)=> res.json({ message: error }))
});

export default router;