<script>
	export let topThreeStories;
	// export let topRedditPost
</script>

<h6>Top Stories of the day</h6>
<div data-testid="topStories">
	{#each topThreeStories as story}
		<ul class="list-inside mt-4">
			<li class="mt-2">
				<a
					href={story.url}
					target="_blank"
					rel="noopener noreferrer"
					class="text-text hover:text-primary">🔗 {story.title}</a
				>
			</li>
		</ul>
	{/each}
	<!-- <ul class="list-inside mt-4">
<li class="mt-2">
    <a
        href={topRedditPost.url}
        target="_blank"
        rel="noopener noreferrer"
        class="text-text hover:text-primary">🔗 {topRedditPost.title}</a
    >
</li>
</ul> -->
</div>
