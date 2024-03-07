import { Post } from '../lib/models/post.js';
import { Job } from '../lib/models/job.js';
import { User } from '../lib/models/user.js';
import { fetchEvents } from '../services/fetchEvents.js';

export async function load({ locals }) {
	let posts = await Post.find().lean();
	// let events = await Event.find().lean();
	let jobs = await Job.find().lean();
	posts = JSON.parse(JSON.stringify(posts)).reverse().slice(0, 5);
	// events = JSON.parse(JSON.stringify(events));
	jobs = JSON.parse(JSON.stringify(jobs));

	let events = await fetchEvents();

	// Get the user IDs from the 'attending' and 'interested' fields of the events
	// flatmap is used to flatten the array of arrays into a single array
	const userIds = [
		...events.flatMap((event) => event.attending),
		...events.flatMap((event) => event.interested)
	];

	// Fetch the users with the corresponding IDs
	const users = await User.find({ _id: { $in: userIds } }).lean();

	// Create a map of user IDs to usernames
	const userIdToUsername = users.reduce((map, user) => {
		map[user._id] = user.username;
		return map;
	}, {});

	// Replace user IDs with usernames in the 'attending' and 'interested' fields of each event
	events = events.map((event) => {
		event.attending = event.attending.map((userId) => userIdToUsername[userId]);
		event.interested = event.interested.map((userId) => userIdToUsername[userId]);
		return event;
	});

	for (let i = 0; i < posts.length; i++) {
		const post = posts[i];
		const postAuthor = await User.findOne({ _id: post.userID });
		post.author = postAuthor.username;
		post.avatar = postAuthor.avatar;
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
	},

	downvote: async ({ locals, request }) => {
		const { action, postSlug } = await request.json();
		let post = await Post.findById(postSlug);
		let loggedInUser = locals.user.id;
		if (action == false) {
			post.downvotes.push(loggedInUser);
			if (post.upvotes.includes(loggedInUser)) {
				post.upvotes = post.upvotes.filter((like) => like.toString() !== loggedInUser);
			}
		} else {
			post.downvotes = post.downvotes.filter((like) => like.toString() !== loggedInUser);
		}
		await post.save();
	}
};
