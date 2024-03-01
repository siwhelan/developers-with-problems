import { User } from '../../../lib/models/user.js';
import { Post } from '../../../lib/models/post.js';
const currentUserID = '65e1efebdf80b09f885ce394';
// import { lucia } from 'lucia';

export const load = async ({ params }) => {
	// const userSession = async ({ request }) => {
	// 	// Get the session cookie from the request
	// 	const sessionCookie = request.cookies.get('auth_session');
	// 	if (sessionCookie) {
	// 		// Get the session using the session ID in the cookie
	// 		const session = await lucia.getSession(sessionCookie);
	// 		if (session) {
	// 			// Get the user ID from the session
	// 			const userId = session.userId;
	// 			return {
	// 				status: 200,
	// 				body: userId
	// 			};
	// 		}
	// 	}
	// };
	// const userID = userSession.body;
	// console.log('userIDbelow');
	// console.log(userID);

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

	//If codewars user exists, get codewars info from api
	let codewarsData;
	if (profileUser.social.codewars) {
		const response = await fetch(
			`https://www.codewars.com/api/v1/users/${profileUser.social.codewars}`
		);
		const result = await response.json();
		console.log(result);
		codewarsData = result;
	}

	return { profileUser, myProfile, isFollowing, posts, codewarsData };
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
	},
	addSocials: async ({ request }) => {
		const formData = await request.formData();
		const codewarsUser = formData.get('codewarsUser');
		const linkedinUser = formData.get('linkedinUser');
		const currentUser2 = await User.findOne({ username: 'user2' });
		console.log(formData);
		console.log(currentUser2);
		currentUser2.social.codewars = codewarsUser;
		currentUser2.social.linkedin = linkedinUser;
		await currentUser2.save();
	}
};
