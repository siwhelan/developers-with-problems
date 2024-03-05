import { User } from '../lib/models/user.js';

export async function fetchUserProfilePic(userId) {
	const user = await User.findById(userId).lean();
	if (!user) {
		throw new Error(`User not found! ID: ${userId}`);
	}
	console.log('fetchUserProfilePic response:', user);
	return user.avatar;
}
