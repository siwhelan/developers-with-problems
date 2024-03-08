import { render, screen } from '@testing-library/svelte';
import { expect, it, describe } from 'vitest';
import navigation from '../components/navigation.svelte';

describe('navigation Component', () => {
	it('renders the navigation component', () => {
		const mockNavigationData = {
			currentUserUsername: '123'
		};

		render(navigation, { props: mockNavigationData });
		const component = screen.getByTestId('navigation');
		expect(component).toBeTruthy();
	});
});
