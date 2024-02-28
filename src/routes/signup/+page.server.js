import { User } from '../../lib/models/user.js';
// import { connectDB } from '../../lib/utils/db.js';

export const actions = {
	create: async ({ request }) => {
		// Establish database connection
		const formData = await request.formData();
		console.log(formData);
		const username = formData.get('username');
		const email = formData.get('email');
		const password = formData.get('password');

		// const existingUser = await User.findOne({ $or: [{ username: username }, { email: email }] });

		// if (existingUser) {
		// 	console.error('Username or email already exists');
		// 	return {
		// 		success: false,
		// 		error: 'Username or email already exists'
		// 	};
		// }

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
