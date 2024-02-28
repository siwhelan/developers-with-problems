<script>
	// export let posts;
	export let data;
	$: ({ posts } = data);
</script>

<div class="pt-3 text-center">
	<a
		class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
		href="/forum/newPost">Make a new post</a
	>

	<ul>
		{#each posts as post}
			<li key={post._id}>
				<h2>{post.title}</h2>
				<p>{post.content}</p>
			</li>
		{/each}
	</ul>
</div>
