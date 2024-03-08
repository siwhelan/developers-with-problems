import { render, screen } from '@testing-library/svelte';
import { expect, it, describe } from 'vitest';
import Profile from '../components/Profile.svelte';

describe('Profile Component', () => {
	it('renders the Profile component', () => {
		const mockProfileData = {
			profileUser: { social: { codewars: 'test user' } },
			followBtnBool: true,
			onClick: '123',
			isFollowing: false,
			posts: [],
			codeWarsData: {},
			loggedInUser: true
		};
		render(Profile, { props: mockProfileData });
		const component = screen.getByTestId('profile');
		expect(component).toBeTruthy();
	});
});
