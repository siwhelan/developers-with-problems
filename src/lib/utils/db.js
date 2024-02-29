// Load environment variables
import dotenv from 'dotenv';
import mongoose from 'mongoose';

if (process.env.NODE_ENV === 'test') {
	dotenv.config({ path: '.env.test' });
} else {
	dotenv.config();
}


// console.log(`URI HERE!!! ${process.env.MONGO_URI}`); // should output test database URI


// Connect to MongoDB using Mongoose
export async function connectDB() {
	const uri = process.env.MONGO_URI;
	try {
		await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
		console.log('MongoDB connected successfully');
	} catch (error) {
		console.error('Error connecting to MongoDB:', error);
	}
}
