import mongoose from 'mongoose';

const EventSchema = new mongoose.Schema({
	title: { type: String, required: true },
	startDate: { type: Date, required: true },
	endDate: { type: Date, required: true },
	location: { type: String, required: true },
	link: String,
	description: { type: String, required: true },
	free: { type: Boolean, required: true }, // true is "free", false is "paid"
	attending: [{ type: String, ref: 'User' }],
	interested: [{ type: String, ref: 'User' }]
});

export const Event = mongoose.model('Event', EventSchema);
