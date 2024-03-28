import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();
const db_uri: string | undefined = process.env.DB_URI;

const connectDB = async (): Promise<void> => {
    try {
        if (!db_uri) {
            throw new Error("DB_URI not found in environment variables.");
        }

        await mongoose.connect(db_uri);
        console.log("Connected to HotelDB");
    } catch (error) {
        console.error("Error connecting to MongoDB Atlas:", error);
    }
};

export default connectDB;