import { Comment } from '../../../../lib/models/comment';

export const actions = {
	upvote: async ({ locals, params, request }) => {
		console.log(params);
		const upvoted = await request.json();
		let post = await Comment.findById(params.id);
		let loggedInUser = locals.user.id;
		if (upvoted.action == false) {
			post.upvotes.push(loggedInUser);
			if (post.downvotes.includes(loggedInUser)) {
				post.downvotes = post.downvotes.filter((like) => like.toString() !== loggedInUser);
			}
		} else {
			post.upvotes = post.upvotes.filter((like) => like.toString() !== loggedInUser);
		}
		await post.save();
		post = JSON.parse(JSON.stringify(post));
		return { post };
	},
	downvote: async ({ locals, params, request }) => {
		const downvoted = await request.json();
		let post = await Comment.findById(params.id);
		let loggedInUser = locals.user.id;
		if (downvoted.action == false) {
			post.downvotes.push(loggedInUser);
			if (post.upvotes.includes(loggedInUser)) {
				post.upvotes = post.upvotes.filter((like) => like.toString() !== loggedInUser);
			}
		} else {
			post.downvotes = post.downvotes.filter((like) => like.toString() !== loggedInUser);
		}
		await post.save();
		post = JSON.parse(JSON.stringify(post));
		return { post };
	}
};
