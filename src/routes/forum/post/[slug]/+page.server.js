import { Post } from '../../../../lib/models/post.js';
import { User } from '../../../../lib/models/user.js';

import { error } from '@sveltejs/kit';
export async function load({ params, cookies }) {
	let userID = '';

	// Retrieve the session cookie
	const sessionCookie = cookies.get('session');

	if (sessionCookie) {
		try {
			//TODO
			// Fetch the session using Lucia
			// const { session, user } = await lucia.validateSession(sessionCookie);
			// const session = await adapter.getSessionAndUser(sessionCookie);
			// console.log('session');
			// console.log(event.locals);
			// console.log(session);
			// if (session) {
			// 	// Get the user ID from the session
			// 	userID = session.userId;
			// }
		} catch (error) {
			console.error('Error retrieving session:', error);
		}
	}
	console.log(userID);

	// Fetch post and user data
	try {
		let post = await Post.findById(params.slug).lean();
		let user = await User.findById(post.userID).lean();

		// Check if post and user exist
		if (post && user) {
			// Convert to plain JSON objects
			post = JSON.parse(JSON.stringify(post));
			user = JSON.parse(JSON.stringify(user));

			return { post, user, userID };
		} else {
			error(404, 'Post or user not found');
		}
	} catch (error) {
		console.error('Error fetching post or user:', error);
		error(500, 'Internal Server Error');
	}
}
