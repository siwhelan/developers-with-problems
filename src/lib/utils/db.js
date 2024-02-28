// Load environment variables
import dotenv from 'dotenv';

if (process.env.NODE_ENV === 'test') {
	dotenv.config({ path: '.env.test' });
} else {
	dotenv.config();
}

console.log(`URI HERE!!! ${process.env.MONGO_URI}`); // should output test database URI

// Import MongoClient from mongodb using ESM syntax
import { MongoClient } from 'mongodb';
const uri = process.env.MONGO_URI;
let db;

export async function connectDB() {
	if (db) return db;
	const client = new MongoClient(uri);
	try {
		console.log('I get this far');
		await client.connect();
		console.log("And I'm connected!!!!");
		db = client.db();
	} catch (error) {
		console.error('Error connecting to the database:', error);
	}
}
