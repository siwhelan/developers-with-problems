import { User } from '../../lib/models/user.js';
import { redirect } from '@sveltejs/kit';
import mongoose from 'mongoose';
import { Lucia, TimeSpan } from 'lucia';
import { MongodbAdapter } from '@lucia-auth/adapter-mongodb';

const Session = mongoose.model(
	'Session',
	new mongoose.Schema(
		{
			_id: {
				type: String,
				required: true
			},
			user_id: {
				type: String,
				required: true
			},
			expires_at: {
				type: Date,
				required: true
			}
		},
		{ _id: false }
	)
);
// Connect to MongoDB
const adapter = new MongodbAdapter(
	mongoose.connection.collection('sessions'),
	mongoose.connection.collection('users')
);

export const _lucia = new Lucia(adapter, {
	sessionExpiresIn: new TimeSpan(2, 'w'),
	sessionCookie: {
		attributes: {
			secure: false
		}
	}
});

export const actions = {
	authorisation: async ({ request, cookies }) => {
		const formData = await request.formData();
		const email = formData.get('email');
		const password = formData.get('password');

		const existingUser = await User.findOne({ email: email });

		if (existingUser) {
			const hashedPassword = password;
			if (hashedPassword === existingUser.hashed_password) {
				console.log('User logged in successfully');

				// Convert userId to string
				const userIdString = existingUser._id.toString();

				const session = await _lucia.createSession(userIdString, {});
				console.log(session);
				const sessionCookie = _lucia.createSessionCookie(session.id);
				// console.log(sessionCookie);
				cookies.set('session', sessionCookie.value, {
					// send cookie for every page
					path: '/',
					// server side only cookie so you can't use `document.cookie`
					httpOnly: true,
					// only requests from same site can send cookies
					// https://developer.mozilla.org/en-US/docs/Glossary/CSRF
					sameSite: 'strict',
					// only sent over HTTPS in production
					secure: process.env.NODE_ENV === 'production',
					// set cookie to expire after a month
					maxAge: 60 * 60 * 24 * 30
				});
				// Redirect the user upon successful login
				console.log('session cookie 2', sessionCookie);
				console.log('sessioncookie.value', sessionCookie.value);
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
