<script>
	import PostLink from '../../components/PostLink.svelte';

	// export let posts;
	export let data;
	$: ({ posts } = data);
</script>

<div class="pt-16">
	<h2 class="text-3xl pb-5">Forum</h2>
	<a class="bg-primary hover:bg-dark text-white py-2 px-4 rounded mr-4" href="/forum/newPost">
		Make a new post
	</a>

	<ul class="text-left py-4 pt-3 bg-background w-full flex flex-col justify-start">
		{#each posts as post}
			<li>
				<PostLink postSlug={post._id} postTitle={post.title} postContent={post.content} />
			</li>
		{/each}
	</ul>
</div>
