<script>
	// export let posts;
	export let data;
	$: ({ posts } = data);
</script>

<a href="/forum/newPost">Make a new post</a>

<ul>
	{#each posts as post}
		<li key={post._id}>
			<h2>{post.title}</h2>
			<p>{post.content}</p>
		</li>
	{/each}
</ul>
