<script>
	import PostLink from '../../components/PostLink.svelte';

	// export let posts;
	export let data;
	$: ({ posts } = data);
</script>

<div class="pt-16">
	<h2 class="text-3xl pb-5">Forums</h2>
	<a
		class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
		href="/forum/newPost">Make a new post</a
	>

	<ul class="text-left">
		{#each posts as post}
			<li key={post._id}>
			<PostLink postSlug={post._id} postTitle={post.title} postContent={post.content} />
			<h2>{post.title}</h2>
				<p>{console.log(post)}</p>
			</li>
		{/each}
	</ul>
</div>
