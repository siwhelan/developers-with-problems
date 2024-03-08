import { render, screen } from '@testing-library/svelte';
import { expect, it, describe } from 'vitest';
import CareersList from '../components/CareersList.svelte';

describe('CareersList Component', () => {
	it('renders the CareersList component', () => {
		render(CareersList);
		const list = screen.getByRole('list');
		expect(list).toBeTruthy();
	});
});
