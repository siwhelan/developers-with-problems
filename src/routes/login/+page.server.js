import { User } from '../../lib/models/user.js';
import { redirect } from '@sveltejs/kit';
import { lucia } from '$lib/utils/luciaInstance';

export const actions = {
	authorisation: async ({ request, cookies }) => {
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
