import { Post } from '../lib/models/post.js';
import { User } from '../lib/models/user.js';

export const load = async () => {
	let posts = await Post.find().lean();
	// console.log(posts);
	posts = JSON.parse(JSON.stringify(posts));
	posts = posts.reverse().slice(0, 10);
	for (let i = 0; i < posts.length; i++) {
		const post = posts[i];
		console.log('----------post-------------');
		console.log(post);
		console.log(post.userID);
		const postAuthor = await User.findOne({ _id: post.userID });
		console.log(postAuthor);
		post.author = postAuthor.username;
	}
	return {
		posts
	};
};
