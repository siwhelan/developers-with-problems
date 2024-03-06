import { Post } from '../../../lib/models/post.js';
import { redirect, fail } from '@sveltejs/kit';

export const actions = {
	create: async ({ locals, request }) => {
		const formData = await request.formData();
		const postTitle = formData.get('title');
		const postContent = formData.get('textPost');
		const postUrl = formData.get('link');
		const tags = [formData.get('forum')];
		const user = locals.user.id;
		if (!postTitle || !postContent) {
			return fail(400, { error: 'Error, missing' });
		}
		const newPost = {
			title: postTitle,
			content: postContent,
			url: postUrl,
			userID: user,
			tags: tags
		};
		await Post.create(newPost);

		console.log('New post added');
		throw redirect(303, '/forum');
	}
};
