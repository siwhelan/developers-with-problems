import { User } from '../lib/models/user.js';

export const load = async ({ locals }) => {
	console.log('-----------------');
	console.log(locals);
	const currentUserID = locals.user.id;
	// const currentUserID = '123';
	const currentUser = await User.findOne({ _id: currentUserID });
	console.log(currentUser);
	const currentUserUsername = currentUser.username;
	console.log(currentUserUsername);
	return {
		currentUserUsername
	};
};
