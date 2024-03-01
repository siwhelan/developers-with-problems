import { Post } from '../../../lib/models/post.js';
import { redirect, fail } from '@sveltejs/kit';

export const actions = {
	create: async ({ locals, request }) => {
		const formData = await request.formData();
		const postTitle = formData.get('title');
		const postContent = formData.get('textPost');
		console.log(postContent);
		const postUrl = formData.get('link');
		console.log('local', locals);
		const user = locals.user.id;
		if (!postTitle || !postContent) {
			return fail(400, { error: 'Error, missing' });
		}
		const newPost = {
			title: postTitle,
			content: postContent,
			url: postUrl,
			userID: user
		};
		console.log(Post);
		await Post.create(newPost);

		console.log('New post added');
		throw redirect(303, '/forum');
	}
};
