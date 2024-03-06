import { User } from '../lib/models/user.js';
import { fetchEvents } from '../services/fetchEvents.js';
import {
	fetchTopStories,
	fetchStoryDetails
	// fetchTopRedditTechnology
} from '../services/fetchNews';

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

	//Get codewars challenge
	let challenge;
	try {
		const URL = 'https://www.codewars.com/api/v1/code-challenges/55e7280b40e1c4a06d0000aa';
		const response = await fetch(URL);
		const result = await response.json();
		// console.log(result);
		challenge = result;
	} catch (err) {
		console.log(err);
	}
	let topStories;
	let topThreeStories;
	// let topRedditPosts;
	// let topRedditPost;

	try {
		const storyIds = await fetchTopStories();
		const storyDetailsPromises = storyIds.map((id) => fetchStoryDetails(id));
		topStories = await Promise.all(storyDetailsPromises);
		topThreeStories = topStories.slice(0, 3);
	} catch (error) {
		console.error('Failed to load top stories:', error);
	}

	// try {
	// 	topRedditPosts = await fetchTopRedditTechnology();
	// 	topRedditPost = topRedditPosts[0];
	// } catch (error) {
	// 	console.error('Failed to load top Reddit posts:', error);
	// }

	let trendingEvent;
	try {
		const result = await fetchEvents();
		const newMap = new Map();
		for (let i = 0; i < result.length; i++) {
			newMap.set(i, result[i].interested.length);
		}
		let values = Array.from(newMap.values());
		let mostInterested = values.sort(function (a, b) {
			return b - a;
		})[0];

		for (let i = 0; i < result.length; i++) {
			if (newMap.get(i) == mostInterested) {
				trendingEvent = result[i];
				break;
			}
		}
	} catch (error) {
		console.log(error);
	}

	return {
		currentUserUsername,
		currentUserAvatar
		challenge,
		// topRedditPost,
		topThreeStories,
		trendingEvent
	};
};
