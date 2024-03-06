import { Post } from '../../../lib/models/post.js';
import { User } from '../../../lib/models/user.js';

export async function load({ locals }) {
	let posts = await Post.find().lean();

	posts = posts.reverse();
	let eventsPosts = posts.filter((post) => {
		return post.tags && post.tags.includes('events');
	});
	eventsPosts = JSON.parse(JSON.stringify(eventsPosts));

	for (let i = 0; i < eventsPosts.length; i++) {
		const post = eventsPosts[i];
		const postAuthor = await User.findOne({ _id: post.userID });
		post.author = postAuthor.username;
		post.avatar = postAuthor.avatar;
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
