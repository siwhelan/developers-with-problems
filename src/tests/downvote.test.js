import { render, screen } from '@testing-library/svelte';
import { expect, it, describe } from 'vitest';
import downvote from '../components/downvote.svelte';

describe('downvote Component', () => {
	it('renders the downvote component', () => {
		render(downvote);
		const component = screen.getByTestId('downvote-icon');
		expect(component).toBeTruthy();
	});
});
