import { User } from '../lib/models/user.js';

export const load = async ({ locals }) => {
	let currentUserUsername;
	let currentUserAvatar;
	try {
		if (locals.user) {
			const currentUserID = locals.user.id;
			console.log(currentUserID);
			const currentUser = await User.findOne({ _id: currentUserID });
			if (currentUser) {
				currentUserUsername = currentUser.username;
				currentUserAvatar = currentUser.avatar;
			} else {
				console.error('User not found in database');
				currentUserUsername = null;
				currentUserAvatar = null;
			}
		} else {
			console.error('No user found in locals');
			currentUserUsername = null;
			currentUserAvatar = null;
		}
	} catch (error) {
		console.error('Error getting logged in user:', error);
		currentUserUsername = null;
		currentUserAvatar = null;
	}

	return {
		currentUserUsername,
		currentUserAvatar
	};
};
