 import mongoose from 'mongoose';
 import dotenv from 'dotenv';
 dotenv.config();
 
 const connectDB = async () => {
     try {
         const conn = await mongoose.connect(process.env.MONGODB_URI, {
            
         });
         console.log(`MongoDB Connected: ${conn.connection.host}`);
     } catch (err) {
         console.log(err);
     }
 }; 
 
 export default connectDB;