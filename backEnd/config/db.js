import mongoose from 'mongoose';

export const connectDb = async () =>{
    try {
        const conn = await mongoose.connect("mongodb+srv://harishmacha987:LbQNkHBKXlMO2p69@cluster0.2dwxbhk.mongodb.net/foodC");
        console.log(`MongoDB connected : ${conn.connection.host}`);
    } catch (error) {
        console.log(`MongoDB connection error`,error);
    }
}
