import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
	{
		_id: {
			type: String,
			required: true
		},
		username: { type: String, required: true, unique: true },
		email: { type: String, required: true, unique: true },
		hashed_password: { type: String, required: true },
		followers: [{ type: String, ref: 'User' }],
		following: [{ type: String, ref: 'User' }],
		avatar: { type: String },
		bio: { type: String },
		social: { type: Object, default: {} }
	},
	{ _id: false, minimize: false }
);

export const User = mongoose.model('User', UserSchema);
