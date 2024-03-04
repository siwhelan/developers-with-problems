import { User } from '../../../lib/models/user.js';
import { Post } from '../../../lib/models/post.js';
let currentUserID;

export const load = async ({ params, locals }) => {
	currentUserID = locals.user.id;

	let profileUser = await User.findOne({ username: params.slug });
	//Checks if the current user is the same as the logged in user
	let myProfile = false;
	if (profileUser._id.toString() == currentUserID) {
		myProfile = true;
	}

	let followersUsernames = [];
	let followingUsernames = [];
	let isFollowing;

	// Check to see if user is currently following
	if (profileUser.followers.indexOf(currentUserID) === -1) {
		isFollowing = false;
	} else {
		isFollowing = true;
	}

	//Following and followers contain userIDs, this changes them to usernames
	for (const followerId of profileUser.followers) {
		const follower = await User.findOne({ _id: followerId });
		followersUsernames.push(follower.username);
	}

	for (const followerId of profileUser.following) {
		const follower = await User.findOne({ _id: followerId });
		followingUsernames.push(follower.username);
	}
	profileUser = JSON.parse(JSON.stringify(profileUser));
	profileUser.followers = followersUsernames;
	profileUser.following = followingUsernames;

	//Find the posts by the profileUser._id
	let posts = await Post.find({ userID: profileUser._id });
	posts = JSON.parse(JSON.stringify(posts));

	let loggedInUser;
	if (locals.user) {
		loggedInUser = locals.user.id;
	} else {
		loggedInUser = null;
	}

	return { profileUser, myProfile, isFollowing, posts, loggedInUser };
};

export const actions = {
	create: async ({ request }) => {
		const formData = await request.formData();
		const profileUserID = formData.get('profileUserID');
		let isFollowing = formData.get('isFollowing');
		const currentUser = await User.findOne({ _id: currentUserID });
		const profileUser = await User.findOne({ _id: profileUserID });
		const userIndex = currentUser.following.indexOf(profileUserID);
		const profileUserIndex = profileUser.followers.indexOf(currentUser);
		if (userIndex !== -1) {
			currentUser.following.splice(userIndex, 1);
			profileUser.followers.splice(profileUserIndex, 1);
		} else {
			currentUser.following.push(profileUserID);
			profileUser.followers.push(currentUser);
		}

		await currentUser.save();
		await profileUser.save();

		const updatedIsFollowing = !isFollowing;
		return { success: true, isFollowing: updatedIsFollowing };
	}
};
