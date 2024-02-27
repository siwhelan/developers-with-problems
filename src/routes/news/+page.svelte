<script>
	import { onMount } from 'svelte';
	import {
		fetchTopStories,
		fetchStoryDetails,
		fetchTopRedditTechnology
	} from '../../services/fetchNews';

	let topStories = [];
	let topRedditPosts = [];

	async function loadTopStories() {
		try {
			const storyIds = await fetchTopStories();
			const storyDetailsPromises = storyIds.map((id) => fetchStoryDetails(id));
			topStories = await Promise.all(storyDetailsPromises);
		} catch (error) {
			console.error('Failed to load top stories:', error);
		}
	}

	async function loadTopRedditPosts() {
		try {
			topRedditPosts = await fetchTopRedditTechnology();
		} catch (error) {
			console.error('Failed to load top Reddit posts:', error);
		}
	}

	onMount(() => {
		loadTopStories();
		loadTopRedditPosts();
	});
</script>

<main>
	<h1>Top Tech News Stories</h1>
	<h2 class="font-bold underline">Hacker News Top Stories</h2>
	{#if topStories.length > 0}
		<ul>
			{#each topStories as story}
				<li>
					<a href={story.url} target="_blank" rel="noopener noreferrer">{story.title}</a>
					<!-- by {story.by} ## OPTIONAL ## -->
				</li>
			{/each}
		</ul>
	{:else}
		<p>Loading top stories from Hacker News...</p>
	{/if}

	<h2 class="font-bold underline">Reddit /r/technology Top Posts</h2>
	{#if topRedditPosts.length > 0}
		<ul>
			{#each topRedditPosts as post}
				<li>
					<a href={post.url} target="_blank" rel="noopener noreferrer">{post.title}</a>
					<!-- by {post.author} ## OPTIONAL ## -->
				</li>
			{/each}
		</ul>
	{:else}
		<p>Loading top posts from Reddit...</p>
	{/if}
</main>
