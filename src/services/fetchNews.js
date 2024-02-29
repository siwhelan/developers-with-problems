// Fetches the IDs of the top 20 stories from Hacker News.
export async function fetchTopStories() {
	const topStoriesUrl = 'https://hacker-news.firebaseio.com/v0/topstories.json';
	try {
		// async GET request to the URL
		const response = await fetch(topStoriesUrl);
		if (!response.ok) {
			throw new Error('Network response was not ok');
		}
		// Parses the response body as JSON, which is an array of IDs
		const storyIds = await response.json();
		// Returns the first 10 IDs from the list
		return storyIds.slice(0, 10);
	} catch (error) {
		// Logs any errors
		console.error('There was a problem with your fetch operation:', error);
		// Rethrows the error
		throw error;
	}
}

// Fetches details for a specific story given its ID.
export async function fetchStoryDetails(storyId) {
	const storyDetailsUrl = `https://hacker-news.firebaseio.com/v0/item/${storyId}.json`;
	try {
		const response = await fetch(storyDetailsUrl);
		if (!response.ok) {
			throw new Error('Network response was not ok');
		}
		// Parses and returns the response body as JSON, containing the story's details
		return response.json();
	} catch (error) {
		console.error('Error fetching story details:', error);
		throw error;
	}
}

// Fetches the top 10 stories from Reddit's /r/technology
export async function fetchTopRedditTechnology() {
	const redditUrl = 'https://www.reddit.com/r/technology/top.json?limit=10';
	try {
		const response = await fetch(redditUrl);
		if (!response.ok) {
			throw new Error('Network response was not ok');
		}
		const jsonData = await response.json();
		// The actual posts are nested in jsonData.data.children
		// Each post can be found as a child's data property
		return jsonData.data.children.map((post) => post.data);
	} catch (error) {
		console.error('Error fetching top stories from Reddit:', error);
		throw error;
	}
}
