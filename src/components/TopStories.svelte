<script>
	export let topThreeStories;
	// export let topRedditPost
</script>

<div class="pt-3 text-center rounded-lg shadow-md max-w-2xl relative border-t-2 border-gray-300">
	<h6 class="mt-1 font-bold text-lg">Top Stories of the Day</h6>
	<div class="p-4">
		{#each topThreeStories as story}
			<hr class="mb-4" />
			<ul class="list-inside mt-4 pb-2">
				<li class="mt-2">
					<a
						href={story.url}
						target="_blank"
						rel="noopener noreferrer"
						class="text-text text-[#202937] hover:text-primary font-medium">🔗 {story.title}</a
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
