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
	await client.connect();
	db = client.db();
	return db;
}
