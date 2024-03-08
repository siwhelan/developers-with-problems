import { render, screen } from '@testing-library/svelte';
import { expect, it, describe } from 'vitest';
import upvoted from '../components/upvoted.svelte';

describe('upvoted Component', () => {
	it('renders the upvoted component', () => {
		render(upvoted);
		const component = screen.getByTestId('upvoted');
		expect(component).toBeTruthy();
	});
});
