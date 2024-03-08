import { render, screen } from '@testing-library/svelte';
import { expect, it, describe } from 'vitest';
import CodewarsInfo from '../components/CodewarsInfo.svelte';

describe('CodewarsInfo Component', () => {
	it('renders the CodewarsInfo component', () => {
		const codewarsData = {
			username: 'testUser',
			leaderboardPosition: 1000,
			ranks: {
				overall: {
					name: 'test rank'
				}
			},
			honor: 2000,
			codeChallenges: {
				totalCompleted: 50
			}
		};
		render(CodewarsInfo, { props: { codewarsData } });

		const asideElement = screen.getByTestId('codewars-info');
		const logoImage = screen.getByAltText('codewars logo');
		const codeWarsTitle = screen.getByText('CodeWars');
		const usernameLink = screen.getByText('testUser');
		const leaderboardPositionText = screen.getByText('Leaderboard Position: 1000');
		const rankText = screen.getByText('Rank: test rank');
		const honorText = screen.getByText('Honor: 2000');
		const challengesCompletedText = screen.getByText('Challenges Completed: 50');

		expect(asideElement).toBeTruthy();
		expect(logoImage).toBeTruthy();
		expect(codeWarsTitle).toBeTruthy();
		expect(usernameLink).toBeTruthy();
		expect(leaderboardPositionText).toBeTruthy();
		expect(rankText).toBeTruthy();
		expect(honorText).toBeTruthy();
		expect(challengesCompletedText).toBeTruthy();
	});
});
