import { describe, it, expect, beforeAll, afterAll, beforeEach, vi } from 'vitest';
import mongoose from 'mongoose';
import { connectDB } from '../../lib/utils/db.js';
import { actions } from '../../routes/login/+page.server.js';
import { User } from '../../lib/models/user.js';

// Mock dependencies
vi.mock('../../lib/models/user.js', () => ({
	User: {
		findOne: vi.fn()
	}
}));

// Mock for redirect function from SvelteKit
vi.mock('@sveltejs/kit', () => ({
	redirect: vi.fn()
}));

describe('User Login', () => {
	beforeAll(async () => {
		await connectDB(); // Connect to the database before running the tests
	});

	afterAll(async () => {
		await mongoose.connection.close(); // Close the connection after running the tests
	});

	beforeEach(async () => {
		// Clear the database before each test
		for (const collection in mongoose.connection.collections) {
			await mongoose.connection.collections[collection].deleteMany({});
		}
		// Reset mocks
		vi.resetAllMocks();
	});

	it('should successfully log in a user with correct credentials', async () => {
		// Mocking User.findOne to return a user
		vi.mocked(User.findOne).mockResolvedValue({
			_id: 'user123',
			email: 'test@example.com',
			hashed_password: 'testpassword'
		});

		const request = {
			formData: async () =>
				new Map([
					['email', 'test@example.com'],
					['password', 'testpassword']
				])
		};
		const cookies = {
			set: vi.fn()
		};

		await actions.authorisation({ request, cookies });

		expect(User.findOne).toHaveBeenCalledWith({ email: 'test@example.com' });
		expect(cookies.set).toHaveBeenCalled();
	});

	it('should fail to log in a user with incorrect password', async () => {
		// Mocking User.findOne to return a user
		vi.mocked(User.findOne).mockResolvedValue({
			_id: 'user123',
			email: 'test@example.com',
			hashed_password: 'correctpassword'
		});

		const request = {
			formData: async () =>
				new Map([
					['email', 'test@example.com'],
					['password', 'wrongpassword']
				])
		};
		const cookies = { set: vi.fn() };

		const result = await actions.authorisation({ request, cookies });

		expect(User.findOne).toHaveBeenCalledWith({ email: 'test@example.com' });
		expect(result).toEqual({
			status: 401,
			body: 'Incorrect password'
		});
	});

	it('should fail to log in a user not found', async () => {
		// Mocking User.findOne to return null
		vi.mocked(User.findOne).mockResolvedValue(null);

		const request = {
			formData: async () =>
				new Map([
					['email', 'nonexistent@example.com'],
					['password', 'testpassword']
				])
		};
		const cookies = { set: vi.fn() };

		const result = await actions.authorisation({ request, cookies });

		expect(User.findOne).toHaveBeenCalledWith({ email: 'nonexistent@example.com' });
		expect(result).toEqual({
			status: 401,
			body: 'User not found'
		});
	});
});
