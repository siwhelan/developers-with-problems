import { Post } from '../lib/models/post.js';
import { User } from '../lib/models/user.js';

export async function load({ locals }) {
	let posts = await Post.find().lean();
	posts = JSON.parse(JSON.stringify(posts));
	posts = posts.reverse().slice(0, 10);

	for (let i = 0; i < posts.length; i++) {
		const post = posts[i];
		const postAuthor = await User.findOne({ _id: post.userID });
		post.author = postAuthor.username;
	}

	let loggedInUser;
	try {
		if (locals.user) {
			loggedInUser = locals.user.id;
		} else {
			console.error('User not found in database');
			loggedInUser = null;
		}
	} catch (error) {
		console.error('Error getting logged in user:', error);
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
