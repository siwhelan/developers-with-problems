import { User } from '../lib/models/user.js';
import {
	fetchTopStories,
	fetchStoryDetails,
	fetchTopRedditTechnology
} from '../services/fetchNews';

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
	let topStories = [];
	let topRedditPosts = [];
	let topRedditPost = [];
	let topStory = [];

	try {
		const storyIds = await fetchTopStories();
		const storyDetailsPromises = storyIds.map((id) => fetchStoryDetails(id));
		topStories = await Promise.all(storyDetailsPromises);
		topStory = topStories[0];
	} catch (error) {
		console.error('Failed to load top stories:', error);
	}

	try {
		topRedditPosts = await fetchTopRedditTechnology();
		topRedditPost = topRedditPosts[0];
	} catch (error) {
		console.error('Failed to load top Reddit posts:', error);
	}

	return {
		currentUserUsername,
		challenge,
		topRedditPost,
		topStory
	};
};
