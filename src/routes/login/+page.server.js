import { User } from '../../lib/models/user.js';
import { redirect } from '@sveltejs/kit';
import mongoose from 'mongoose';
import { Lucia, TimeSpan } from 'lucia';
import { MongodbAdapter } from '@lucia-auth/adapter-mongodb';

// eslint-disable-next-line no-unused-vars
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
// console.log(Session);
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
				const sessionCookie = _lucia.createSessionCookie(session.id);
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
