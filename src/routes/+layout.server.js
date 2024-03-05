import { User } from '../lib/models/user.js';

export const load = async ({ locals }) => {
	let currentUserUsername;
	try {
		if (locals.user) {
			const currentUserID = locals.user.id;
			// console.log(currentUserID);
			// const currentUserID = '123';
			const currentUser = await User.findOne({ _id: currentUserID });
			// console.log(currentUser);
			if (currentUser) {
				currentUserUsername = currentUser.username;
				// console.log(currentUserUsername);
			} else {
				console.error('User not found in database');
				currentUserUsername = null;
			}
		} else {
			console.error('No user found in locals');
			currentUserUsername = null;
		}
	} catch (error) {
		console.error('Error getting logged in user:', error);
		currentUserUsername = null;
	}

	return {
		currentUserUsername
	};
};
