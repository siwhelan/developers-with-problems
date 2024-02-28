// Import the Event model
import { Event } from '../../lib/models/event.js';

export const load = async () => {
	let events = await Event.find().lean();
	// console.log(events);
	events = JSON.parse(JSON.stringify(events));
	events = events.reverse();
	return {
		events
	};
};
