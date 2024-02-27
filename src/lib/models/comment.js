// const mongoose = require('mongoose');
import mongoose from 'mongoose';

const CommentSchema = new mongoose.Schema({
	content: { type: String, required: true },
	userID: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
	postID: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }],
	timestamp: { type: Date, default: Date.now }
});

export const Comment = mongoose.model('Comment', CommentSchema);
