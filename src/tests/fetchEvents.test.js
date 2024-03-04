import { fetchEvents } from '../services/fetchEvents.js';
import { Event } from '../lib/models/Event.js';
import { test, expect } from 'vitest';

test('fetchEvents', async () => {
	const mockEvents = [
		{ id: 1, name: 'Event 1' },
		{ id: 2, name: 'Event 2' }
	];

	// Mock Event.find method
	Event.find = () => ({
		lean: () => Promise.resolve(mockEvents)
	});

	const events = await fetchEvents();

	expect(events).toEqual(mockEvents);
});
