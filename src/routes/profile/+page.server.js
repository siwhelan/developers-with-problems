import { User } from '../../lib/models/user.js';
const userID = '65ddd5d029a2d12c4b56b38f';

export const load = async () => {
	let user = await User.findOne({ _id: userID });
	let followersUsernames = [];
	let followingUsernames = [];
	//Following and followers contain userIDs, this changes them to usernames
	for (const followerId of user.followers) {
		const follower = await User.findOne({ _id: followerId });
		followersUsernames.push(follower.username);
	}

	for (const followerId of user.following) {
		const follower = await User.findOne({ _id: followerId });
		followingUsernames.push(follower.username);
	}
	user = JSON.parse(JSON.stringify(user));
	user.followers = followersUsernames;
	user.following = followingUsernames;
	return {
		user
	};
};
