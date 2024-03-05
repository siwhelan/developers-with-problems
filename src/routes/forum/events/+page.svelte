<script>
	import PostLink from '../../../components/PostLink.svelte';

	export let data;
	$: ({ eventsPosts } = data);
	let feedChoice = 'events';
	console.log('data', data);
	//options are general, job, events, news
</script>

<div class="pt-16 my-8">
	<h2 class="text-3xl pb-5 font-bold">Forum</h2>
	<a class="bg-primary hover:bg-dark text-white py-2 px-4 rounded mr-4" href="/forum/newPost">
		Make a new post
	</a>
	<div class="pt-5">
		<a href="/forum">
			<button
				class:active={feedChoice == 'general'}
				type="button"
				class="text-white bg-primary hover:bg-dark focus:ring-2 focus:ring-accent font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-dark dark:hover:bg-primary focus:outline-none dark:focus:ring-accent"
				>General</button
			>
		</a>
		<a href="/forum/jobs">
			<button
				class:active={feedChoice === 'job'}
				type="button"
				class="text-white bg-primary hover:bg-dark focus:ring-2 focus:ring-accent font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-dark dark:hover:bg-primary focus:outline-none dark:focus:ring-accent"
				>Job Hunting/Career Advice</button
			>
		</a>
		<a href="/forum/news">
			<button
				class:active={feedChoice === 'news'}
				type="button"
				class="text-white bg-primary hover:bg-dark focus:ring-2 focus:ring-accent font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-dark dark:hover:bg-primary focus:outline-none dark:focus:ring-accent"
				>News Discussion</button
			>
		</a>
		<button
			class:active={feedChoice === 'events'}
			type="button"
			class="text-white bg-primary hover:bg-dark focus:ring-2 focus:ring-accent font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-dark dark:hover:bg-primary focus:outline-none dark:focus:ring-accent"
			>Events Discussion</button
		>
	</div>
	<ul class="my-8 text-left pt-3 bg-background w-full flex flex-col justify-start">
		<h2 class="text-3xl pb-5 font-bold">Events</h2>
		{#each eventsPosts as post}
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
	</ul>
</div>

<style>
	.active {
		background-color: #202937;
	}
</style>
