import mongoose from "mongoose";

export const  connectDB = async () =>{

    await mongoose.connect('mongodb+srv://extrastack:7789s456a@cluster0.hslrmjs.mongodb.net/Craze').then(()=>console.log("DB Connected"));
   
}


