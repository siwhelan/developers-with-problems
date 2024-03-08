import { render, screen } from '@testing-library/svelte';
import { expect, it, describe } from 'vitest';
import PostLink from '../components/PostLink.svelte';

describe('PostLink Component', () => {
	it('renders the PostLink component', () => {
		const mockPostData = {
			postTitle: 'test title',
			postContent: 'test content',
			postAuthor: 'test author',
			postAvatar: 'test avatar',
			postUpvotes: [],
			postDownvotes: [],
			loggedInUser: true,
			postSlug: '123'
		};
		render(PostLink, { props: mockPostData });
		const component = screen.getByTestId('postLink');
		expect(component).toBeTruthy();
	});
});
