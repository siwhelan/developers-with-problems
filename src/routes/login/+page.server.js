import { User } from '../../lib/models/user.js';
import { redirect } from '@sveltejs/kit';

export const actions = {
	authorisation: async ({ request }) => {
		const formData = await request.formData();
		const email = formData.get('email');
		const password = formData.get('password');

		const existingUser = await User.findOne({ email: email });

		if (existingUser) {
			// Perform secure password comparison (use a secure hashing algorithm)
			if (password === existingUser.password) {
				console.log('User logged in successfully');
				redirect(302, '/');
			} else {
				console.log('Incorrect password');
				// Provide appropriate error message or handle incorrect password scenario
			}
		} else {
			console.log('User not found');
			// Provide appropriate error message or handle user not found scenario
		}

		// Return an error response if login fails
		return {
			status: 401,
			body: 'Invalid email or password'
		};
	}
};
