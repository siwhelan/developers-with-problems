// import { User } from '../../lib/models/user.js';
// const userID = '65ddd5d029a2d12c4b56b38f';

// export const load = async () => {
// 	let user = await User.findOne({ _id: userID });
// 	let followersUsernames = [];
// 	let followingUsernames = [];
// 	//Following and followers contain userIDs, this changes them to usernames
// 	for (const followerId of user.followers) {
// 		const follower = await User.findOne({ _id: followerId });
// 		followersUsernames.push(follower.username);
// 	}

// 	for (const followerId of user.following) {
// 		const follower = await User.findOne({ _id: followerId });
// 		followingUsernames.push(follower.username);
// 	}
// 	user = JSON.parse(JSON.stringify(user));
// 	user.followers = followersUsernames;
// 	user.following = followingUsernames;
// 	return {
// 		user
// 	};
// };
import { Post } from '../../lib/models/post.js';
import { validateSession } from '../../services/validateSession.js';
import { loadSessionId } from '../../services/loadSessionId.js';

export const load = async ({ cookies }) => {
	const sessionId = await loadSessionId(cookies);

	const { session, user } = await validateSession(sessionId);
	console.log('Session:', session);
	console.log('User:', user);

	if (!session || !user) {
		console.log('Invalid session');
		return {
			status: 401,
			body: 'Invalid session'
		};
	}

	const posts = (await Post.find({ userID: user._id })).map((post) => {
		const postObject = post.toObject();
		postObject._id = postObject._id.toString();
		postObject.userID = postObject.userID.toString();
		return postObject;
	});

	console.log('Posts:', posts);

	return { user, posts };
};
