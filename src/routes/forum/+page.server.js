import { Post } from '../../lib/models/post.js';
// import { Comment } from '../../lib/models/comment.js';

export const load = async () => {
	let posts = await Post.find().lean();
	posts = JSON.parse(JSON.stringify(posts));
	posts = posts.reverse();

	return {
		posts
	};
};
