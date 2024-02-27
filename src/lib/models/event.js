const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
	title: { type: String, required: true },
	startDate: { type: Date, required: true },
	endDate: { type: Date, required: true },
	location: { type: String, required: true },
	link: String,
	description: { type: String, required: true },
	free: { type: Boolean, required: true }, // true is "free", false is "paid"
	attending: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
	interested: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
});

const Event = mongoose.model('Event', EventSchema);

module.exports = Event;
