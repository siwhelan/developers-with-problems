import { render, screen } from '@testing-library/svelte';
import { expect, it, describe } from 'vitest';
import EventsList from '../components/EventsList.svelte';

describe('EventsList Component', () => {
	it('renders the EventsList component', () => {
		const mockEvents = [
			{
				title: 'event 1',
				startDate: '01/01/2000',
				location: 'test location 1',
				description: 'test description 1',
				attending: [],
				interested: []
			},
			{
				title: 'event 2',
				startDate: '01/01/2000',
				location: 'test location 2',
				description: 'test description 2',
				attending: [],
				interested: []
			},
			{
				title: 'event 3',
				startDate: '01/01/2000',
				location: 'test location 3',
				description: 'test description 3',
				attending: [],
				interested: []
			}
		];
		render(EventsList, { props: mockEvents });
		const component = screen.getByTestId('eventsList');
		expect(component).toBeTruthy();
	});
});
