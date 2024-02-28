import { connectDB } from '$lib/utils/db';
import { ObjectId } from 'mongodb'; // Import ObjectId for checking and converting

function serializeMongoData(data) {
	return data.map((event) => ({
		...event,
		_id: event._id.toString(), // Convert ObjectId to string
		title: event.title,
		startDate: event.startDate.toISOString(), // Convert Date to ISO string
		endDate: event.endDate.toISOString(), // Convert Date to ISO string
		attending: event.attending.map((id) => id.toString()), // Convert any ObjectId in arrays
		interested: event.interested.map((id) => id.toString()) // Convert any ObjectId in arrays
	}));
}

export async function load() {
	const events = [{ title: 'Test Event', startDate: '2024-01-01' }]; // Example hardcoded data
	return {
		props: { events }
	};
}
