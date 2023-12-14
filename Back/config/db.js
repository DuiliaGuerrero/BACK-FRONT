import mongoose from "mongoose";

const connectToDataBase = async () =>{
    await mongoose.connect(process.env.DB_URI
        // ,{dbName:'FondoFamiliarDB'}
    )
    try{
        console.log("Conectado exitosamente")
    }catch(err){
        console.log("No conectado "+err)
    }
};

export default connectToDataBase;