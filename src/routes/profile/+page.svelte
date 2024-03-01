<!-- <script>
	let sectionStyles =
		'block py-2 px-4 bg-gray-800 text-white rounded-md mb-2 max-w-xs hover:bg-gray-700 text-center';
	let linkStyles =
		'block py-2 px-4 bg-green-800 text-white rounded-md mb-2 max-w-xs hover:bg-red-700 text-center';
	export let user;
	export let posts;
</script>

{#if user}
	<div class="menu-container bg-blue-900 rounded-lg p-5 m-10 max-w-xs">
		<h1 class={sectionStyles}>User Profile</h1>
		<img src={user.avatar} alt="Avatar" />
		<p class={sectionStyles}>Name: {user.username}</p>
		<p class={sectionStyles}>Email: {user.email}</p>
		<p class={sectionStyles}>Bio: {user.bio || 'nothing'}</p>
		<p class={sectionStyles}>Socials: {user.social || 'nothing'}</p>
		<p class={sectionStyles}>Followers: {user.followers}</p>
		<p class={sectionStyles}>Following: {user.following}</p>
		<a class={linkStyles} href="/profile/changePassword">Change Password</a>
	</div>

	{#if posts}
		<h1 class={sectionStyles}>User Posts</h1>
		{#each posts as post (post._id)}
			<div>
				<h2>{post.title}</h2>
				<p>{post.content}</p>
				<p>Timestamp: {new Date(post.timestamp).toLocaleString()}</p>
			</div>
		{/each}
	{:else}
		<p>No posts yet.</p>
	{/if}
{:else}
	<p>Loading...</p>
{/if} -->

<script>
	export let data;
</script>

{#if data.user}
	<!-- Display user info -->

	{#if data.posts && data.posts.length > 0}
		<h2>User Posts</h2>
		{#each data.posts as post (post._id)}
			<div>
				<h3>{post.title}</h3>
				<p>{post.content}</p>
			</div>
		{/each}
	{:else}
		<p>No posts yet.</p>
	{/if}
{:else}
	<p>Loading...</p>
{/if}
