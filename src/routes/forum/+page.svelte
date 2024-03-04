<script>
	import PostLink from '../../components/PostLink.svelte';

	// export let posts;
	export let data;
	$: ({ posts } = data);
</script>

<div class="pt-16 my-8">
	<h2 class="text-3xl pb-5 font-bold">Forum</h2>
	<a class="bg-primary hover:bg-dark text-white py-2 px-4 rounded mr-4" href="/forum/newPost">
		Make a new post
	</a>
	<ul class="my-8 text-left py-4 pt-3 bg-background w-full flex flex-col justify-start">
		<a href="/forum/general"><h2 class="text-3xl pb-5 font-bold">General Coding</h2></a>

		{#each posts.filter((post) => post.tags.includes('general')) as post}
			<!-- <li key={post._id}> -->
			<PostLink
				postSlug={post._id}
				postTitle={post.title}
				postContent={post.content}
				postUpvotes={post.upvotes}
				upvoteNumber={post.upvotes.length}
				postAuthor={post.author}
				loggedInUser={data.loggedInUser}
			/>
			<!-- <h2>{post.title}</h2>
				<p>{post.content}</p> -->
			<!-- </li> -->
		{/each}
		<hr class="my-2" />
		<h2 class="text-3xl pb-5 font-bold pt-5">Job Hunting</h2>
		{#each posts.filter((post) => post.tags.includes('job')) as post}
			<!-- <li key={post._id}> -->
			<PostLink
				postSlug={post._id}
				postTitle={post.title}
				postContent={post.content}
				postUpvotes={post.upvotes}
				upvoteNumber={post.upvotes.length}
				postAuthor={post.author}
				loggedInUser={data.loggedInUser}
			/>
			<!-- <h2>{post.title}</h2>
			<p>{post.content}</p> -->
			<!-- </li> -->
		{/each}
		<hr class="my-2" />
		<h2 class="text-3xl pb-5 font-bold pt-5">Events</h2>
		{#each posts.filter((post) => post.tags.includes('events')) as post}
			<!-- <li key={post._id}> -->
			<PostLink
				postSlug={post._id}
				postTitle={post.title}
				postContent={post.content}
				postUpvotes={post.upvotes}
				upvoteNumber={post.upvotes.length}
				postAuthor={post.author}
				loggedInUser={data.loggedInUser}
			/>
			<!-- <h2>{post.title}</h2>
			<p>{post.content}</p> -->
			<!-- </li> -->
		{/each}
		<hr class="my-2" />
		<h2 class="text-3xl pb-5 font-bold pt-5">Dev News</h2>
		{#each posts.filter((post) => post.tags.includes('news')) as post}
			<!-- <li key={post._id}> -->
			<PostLink
				postSlug={post._id}
				postTitle={post.title}
				postContent={post.content}
				postUpvotes={post.upvotes}
				upvoteNumber={post.upvotes.length}
				postAuthor={post.author}
				loggedInUser={data.loggedInUser}
			/>
			<!-- <h2>{post.title}</h2>
			<p>{post.content}</p> -->
			<!-- </li> -->
		{/each}
	</ul>
</div>
