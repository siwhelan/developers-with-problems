import { render, screen } from '@testing-library/svelte';
import { expect, it, describe } from 'vitest';
import upvote from '../components/upvote.svelte';

describe('upvote Component', () => {
	it('renders the upvote component', () => {
		render(upvote);
		const component = screen.getByTestId('upvote');
		expect(component).toBeTruthy();
	});
});
