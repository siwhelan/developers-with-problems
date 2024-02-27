import { describe, it, expect, vi, beforeEach } from 'vitest';
import {
	fetchTopStories,
	fetchStoryDetails,
	fetchTopRedditTechnology
} from '../services/fetchNews';

// Mock the global fetch
global.fetch = vi.fn();

const mockSuccessResponse = (data) => {
	return Promise.resolve({
		ok: true,
		json: () => Promise.resolve(data)
	});
};

const mockFailureResponse = () => {
	return Promise.resolve({
		ok: false,
		statusText: 'Network response was not ok'
	});
};

describe('API Service', () => {
	beforeEach(() => {
		fetch.mockClear();
	});

	it('fetchTopStories should fetch and return story IDs', async () => {
		// Create an array of 10 numbers from 1 to 10 to simulate the story IDs
		const mockStoryIds = Array.from({ length: 10 }, (_, i) => i + 1);
		// Mock the fetch function to return a successful response with the story IDs
		fetch.mockImplementationOnce(() => mockSuccessResponse(mockStoryIds));

		const storyIds = await fetchTopStories();
		expect(fetch).toHaveBeenCalledWith('https://hacker-news.firebaseio.com/v0/topstories.json');
		expect(storyIds).toEqual(mockStoryIds.slice(0, 10));
	});

	it('fetchStoryDetails should fetch and return story details', async () => {
		const mockStoryDetails = { id: 1, title: 'Test Story' };
		fetch.mockImplementationOnce(() => mockSuccessResponse(mockStoryDetails));

		const storyDetails = await fetchStoryDetails(1);
		expect(fetch).toHaveBeenCalledWith('https://hacker-news.firebaseio.com/v0/item/1.json');
		expect(storyDetails).toEqual(mockStoryDetails);
	});

	it('fetchTopRedditTechnology should fetch and return posts', async () => {
		const mockRedditPosts = {
			data: { children: [{ data: { title: 'Reddit Post', url: 'http://reddit.com' } }] }
		};
		fetch.mockImplementationOnce(() => mockSuccessResponse(mockRedditPosts));

		const redditPosts = await fetchTopRedditTechnology();
		expect(fetch).toHaveBeenCalledWith('https://www.reddit.com/r/technology/top.json?limit=10');
		expect(redditPosts).toEqual(mockRedditPosts.data.children.map((post) => post.data));
	});

	it('fetchTopStories handles network error', async () => {
		fetch.mockImplementationOnce(() => mockFailureResponse());
		await expect(fetchTopStories()).rejects.toThrow('Network response was not ok');
	});

	it('fetchStoryDetails handles network error', async () => {
		fetch.mockImplementationOnce(() => mockFailureResponse());
		await expect(fetchStoryDetails(1)).rejects.toThrow('Network response was not ok');
	});

	it('fetchTopRedditTechnology handles network error', async () => {
		fetch.mockImplementationOnce(() => mockFailureResponse());
		await expect(fetchTopRedditTechnology()).rejects.toThrow('Network response was not ok');
	});
});
