import { Post } from '../../../../lib/models/post.js';
import { User } from '../../../../lib/models/user.js';
import { Comment } from '../../../../lib/models/comment.js';
import { error, redirect, fail } from '@sveltejs/kit';

export async function load({ locals, params }) {
	let userID = '';

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
			let loggedInUser;
			if (locals.user) {
				loggedInUser = locals.user.id;
			} else {
				loggedInUser = null;
			}

			post = JSON.parse(JSON.stringify(post));
			user = JSON.parse(JSON.stringify(user));

			commentsWithAuthors = JSON.parse(JSON.stringify(commentsWithAuthors)).reverse();
			return { post, user, userID, commentsWithAuthors, loggedInUser };
		} else {
			console.error('Error fetching post or user:', error);
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

		let currentUserID;
		try {
			if (locals.user) {
				currentUserID = locals.user.id;
				if (!commentContent) {
					return fail(400, { error: 'Error, missing' });
				}
				const newComment = {
					content: commentContent,
					userID: currentUserID,
					postID: params.slug
				};
				await Comment.create(newComment);

				console.log('New comment added');
				throw redirect(303, '/forum');
			} else {
				console.error('User not found in database');
				currentUserID = null;
			}
		} catch (error) {
			console.error('Error getting logged in user:', error);
			currentUserID = null;
		}
	},
	upvote: async ({ locals, params, request }) => {
		const upvoted = await request.json();
		let post = await Post.findById(params.slug);
		let loggedInUser = locals.user.id;
		if (upvoted.action == false) {
			post.upvotes.push(loggedInUser);
		} else {
			post.upvotes = post.upvotes.filter((like) => like.toString() !== loggedInUser);
		}
		await post.save();
	}
};
