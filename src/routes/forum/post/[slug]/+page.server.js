import { Post } from '../../../../lib/models/post.js';
import { User } from '../../../../lib/models/user.js';
import { Comment } from '../../../../lib/models/comment.js';
import { error, redirect, fail } from '@sveltejs/kit';

export async function load({ params, cookies }) {
	let userID = '';

	// Retrieve the session cookie
	const sessionCookie = cookies.get('session');

	if (sessionCookie) {
		try {
			//TODO
			// Fetch the session using Lucia
			// const { session, user } = await lucia.validateSession(sessionCookie);
			// const session = await adapter.getSessionAndUser(sessionCookie);
			// console.log('session');
			// console.log(event.locals);
			// console.log(session);
			// if (session) {
			// 	// Get the user ID from the session
			// 	userID = session.userId;
			// }
		} catch (error) {
			console.error('Error retrieving session:', error);
		}
	}
	console.log(userID);

	// Fetch post and user data
	try {
		let post = await Post.findById(params.slug).lean();
		let user = await User.findById(post.userID).lean();
		let comments = await Comment.find({ postID: params.slug }).lean();

		let commentAuthors = [];
		for (let comment of comments) {
			let commentAuthor = await User.findById(comment.userID).lean();
			commentAuthors.push(commentAuthor);
		}

		let commentsWithAuthors = comments.map((comment, index) => {
			return {
				...comment,
				author: commentAuthors[index]
			};
		});
		// Check if post and user exist
		if (post && user) {
			// Convert to plain JSON objects
			post = JSON.parse(JSON.stringify(post));
			user = JSON.parse(JSON.stringify(user));
			commentsWithAuthors = JSON.parse(JSON.stringify(commentsWithAuthors)).reverse();
			return { post, user, userID, commentsWithAuthors };
		} else {
			error(404, 'Post or user not found');
		}
	} catch (error) {
		console.error('Error fetching post or user:', error);
		error(500, 'Internal Server Error');
	}
}

export const actions = {
	create: async ({ locals, request, params }) => {
		const formData = await request.formData();
		const commentContent = formData.get('textContent');
		const user = locals.user.id;
		if (!commentContent) {
			return fail(400, { error: 'Error, missing' });
		}
		const newComment = {
			content: commentContent,
			userID: user,
			postID: params.slug
		};
		await Comment.create(newComment);

		console.log('New comment added');
		throw redirect(303, '/forum');
	}
};
