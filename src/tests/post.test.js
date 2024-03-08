import { render, screen } from '@testing-library/svelte';
import { expect, it, describe } from 'vitest';
import Post from '../components/Post.svelte';

describe('Post Component', () => {
	it('renders the Post component', () => {
		const mockPostData = {
			postId: '123',
			postTitle: 'test title',
			postContent: 'test content',
			postAuthor: 'test author',
			avatar: 'test avatar',
			postUpvotes: [],
			postDownvotes: [],
			loggedInUser: true
		};
		render(Post, { props: mockPostData });
		const component = screen.getByTestId('posts');
		expect(component).toBeTruthy();
	});
});
