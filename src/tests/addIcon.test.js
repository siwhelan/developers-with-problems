import { render, screen } from '@testing-library/svelte';
import { expect, it, describe } from 'vitest';
import AddIcon from '../components/AddIcon.svelte';

describe('AddIcon Component', () => {
	it('renders an icon', () => {
		render(AddIcon);
		const icon = screen.getByTestId('add-icon');
		expect(icon).toBeTruthy();
	});
});
