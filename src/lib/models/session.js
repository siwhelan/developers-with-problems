import mongoose from 'mongoose';

const SessionSchema = new mongoose.Schema(
	{
		_id: {
			type: String,
			required: true
		},
		user_id: {
			type: String,
			required: true
		},
		expires_at: {
			type: Date,
			required: true
		}
	},
	{ collection: 'sessions', id: false }
);

export const Session = mongoose.model('Session', SessionSchema);
