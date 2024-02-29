// Import the Event model and User model
import { Event } from '../../lib/models/event.js';
import { User } from '../../lib/models/user.js';

// Import the Event model
export const load = async () => {
	// .lean is used to return plain JavaScript objects instead of Mongoose documents
	let events = await Event.find().lean();
	events = JSON.parse(JSON.stringify(events));

	// Get the user IDs from the 'attending' and 'interested' fields of the events
	// flatmap is used to flatten the array of arrays into a single array
	const userIds = [
		...events.flatMap((event) => event.attending),
		...events.flatMap((event) => event.interested)
	];

	// Fetch the users with the corresponding IDs
	const users = await User.find({ _id: { $in: userIds } }).lean();

	// Create a map of user IDs to usernames
	const userIdToUsername = users.reduce((map, user) => {
		map[user._id] = user.username;
		return map;
	}, {});

	// Replace user IDs with usernames in the 'attending' and 'interested' fields of each event
	events = events.map((event) => {
		event.attending = event.attending.map((userId) => userIdToUsername[userId]);
		event.interested = event.interested.map((userId) => userIdToUsername[userId]);
		return event;
	});

	return {
		events
	};
};
