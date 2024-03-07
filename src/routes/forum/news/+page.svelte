<script>
	import PostLink from '../../../components/PostLink.svelte';

	export let data;
	$: ({ eventsPosts } = data);
	let feedChoice = 'news';
	console.log('data', data);
	//options are general, job, events, news
</script>

<div class="pt-16 my-8">
	<h2 class="text-3xl pb-5 font-bold">Forum</h2>
	<a
		class="text-outline hover:text-outline-hover bg-primary hover:bg-dark text-white py-2 px-4 rounded mr-4"
		href="/forum/newPost"
	>
		Make a new post
	</a>
	<div class="pt-5">
		<a href="/forum">
			<button
				class:active={feedChoice == 'general'}
				type="button"
				class="text-outline hover:text-outline-hover text-white bg-primary hover:bg-dark focus:ring-2 focus:ring-accent font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-dark dark:hover:bg-primary focus:outline-none dark:focus:ring-accent"
				>General</button
			>
		</a>
		<a href="/forum/jobs">
			<button
				class:active={feedChoice === 'job'}
				type="button"
				class="text-outline hover:text-outline-hover text-white bg-primary hover:bg-dark focus:ring-2 focus:ring-accent font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-dark dark:hover:bg-primary focus:outline-none dark:focus:ring-accent"
				>Job Hunting/Career Advice</button
			>
		</a>
		<a href="/forum/news">
			<button
				class:active={feedChoice === 'news'}
				type="button"
				class="text-outline hover:text-outline-hover text-white bg-primary hover:bg-dark focus:ring-2 focus:ring-accent font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-dark dark:hover:bg-primary focus:outline-none dark:focus:ring-accent"
				>News Discussion</button
			>
		</a>
		<a href="/forum/events">
			<button
				class:active={feedChoice === 'events'}
				type="button"
				class="text-outline hover:text-outline-hover text-white bg-primary hover:bg-dark focus:ring-2 focus:ring-accent font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-dark dark:hover:bg-primary focus:outline-none dark:focus:ring-accent"
				>Events Discussion</button
			>
		</a>
	</div>
	<ul class="my-8 text-left pt-3 bg-background w-full flex flex-col justify-start">
		<h2 class="text-3xl pb-5 font-bold">Tech News</h2>
		{#each eventsPosts as post}
			<PostLink
				postSlug={post._id}
				postTitle={post.title}
				postContent={post.content}
				postUpvotes={post.upvotes}
				postAvatar={post.avatar}
				postAuthor={post.author}
				loggedInUser={data.loggedInUser}
				postDownvotes={post.downvotes}
			/>
		{/each}
	</ul>
</div>

<style>
	.text-outline {
		text-shadow:
			-1px -1px 0 #c83f00,
			1px -1px 0 #c83f00,
			-1px 1px 0 #c83f00,
			1px 1px 0 #c83f00;
	}
	.active {
		text-shadow:
			-1px -1px 0 #1a202c,
			1px -1px 0 #1a202c,
			-1px 1px 0 #1a202c,
			1px 1px 0 #1a202c;
		background-color: #202937;
	}
	.hover\:text-outline-hover:hover {
		text-shadow:
			-1px -1px 0 #1a202c,
			1px -1px 0 #1a202c,
			-1px 1px 0 #1a202c,
			1px 1px 0 #1a202c;
	}
</style>
