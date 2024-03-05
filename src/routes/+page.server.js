import { Post } from '../lib/models/post.js';
import { Event } from '../lib/models/event.js';
import { Job } from '../lib/models/Job.js';
import { User } from '../lib/models/user.js';

export async function load({ locals }) {
	let posts = await Post.find().lean();
	let events = await Event.find().lean();
	let jobs = await Job.find().lean();
	posts = JSON.parse(JSON.stringify(posts)).reverse().slice(0, 5);
	events = JSON.parse(JSON.stringify(events));
	jobs = JSON.parse(JSON.stringify(jobs));

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
		events,
		jobs,
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
