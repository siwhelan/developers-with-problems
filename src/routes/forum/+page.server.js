import { Post } from '../../lib/models/post.js';
import { User } from '../../lib/models/user.js';

export const load = async () => {
	let posts = await Post.find().lean();
	posts = JSON.parse(JSON.stringify(posts));
	posts = posts.reverse();
	for (let i = 0; i < posts.length; i++) {
		const post = posts[i];
		const postAuthor = await User.findOne({ _id: post.userID });
		post.author = postAuthor.username;
	}
	return {
		posts
	};
};
