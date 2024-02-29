import mongoose from 'mongoose';

const JobSchema = new mongoose.Schema({
	title: { type: String, required: true },
	description: { type: String, required: true },
	// level: { type: String, required: true }, // Entry, Mid, Senior
	salary: { type: String, required: true },
	company: { type: String, required: true },
	location: { type: String, required: true },
	tags: [{ type: String }], // JavaScript, Node.js, React, etc.
	timestamp: { type: Date, default: Date.now },
	// add 28 days on to the timestamped  date
	closingDate: { type: Date, default: () => new Date(+new Date() + 28 * 24 * 60 * 60 * 1000) },
	userID: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
});

export const Job = mongoose.model('Job', JobSchema);

// removed 'level' as all jobs are entry level
