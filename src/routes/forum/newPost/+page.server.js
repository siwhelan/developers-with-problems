import { PostSchema } from '../../..//lib/models/post';

export const load = async () => {
	let posts = await PostSchema.find();

	posts = JSON.parse(JSON.stringify(posts));
	posts = posts.reverse();
	return {
		posts
	};
};

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
