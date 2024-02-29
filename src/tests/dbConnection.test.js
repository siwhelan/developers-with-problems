import { describe, it, expect } from 'vitest';
import { connectDB } from '../lib/utils/db';
import mongoose from 'mongoose';

describe('Database Connection', () => {
	it('should use the test database', async () => {
		await connectDB();
		const dbName = mongoose.connection.db.databaseName;
		expect(dbName).toBe('dwp_test');
		// Ensure to disconnect after the test to prevent open handles
		await mongoose.disconnect();
	});
});
