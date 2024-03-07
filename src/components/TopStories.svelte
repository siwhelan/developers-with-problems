<script>
	export let topThreeStories;
	// export let topRedditPost
</script>

<div class="pt-3 text-center rounded-lg shadow-md max-w-2xl relativeborder-t-2 border-gray-300">
<h6 class="mb-4">Top Stories of the day</h6>
<div>
	{#each topThreeStories as story}
		<ul class="list-inside mt-4 border-b border-gray-300 pb-2">
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
</div>
