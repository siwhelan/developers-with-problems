import { Post } from '../../../../lib/models/post.js';
import { User } from '../../../../lib/models/user.js';

import { error } from '@sveltejs/kit';
export async function load({ locals, params }) {
	let userID = '';

	// Fetch post and user data
	try {
		let post = await Post.findById(params.slug).lean();
		let user = await User.findById(post.userID).lean();

		// Check if post and user exist
		if (post && user) {
			const loggedInUser = locals.user.id;

			// Convert to plain JSON objects
			post = JSON.parse(JSON.stringify(post));
			user = JSON.parse(JSON.stringify(user));

			return { post, user, userID, loggedInUser };
		} else {
			error(404, 'Post or user not found');
		}
	} catch (error) {
		console.error('Error fetching post or user:', error);
		error(500, 'Internal Server Error');
	}
}
