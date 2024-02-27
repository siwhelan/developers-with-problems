import { PostSchema } from '../../../lib/models/post';

export const actions = {
	create: async ({ request }) => {
		const formData = await request.formData();
		const postTitle = formData.get('title');
		const postContent = formData.get('text');
		const postUrl = formData.get('link');
		const user = 1;

		const newPost = {
			title: postTitle,
			content: postContent,
			url: postUrl,
			userID: user
		};
		await PostSchema.create(newPost);

		console.log('New post added');
		return {
			success: true
		};
	}
};
