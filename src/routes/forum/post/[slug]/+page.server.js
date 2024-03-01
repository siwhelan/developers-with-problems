import { Post } from '../../../../lib/models/post.js';
import { User } from '../../../../lib/models/user.js';
import mongoose from 'mongoose';

import { error } from '@sveltejs/kit';
export async function load({ params }) {
	// console.log(params.slug);
	let post = await Post.findById(params.slug).lean();
	let user = await User.findById(post.userID).lean();
	// console.log(user);
	console.log(post);
	post = JSON.parse(JSON.stringify(post));
	user = JSON.parse(JSON.stringify(user));
	const userID = '65e09e269f5ee760ed08ff57';

	console.log(post.upvotes.includes(userID));
	if (post && user) {
		// console.log({ post: post, user: user });
		return { post: post, user: user };
	}
	error(404, 'Not found');
}

export const actions = {
	updateLike: async ({ request }) => {
		const formData = await request.formData();
		// TODO - hardcoded
		const postID = formData.get('postID');
		const userID = '65ddf5f9020ec1c2c53a796f';
		let result = await Post.findByIdAndUpdate(postID);

		result.messages.push({ like: userID });
		await result.save();
	},

	// countLikes: async ({ params }) => {
	// 	let post = await Post.findById(params.slug).lean();
	// 	let upvotes = post.upvotes.length();
	// 	return upvotes;
	// },

	upvote: async ({ request, params }) => {
		const upvoted = await request.json();
		const post = await Post.findById(params.slug);
		console.log(upvoted.action);
		if (upvoted.action) {
			post.upvotes = post.upvotes.filter((like) => like.toString() !== '65e09e269f5ee760ed08ff57');
			post.save();
			console.log(post.upvotes);
		} else {
			post.upvotes.push('65e09e269f5ee760ed08ff57');
			post.save();
			console.log(post.upvotes);
		}
	}
};
