import mongoose from 'mongoose';

const CommentSchema = new mongoose.Schema({
	content: { type: String, required: true },
	userID: { type: String, ref: 'User', required: true },
	postID: { type: String, ref: 'Post', required: true },
	upvotes: [{ type: String, ref: 'User' }],
	downvotes: [{ type: String, ref: 'User' }],
	timestamp: { type: Date, default: Date.now }
});

export const Comment = mongoose.model('Comment', CommentSchema);
