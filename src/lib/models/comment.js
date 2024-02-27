const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
	content: { type: String, required: true },
	userID: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
	postID: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }],
	timestamp: { type: Date, default: Date.now }
});

const Comment = mongoose.model('Comment', CommentSchema);

module.exports = Comment;
