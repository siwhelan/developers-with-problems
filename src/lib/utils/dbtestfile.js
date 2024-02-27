// Remove this file later
import { connectDB } from './db.js';

async function insertSampleData() {
	const db = await connectDB();
	const collection = db.collection('users');

	// Sample data
	const sampleData = [
		{ name: 'John Doe', age: 30, profession: 'Engineer' },
		{ name: 'Jane Doe', age: 25, profession: 'Designer' }
	];

	try {
		const result = await collection.insertMany(sampleData);
		console.log(`${result.insertedCount} documents were inserted`);
	} catch (e) {
		console.error('Error inserting documents:', e);
	} finally {
		// Ensure the client closes when you're done
		await db.client.close();
	}
}

insertSampleData().catch(console.error);
