import { User } from '../../lib/models/user.js';
import { redirect } from '@sveltejs/kit';
import mongoose from 'mongoose';
import { Lucia } from 'lucia';
import { MongodbAdapter } from '@lucia-auth/adapter-mongodb';

// Connect to MongoDB
const adapter = new MongodbAdapter(
	mongoose.connection.collection('sessions'),
	mongoose.connection.collection('users')
);

const lucia = new Lucia(adapter, {
	sessionCookie: {
		attributes: {
			secure: false
		}
	}
});

export const actions = {
	authorisation: async ({ request }) => {
		const formData = await request.formData();
		const email = formData.get('email');
		const password = formData.get('password');

		const existingUser = await User.findOne({ email: email });

		if (existingUser) {
			const hashedPassword = password;
			if (hashedPassword === existingUser.password) {
				console.log('User logged in successfully');

				// Convert userId to string
				const userIdString = existingUser._id.toString();

				const session = await lucia.createSession(userIdString);
				// console.log(session, 'SESSSIOSOSOOSOSOSOSN');
				const sessionCookie = lucia.createSessionCookie(session.id);
				// console.log(sessionCookie);

				// Redirect the user upon successful login
				return redirect(302, '/');
			} else {
				console.log('Incorrect password');
				// Provide appropriate error message or handle incorrect password scenario
				return {
					status: 401,
					body: 'Incorrect password'
				};
			}
		} else {
			console.log('User not found');
			// Provide appropriate error message or handle user not found scenario
			return {
				status: 401,
				body: 'User not found'
			};
		}
	}
};

// import { User } from '../../lib/models/user.js';
// import { redirect } from '@sveltejs/kit';
// import mongoose from 'mongoose';
// import { Lucia } from 'lucia';
// import { MongodbAdapter } from '@lucia-auth/adapter-mongodb';
// // import crypto from 'crypto';

// // Define Mongoose schemas
// // const AuthUserSchema = new mongoose.Schema({
// // 	_id: {
// // 		type: String,
// // 		required: true
// // 	}
// // });

// const SessionSchema = new mongoose.Schema({
// 	_id: {
// 		type: String,
// 		required: true
// 	},
// 	user_id: {
// 		type: String,
// 		required: true
// 	},
// 	expires_at: {
// 		type: Date,
// 		required: true
// 	}
// });

// // Define Mongoose models
// // const AuthUser = mongoose.model('AuthUser', AuthUserSchema);
// const Session = mongoose.model('Session', SessionSchema); // Ensure Session is correctly defined

// // Connect to MongoDB

// const adapter = new MongodbAdapter(Session, User);

// const lucia = new Lucia(adapter, {
// 	sessionCookie: {
// 		attributes: {
// 			// set to `true` when using HTTPS
// 			secure: false
// 		}
// 	}
// });

// export const actions = {
// 	authorisation: async ({ request }) => {
// 		const formData = await request.formData();
// 		const email = formData.get('email');
// 		const password = formData.get('password');

// 		const existingUser = await User.findOne({ email: email });

// 		if (existingUser) {
// 			// Check if the password matches
// 			// const hashedPassword = crypto.createHash('sha256').update(password).digest('hex');
// 			const hashedPassword = password;
// 			if (hashedPassword === existingUser.password) {
// 				console.log('User logged in successfully');

// 				// Convert userId to string
// 				const userIdString = existingUser._id.toString();
// 				// Additional logging for debugging
// 				console.log('Session creation data:', {
// 					userId: existingUser._id.toString(),
// 					attributes: {}
// 				});

// 				const session = await lucia.createSession(
// 					userIdString // Convert ObjectId to string
// 				);
// 				console.log(session, 'SESSSIOSOSOOSOSOSOSN');
// 				const sessionCookie = lucia.createSessionCookie(session.id);
// 				console.log(sessionCookie);

// 				// Redirect the user upon successful login
// 				return redirect(302, '/');
// 			} else {
// 				console.log('Incorrect password');
// 				// Provide appropriate error message or handle incorrect password scenario
// 				return {
// 					status: 401,
// 					body: 'Incorrect password'
// 				};
// 			}
// 		} else {
// 			console.log('User not found');
// 			// Provide appropriate error message or handle user not found scenario
// 			return {
// 				status: 401,
// 				body: 'User not found'
// 			};
// 		}
// 	}
// };
