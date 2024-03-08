import { describe, it, expect } from 'vitest';
import mongoose from 'mongoose';
import { connectDB } from '../lib/utils/db';

describe('Database Connection', () => {
	it('should use the test database', async () => {
		await connectDB();
		console.log('mongoose.connection below');
		console.log(mongoose.connection);
		const dbName = mongoose.connection.db.databaseName;
		expect(dbName).toBe('dwp_test');
		// Ensure to disconnect after the test to prevent open handles
		await mongoose.disconnect();
	});
});
