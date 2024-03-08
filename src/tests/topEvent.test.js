import { render, screen } from '@testing-library/svelte';
import { expect, it, describe } from 'vitest';
import TopEvent from '../components/TopEvent.svelte';

describe('TopEvent Component', () => {
	it('renders the TopEvent component', () => {
		render(TopEvent, { props: { trendingEvent: '' } });
		const component = screen.getByTestId('topEvent');
		expect(component).toBeTruthy();
	});
});
