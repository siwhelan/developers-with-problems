import { Session } from '../lib/models/session.js';
import { User } from '../lib/models/user.js';

export async function validateSession(sessionId) {
	// Retrieve the session from the database
	const session = await Session.findById(sessionId);

	// Check if the session exists and hasn't expired
	if (!session || session.expires_at < new Date()) {
		return { session: null, user: null };
	}

	// Retrieve the associated user from the database
	let user = await User.findById(session.user_id);
	user = user.toObject();
	user._id = user._id.toString();
	delete user.password;

	return { session, user };
}
