import { User } from '../../lib/models/user.js';
import { generateId } from 'lucia';
import { Argon2id } from 'oslo/password';
export const actions = {
	create: async ({ request }) => {
		const formData = await request.formData();
		const username = formData.get('username');
		const email = formData.get('email');
		const password = formData.get('password');
		const confirmPassword = formData.get('confirmPassword');
		console.log(confirmPassword);

		function validatePassword(password) {
			const passwordRegexString =
				'^(?=.*[A-Z])(?=.*\\d)(?=.*[!@#$%^&*()_+{}\\[\\]:;<>,.?~\\\\/-]).{8,}$';
			const passwordRegex = new RegExp(passwordRegexString);
			return passwordRegex.test(password);
		}

		// Password validation criteria using regex as a string
		const isPasswordValid = validatePassword(password);

		if (!isPasswordValid) {
			console.error('Invalid password');
			return {
				success: false,
				error:
					'Invalid password. It must be at least 8 characters long and include one uppercase letter, one number, and one special symbol.'
			};
		}

		if (password != confirmPassword) {
			console.error("Passwords don't match");
			return {
				success: false,
				error: "Passwords don't match"
			};
		}

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
		const hashedPassword = await new Argon2id().hash(password);
		const newUser = {
			username: username,
			email: email,
			hashedPassword: hashedPassword
		};

		try {
			await User.create({
				_id: generateId(15),
				username: username,
				email: email,
				hashed_password: hashedPassword
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
