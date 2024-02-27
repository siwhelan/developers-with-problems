import mongoose from 'mongoose';

const ResourceSchema = new mongoose.Schema({
	title: { type: String, required: true },
	url: { type: String, required: true },
	description: { type: String, required: true },
	tags: [{ type: String }],
	timestamp: { type: Date, default: Date.now },
	upvotes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
	downvotes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
	userID: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
});

export const Resource = mongoose.model('Resource', ResourceSchema);
