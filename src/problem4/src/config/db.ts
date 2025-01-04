// src/config/db.ts
import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        // Change db connection
        await mongoose.connect('mongodb://localhost:27017/test_99_tech');
        console.log('MongoDB connected');
    } catch (error) {
        console.error('MongoDB connection failed:', error)
        process.exit(1)
    }
};

export default connectDB