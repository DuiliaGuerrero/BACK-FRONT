import express from "express";
import dotenv from "dotenv";
import api from "./routes/api.js"
import connectToDataBase from "./config/db.js";
import cors from "cors"


const app = express();
app.use(cors());
app.use(express.json());
app.use('/api',api);
dotenv.config();
const port = process.env.PORT;
connectToDataBase();

app.listen(port, ()=>{
    console.log("El servidor esta escuchando desde, ", port)
});

export default app;