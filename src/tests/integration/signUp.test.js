import { describe, it, expect, beforeAll, afterAll, beforeEach } from 'vitest';
import mongoose from 'mongoose';
import { connectDB } from '../../lib/utils/db.js';
import { actions } from '../../routes/signup/+page.server.js'; // import the actions object

// test for user sign up

describe('User Sign Up', () => {
	beforeAll(async () => {
		await connectDB(); // connect to the database before running the tests
	});

	afterAll(async () => {
		await mongoose.connection.close(); // close the connection after running the tests
	});

	beforeEach(async () => {
		// clear the database before each test
		for (var i in mongoose.connection.collections) {
			await mongoose.connection.collections[i].deleteMany({});
		}
	});

	it('should create a new user', async () => {
		const user = {
			username: 'Test',
			email: 'testuser@gmail.com',
			password: 'Password1!',
			confirmPassword: 'Password1!'
		};

		// mock the request object and its formData method
		const request = {
			formData: async () => ({
				get: (field) => user[field]
			})
		};

		const response = await actions.create({ request });
		expect(response).toHaveProperty('success');
	});
	it('should not create a new user if the password is invalid', async () => {
		const user = {
			username: 'Test',
			email: 'test@email.com',
			password: 'password',
			confirmPassword: 'password'
		};

		const request = {
			formData: async () => ({
				get: (field) => user[field]
			})
		};

		const response = await actions.create({ request });
		expect(response).toHaveProperty('success', false);
		expect(response).toHaveProperty('error');
	});

	it('should not create a new user if the username already exists', async () => {
		const user1 = {
			username: 'Test',
			email: 'test@email.com',
			password: 'Password1!',
			confirmPassword: 'Password1!'
		};
		const request1 = {
			formData: async () => ({
				get: (field) => user1[field]
			})
		};
		await actions.create({ request: request1 });
		const user2 = {
			username: 'Test',
			email: 'test2@email.com',
			password: 'Password1!',
			confirmPassword: 'Password1!'
		};
		const request2 = {
			formData: async () => ({
				get: (field) => user2[field]
			})
		};
		const response = await actions.create({ request: request2 });
		expect(response).toHaveProperty('success', false);
		expect(response).toHaveProperty('error');
	});

	it('should not create a new user if the email already exists', async () => {
		const user1 = {
			username: 'Test',
			email: 'test@email.com',
			password: 'Password1!',
			confirmPassword: 'Password1!'
		};
		const request1 = {
			formData: async () => ({
				get: (field) => user1[field]
			})
		};
		await actions.create({ request: request1 });
		const user2 = {
			username: 'Test2',
			email: 'test@email.com',
			password: 'Password1!',
			confirmPassword: 'Password1!'
		};
		const request2 = {
			formData: async () => ({
				get: (field) => user2[field]
			})
		};
		const response = await actions.create({ request: request2 });
		expect(response).toHaveProperty('success', false);
		expect(response).toHaveProperty('error');
	});

	it('should not create a new user if the passwords do not match', async () => {
		const user1 = {
			username: 'Test',
			email: 'test@email.com',
			password: 'Password1!',
			confirmPassword: 'Password2!'
		};
		const request1 = {
			formData: async () => ({
				get: (field) => user1[field]
			})
		};
		await actions.create({ request: request1 });
		const response = await actions.create({ request: request1 });
		expect(response).toHaveProperty('success', false);
		expect(response).toHaveProperty('error');
	});
});
