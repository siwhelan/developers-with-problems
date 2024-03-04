<script>
	import News from '../components/News.svelte';
	import PostLink from '../components/PostLink.svelte';
	export let currentUserUsername;
	export let data;
	$: ({ posts, currentUserUsername } = data);

	let feedChoice = 'forum';
	// options are forum, dev news, events. Toggling changes what appears in the feed. Default is forum posts
</script>

<div class="px-5 pt-10 flex flex-col">
	<div class="flex pb-10 h-24 leading-5">
		<h1 class="mb-4 text-3xl font-extrabold text-dark dark:text-white md:text-5xl lg:text-6xl">
			<span class="text-transparent bg-clip-text bg-gradient-to-r from-dark to-primary">
				<span></span>Developers with</span
			> Problems
		</h1>
	</div>
	<div class="max-w-48 ml-auto mr-0">
		<a
			href="/forum/newPost"
			type="button"
			class="text-white bg-primary hover:bg-dark focus:ring-2 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-primary focus:outline-none dark:focus:ring-blue-800"
			>New Forum Post</a
		>
	</div>
	<!-- </a> -->
	<div>
		<h2 class="text-3xl font-bold pb-2">Most Recent Activity</h2>
	</div>
	<div class="flex-row py-4">
		<button
			class:active={feedChoice === 'forum'}
			on:click={() => (feedChoice = 'forum')}
			type="button"
			class="text-white bg-primary hover:bg-dark focus:ring-2 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-primary focus:outline-none dark:focus:ring-blue-800"
			>Forum Posts</button
		>

		<button
			class:active={feedChoice === 'devNews'}
			on:click={() => (feedChoice = 'devNews')}
			type="button"
			class="text-white bg-primary hover:bg-dark focus:ring-2 focus:ring-accent font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-dark dark:hover:bg-primary focus:outline-none dark:focus:ring-accent"
			>Dev News</button
		>
		<button
			type="button"
			class="text-white bg-primary hover:bg-dark focus:ring-2 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-primary focus:outline-none dark:focus:ring-blue-800"
			>Events</button
		>
		<button
			type="button"
			class="text-white bg-primary hover:bg-dark focus:ring-2 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-primary focus:outline-none dark:focus:ring-blue-800"
			>Recent Jobs</button
		>
		<!-- <button
			type="button"
			class="text-white bg-purple-700 hover:bg-dark focus:ring-2 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-primary focus:outline-none dark:focus:ring-blue-800"
			>Purple</button
		> -->
	</div>
	{#if feedChoice == 'forum'}
		{#each posts as post}
			<div class="flex flex-col">
				<PostLink
					postSlug={post._id}
					postTitle={post.title}
					postContent={post.content}
					postUpvotes={post.upvotes}
					upvoteNumber={post.upvotes.length}
					postAuthor={post.author}
					loggedInUser={data.loggedInUser}
				/>
			</div>
		{/each}
	{/if}
	{#if feedChoice == 'devNews'}
		<div class="py-5">
			<News />
		</div>
	{/if}
</div>

<style>
	.active {
		background-color: #202937;
	}
</style>
