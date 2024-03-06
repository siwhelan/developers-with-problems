import { User } from '../../lib/models/user.js';
import { generateId } from 'lucia';
export const actions = {
	create: async ({ request }) => {
		const formData = await request.formData();
		const username = formData.get('username');
		const email = formData.get('email');
		const password = formData.get('password');
		const confirmPassword = formData.get('confirmPassword');

		const existingUser = await User.findOne({ $or: [{ username: username }, { email: email }] });

		if (existingUser) {
			if (existingUser.username == username) {
				console.error('Username already exists');
				return {
					success: false,
					error: 'Username already exists'
				};
			} else if (existingUser.email == email) {
				console.error('Email already exists');
				return {
					success: false,
					error: 'Email already exists'
				};
			} else if (password != confirmPassword) {
				console.error("Passwords don't match");
				return {
					success: false,
					error: "Passwords don't match"
				};
			}
		}
		const newUser = {
			username: username,
			email: email,
			password: password
		};

		try {
			await User.create({
				_id: generateId(15),
				username: username,
				email: email,
				hashed_password: password
			});
			console.log('New user added: ', newUser);
			return {
				success: true
			};
		} catch (error) {
			console.error('Error creating user:', error);
			return {
				success: false,
				error: 'Failed to create user'
			};
		}
	}
};
