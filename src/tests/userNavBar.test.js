import { render, screen } from '@testing-library/svelte';
import { expect, it, describe } from 'vitest';
import UserNavBar from '../components/UserNavBar.svelte';

describe('UserNavBar Component', () => {
	it('renders the UserNavBar component', () => {
		const mockUserNavBarData = {
			currentUserUsername: 'test username',
			currentUserAvatar: 'test Avatar'
		};

		render(UserNavBar, { props: mockUserNavBarData });
		const component = screen.getByTestId('navbar');
		expect(component).toBeTruthy();
	});
});
