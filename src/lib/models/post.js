import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema({
	title: { type: String, required: true },
	content: { type: String, required: true },
	url: String,
	tags: [{ type: String }],
	userID: { type: String, ref: 'User', required: true },
	upvotes: [{ type: String, ref: 'User' }],
	downvotes: [{ type: String, ref: 'User' }],
	timestamp: { type: Date, default: Date.now }
});

export const Post = mongoose.model('Post', PostSchema);
// const PostModel = mongoose.models.PostSchema || mongoose.model('Post', PostSchema);
// module.exports = PostModel;
