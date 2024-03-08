import { render, screen } from '@testing-library/svelte';
import { expect, it, describe } from 'vitest';
import Comment from '../components/Comment.svelte';

describe('Comment Component', () => {
	it('renders the Comment component', () => {
		const mockCommentData = {
			commentUser: '123',
			commentContent: 'test content',
			commentTime: '456',
			commentAvatar: '789',
			loggedInUser: '123',
			commentId: 'abc',
			commentUpvotes: ['123'],
			commentDownvotes: []
		};

		render(Comment, { props: mockCommentData });
		const component = screen.getByRole('article');
		expect(component).toBeTruthy();
	});
});
