<script>
	export let data;
	$: ({ posts } = data);

	let feedChoice = 'forum';
	// options are forum, dev news, events. Toggling changes what appears in the feed. Default is forum posts
</script>

<div class="px-5 flex flex-col">
	<p class="pt-14 pb-14">Something should go here but idk what</p>
	<!--it looks bad without the space
	maybe codewars of the day?
	-->
	<a class="text-right" href="/forum/newPost">
		<button
			type="button"
			class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
			>New Forum Post</button
		>
	</a>
	<p class="text-2xl">Most recent activity</p>
	<div class="flex-row">
		<button
			on:click={() => (feedChoice = 'forum')}
			type="button"
			class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
			>Forum posts</button
		>

		<button
			on:click={() => (feedChoice = 'devNews')}
			type="button"
			class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
			>Dev News</button
		>
		<button
			type="button"
			class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
			>Events</button
		>
		<button
			type="button"
			class="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
			>Recent Jobs</button
		>
		<button
			type="button"
			class="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
			>Purple</button
		>
	</div>
	{#if feedChoice == 'forum'}
		{#each posts as post}
			<div class="flex flex-row py-5">
				<div>
					<p class="text-xl py-2 px-3">5 ⬆️</p>
					<p class="text-xl py-2 px-3">1 💬</p>
				</div>
				<!-- upvote and comment icon to be added -->
				<div>
					<h2 class="text-2xl pb-2">{post.title}</h2>
					<p class=" pb-3">{post.content}</p>
				</div>
			</div>
		{/each}
	{/if}
	{#if feedChoice == 'devNews'}
		<p>Dev news feed</p>
	{/if}
</div>
