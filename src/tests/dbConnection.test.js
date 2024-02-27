import { describe, it, expect } from 'vitest';
import { connectDB } from '../lib/utils/db';

describe('Database Connection', () => {
	it('should use the test database', async () => {
		const db = await connectDB();
		expect(db.databaseName).toBe('dwp_test');
	});
});
