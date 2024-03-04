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
		{#each posts as post}
			<!-- <li key={post._id}> -->
			<PostLink
				postSlug={post._id}
				postTitle={post.title}
				postContent={post.content}
				postUpvotes={post.upvotes}
				upvoteNumber={post.upvotes.length}
				loggedInUser={data.loggedInUser}
			/>
			<!-- <h2>{post.title}</h2>
				<p>{post.content}</p> -->
			<!-- </li> -->
		{/each}
	</ul>
</div>
