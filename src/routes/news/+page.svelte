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

<div class="pt-24">
	<h2 class="text-3xl font-bold">News</h2>
</div>
<div class="flex justify-left items-left">
	<main class="text-left">
		<div class="my-4 p-4 max-w-2xl mx-auto relative text-dark text-ellipsis overflow-hidden ...">
			<h2 class="font-extrabold underline text-text">Hacker News Top Stories</h2>
			{#if topStories.length > 0}
				<ul class="list-inside mt-4">
					{#each topStories as story, i (story.id)}
						<li class="mt-2">
							<a
								href={story.url}
								target="_blank"
								rel="noopener noreferrer"
								class="text-text hover:text-primary">🔗 {story.title}</a
							>
						</li>
						{#if i < topStories.length - 1}
							<hr class="my-2" />
						{/if}
					{/each}
				</ul>
			{:else}
				<p>Loading top stories from Hacker News...</p>
			{/if}
		</div>

		<div class="my-4 p-4 max-w-2xl mx-auto relative text-dark text-ellipsis overflow-hidden ...">
			<h2 class="font-extrabold underline text-text text-ellipsis overflow-hidden ...">
				Reddit /r/technology Top Posts
			</h2>
			{#if topRedditPosts.length > 0}
				<ul class="list-inside mt-4">
					{#each topRedditPosts as post, i (post.id)}
						<li class="mt-2">
							<a
								href={post.url}
								target="_blank"
								rel="noopener noreferrer"
								class="text-text hover:text-primary">🔗 {post.title}</a
							>
						</li>
						{#if i < topRedditPosts.length - 1}
							<hr class="my-2" />
						{/if}
					{/each}
				</ul>
			{:else}
				<p>Loading top posts from Reddit...</p>
			{/if}
		</div>
	</main>
</div>
