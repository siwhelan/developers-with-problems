import { render, screen } from '@testing-library/svelte';
import { expect, it, describe } from 'vitest';
import TopStories from '../components/TopStories.svelte';

describe('TopStories Component', () => {
	it('renders the TopStories component', () => {
		render(TopStories, { props: { topThreeStories: '' } });
		const component = screen.getByTestId('topStories');
		expect(component).toBeTruthy();
	});
});
