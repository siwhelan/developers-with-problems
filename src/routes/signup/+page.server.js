import { User } from '../../lib/models/user.js';

export const actions = {
	create: async ({ request }) => {
		const formData = await request.formData();
		console.log(formData);
		const username = formData.get('username');
		const email = formData.get('email');
		const password = formData.get('password');

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
			}
		}
		const newUser = {
			username: username,
			email: email,
			password: password
		};

		try {
			await User.create(newUser);
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
