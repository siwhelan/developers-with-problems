import { Post } from '../../../lib/models/post.js';
import { User } from '../../../lib/models/user.js';

export async function load({ locals }) {
	let posts = await Post.find().lean();

	posts = posts.reverse();
	let eventsPosts = posts.filter((post) => {
		return post.tags && post.tags.includes('news');
	});
	eventsPosts = JSON.parse(JSON.stringify(eventsPosts));

	for (let i = 0; i < eventsPosts.length; i++) {
		const post = eventsPosts[i];
		const postAuthor = await User.findOne({ _id: post.userID });
		post.author = postAuthor.username;
	}

	let loggedInUser;
	if (locals.user) {
		loggedInUser = locals.user.id;
	} else {
		loggedInUser = null;
	}

	return {
		eventsPosts,
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
