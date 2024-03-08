import { render, screen } from '@testing-library/svelte';
import { expect, it, describe } from 'vitest';
import SignUpSuccess from '../components/SignUpSuccess.svelte';

describe('SignUpSuccess Component', () => {
	it('renders the SignUpSuccess component', () => {
		render(SignUpSuccess);
		const component = screen.getByTestId('signUpSuccess');
		expect(component).toBeTruthy();
	});
});
