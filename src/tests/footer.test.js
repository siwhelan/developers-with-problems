import { render, screen } from '@testing-library/svelte';
import { expect, it, describe } from 'vitest';
import Footer from '../components/Footer.svelte';

describe('Footer Component', () => {
	it('renders the Footer component', () => {
		render(Footer);
		const component = screen.getByTestId('footer');
		expect(component).toBeTruthy();
	});
});
