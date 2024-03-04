import { Post } from '../../../../lib/models/post.js';
import { User } from '../../../../lib/models/user.js';

import { error } from '@sveltejs/kit';
export async function load({ locals, params }) {
	let userID = '';

	try {
		let post = await Post.findById(params.slug).lean();
		let user = await User.findById(post.userID).lean();
		// Check if post and user exist
		if (post && user) {
			let loggedInUser;
			if (locals.user) {
				loggedInUser = locals.user.id;
			} else {
				loggedInUser = null;
			}

			post = JSON.parse(JSON.stringify(post));
			user = JSON.parse(JSON.stringify(user));

			return { post, user, userID, loggedInUser };
		} else {
			console.error('Error fetching post or user:', error);
		}
	} catch (error) {
		console.error('Error fetching post or user:', error);
		error(500, 'Internal Server Error');
	}
}

export const actions = {
	upvote: async ({ locals, params, request }) => {
		const upvoted = await request.json();
		let post = await Post.findById(params.slug);
		let loggedInUser = locals.user.id;
		if (upvoted.action == false) {
			post.upvotes.push(loggedInUser);
		} else {
			post.upvotes = post.upvotes.filter((like) => like.toString() !== loggedInUser);
		}
		await post.save();
	}
};
