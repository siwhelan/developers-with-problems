import { Event } from '../lib/models/event.js';

export async function fetchEvents() {
	const events = await Event.find().lean();
	// console.log(`fetchEvents page: ${JSON.stringify(events)}`);

	return JSON.parse(JSON.stringify(events));
}
