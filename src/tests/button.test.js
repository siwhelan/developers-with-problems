import { render, screen } from '@testing-library/svelte';
import { expect, it, describe } from 'vitest';
import Button from '../components/Button.svelte';

describe('Button Component', () => {
	it('renders the Button component', () => {
		render(Button);
		const button = screen.getByRole('button');
		expect(button).toBeTruthy();
	});
});
