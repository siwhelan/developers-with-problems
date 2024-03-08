import { render, screen } from '@testing-library/svelte';
import { expect, it, describe } from 'vitest';
import downvoted from '../components/downvoted.svelte';

describe('downvoted Component', () => {
	it('renders the downvoted component', () => {
		render(downvoted);
		const component = screen.getByTestId('downvoted-icon');
		expect(component).toBeTruthy();
	});
});
