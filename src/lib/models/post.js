import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema({
	title: { type: String, required: true },
	content: { type: String, required: true },
	url: String,
	tags: [{ type: String }],
	userID: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
	upvotes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
	downvotes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
	timestamp: { type: Date, default: Date.now }
});

export const Post = mongoose.model('Post', PostSchema);
