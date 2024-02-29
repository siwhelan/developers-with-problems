import { Post } from '../../../../lib/models/post.js';
import { User } from '../../../../lib/models/user.js';

import { error } from '@sveltejs/kit';
export async function load({ params }) {
	// console.log(params.slug);
	let post = await Post.findById(params.slug).lean();
	let user = await User.findById(post.userID).lean();
	// console.log(user);
	// console.log(post);
	post = JSON.parse(JSON.stringify(post));
	user = JSON.parse(JSON.stringify(user));

	if (post && user) {
		// console.log({ post: post, user: user });
		return { post: post, user: user };
	}
	error(404, 'Not found');
}
