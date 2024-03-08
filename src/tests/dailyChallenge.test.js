import { render, screen } from '@testing-library/svelte';
import { expect, it, describe } from 'vitest';
import DailyChallenge from '../components/DailyChallenge.svelte';

describe('DailyChallenge Component', () => {
	it('renders the DailyChallenge component', () => {
		const mockChallengeData = {
			challenge: {
				name: 'test challenge',
				rank: {
					name: 'test rank name'
				},
				description: 'test description',
				languages: ['test lang 1', 'test lang 2']
			}
		};

		render(DailyChallenge, { props: mockChallengeData });
		const component = screen.getByText('Codewars Daily Challenge');
		expect(component).toBeTruthy();
	});
});
