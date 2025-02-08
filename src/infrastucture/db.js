import mongoose from "mongoose";

const connectDB = async ()=>{
    try{
       const MONGODB_URL = process.env.MONGODB_URL;
       if(!MONGODB_URL){
        throw new Error("MONGODB_URL is not set");
       }
        
        console.log("Connect to the DataBase")
    } catch(error){
        console.log("Error connecting Data Base...")
        console.log(error)
    }
};

export default connectDB;