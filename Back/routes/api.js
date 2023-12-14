import express from "express";
import checkToken from "../utils/middlewares.js";
import usersRoutes from "./users.route.js";
import sesionRoutes from "../routes/sesion.route.js"


const router = express.Router();



router.use('/users', checkToken, usersRoutes);
router.use('/session', sesionRoutes);

export default router;

