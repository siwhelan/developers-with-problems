import { User } from '../lib/models/user.js';

export const load = async ({ locals }) => {
	console.log(locals);
	const userId = locals.user.id;
	const currentUser = await User.findOne({ _id: userId });
	const currentUserUsername = currentUser.username;
	console.log(currentUser);
	// const currentUserID = locals.user.id;
	// const currentUser = await User.findOne({ _id: currentUserID });
	// console.log(currentUser);
	// const currentUserUsername = currentUser.username;
	// console.log(currentUserUsername);
	return {
		userId,
		currentUserUsername
	};
};
