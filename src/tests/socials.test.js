import { render, screen } from '@testing-library/svelte';
import { expect, it, describe } from 'vitest';
import Socials from '../components/Socials.svelte';

describe('Socials Component', () => {
	it('renders the Socials component', () => {
		const mockSocialsData = {
			profileUserID: '123',
			isFollowing: true,
			onClick: '123'
		};
		render(Socials, { props: mockSocialsData });
		const component = screen.getByTestId('socials');
		expect(component).toBeTruthy();
	});
});
