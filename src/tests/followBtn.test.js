import { render, screen } from '@testing-library/svelte';
import { expect, it, describe } from 'vitest';
import followBtn from '../components/followBtn.svelte';

describe('followBtn Component', () => {
	it('renders the followBtn component', () => {
		const mockFollowBtnData = {
			profileUserID: '123',
			isFollowing: true,
			onClick: 'abc'
		};

		render(followBtn, { props: mockFollowBtnData });
		const component = screen.getByRole('button');
		expect(component).toBeTruthy();
		expect(component.textContent).toBe('Unfollow');
	});
});
