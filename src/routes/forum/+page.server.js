import { Post } from '../../lib/models/post.js';

export async function load({ locals }) {
	let posts = await Post.find().lean();
	posts = JSON.parse(JSON.stringify(posts));
	posts = posts.reverse().slice(0, 10);
	let loggedInUser;
	console.log(locals.user);
	if (locals.user) {
		loggedInUser = locals.user.id;
	} else {
		loggedInUser = null;
	}

	return {
		posts,
		loggedInUser
	};
}
export const actions = {
	upvote: async ({ locals, request }) => {
		const { action, postSlug } = await request.json();
		let post = await Post.findById(postSlug);
		let loggedInUser = locals.user.id;
		if (action == false) {
			post.upvotes.push(loggedInUser);
		} else {
			post.upvotes = post.upvotes.filter((like) => like.toString() !== loggedInUser);
		}
		await post.save();
	}
};
