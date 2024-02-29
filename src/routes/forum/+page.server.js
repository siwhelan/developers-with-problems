import { Post } from '../../lib/models/post.js';

export const load = async () => {
	let posts = await Post.find().lean();
	posts = JSON.parse(JSON.stringify(posts));
	posts = posts.reverse();
	return {
		posts
	};
};
