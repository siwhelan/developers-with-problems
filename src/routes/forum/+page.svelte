<script>
	import PostLink from '../../components/PostLink.svelte';

	export let data;
	$: ({ posts } = data);
	let feedChoice = 'general';
	//options are general, job, events, news
</script>

<div class="pt-16 my-8">
	<h2 class="text-3xl pb-5 font-bold">Forum</h2>
	<a class="bg-primary hover:bg-dark text-white py-2 px-4 rounded mr-4" href="/forum/newPost">
		Make a new post
	</a>
	<div class="pt-5">
		<button
			class:active={feedChoice == 'general'}
			on:click={() => (feedChoice = 'general')}
			type="button"
			class="text-white bg-primary hover:bg-dark focus:ring-2 focus:ring-accent font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-dark dark:hover:bg-primary focus:outline-none dark:focus:ring-accent"
			>General</button
		>
		<button
			class:active={feedChoice === 'job'}
			on:click={() => (feedChoice = 'job')}
			type="button"
			class="text-white bg-primary hover:bg-dark focus:ring-2 focus:ring-accent font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-dark dark:hover:bg-primary focus:outline-none dark:focus:ring-accent"
			>Job Hunting/Career Advice</button
		>
		<button
			class:active={feedChoice === 'news'}
			on:click={() => (feedChoice = 'news')}
			type="button"
			class="text-white bg-primary hover:bg-dark focus:ring-2 focus:ring-accent font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-dark dark:hover:bg-primary focus:outline-none dark:focus:ring-accent"
			>News Discussion</button
		>
		<button
			class:active={feedChoice === 'events'}
			on:click={() => (feedChoice = 'events')}
			type="button"
			class="text-white bg-primary hover:bg-dark focus:ring-2 focus:ring-accent font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-dark dark:hover:bg-primary focus:outline-none dark:focus:ring-accent"
			>Events Discussion</button
		>
	</div>
	<ul class="my-8 text-left pt-3 bg-background w-full flex flex-col justify-start">
		{#if feedChoice == 'general'}
			<h2 class="text-3xl pb-5 font-bold">General Coding</h2>
			{#each posts.filter((post) => post.tags.includes('general')) as post}
				<PostLink
					postSlug={post._id}
					postTitle={post.title}
					postContent={post.content}
					postUpvotes={post.upvotes}
					upvoteNumber={post.upvotes.length}
					postAuthor={post.author}
					loggedInUser={data.loggedInUser}
				/>
			{/each}
		{/if}
		{#if feedChoice == 'job'}
			<h2 class="text-3xl pb-5 font-bold">Job Hunting</h2>
			{#each posts.filter((post) => post.tags.includes('job')) as post}
				<PostLink
					postSlug={post._id}
					postTitle={post.title}
					postContent={post.content}
					postUpvotes={post.upvotes}
					upvoteNumber={post.upvotes.length}
					postAuthor={post.author}
					loggedInUser={data.loggedInUser}
				/>
			{/each}
		{/if}
		{#if feedChoice == 'events'}
			<h2 class="text-3xl pb-5 font-bold">Events</h2>
			{#each posts.filter((post) => post.tags.includes('events')) as post}
				<PostLink
					postSlug={post._id}
					postTitle={post.title}
					postContent={post.content}
					postUpvotes={post.upvotes}
					upvoteNumber={post.upvotes.length}
					postAuthor={post.author}
					loggedInUser={data.loggedInUser}
				/>
			{/each}
		{/if}
		{#if feedChoice == 'news'}
			<h2 class="text-3xl pb-5 font-bold">Dev News</h2>
			{#each posts.filter((post) => post.tags.includes('news')) as post}
				<PostLink
					postSlug={post._id}
					postTitle={post.title}
					postContent={post.content}
					postUpvotes={post.upvotes}
					upvoteNumber={post.upvotes.length}
					postAuthor={post.author}
					loggedInUser={data.loggedInUser}
				/>
			{/each}
		{/if}
	</ul>
</div>

<style>
	.active {
		background-color: #202937;
	}
</style>
