<script>
	export let currentUserUsername;
	let linkStyles =
		'block py-2 px-4 bg-primary text-white rounded mb-2 max-w-xs hover:bg-dark text-center';
</script>

<div
	class="menu-container bg-background my-24 rounded-lg outline-black p-5 m-10 max-w-xs"
	style="outline: 2px solid rgba(128, 128, 128, 0.2);"
>
	<a href="/" class={linkStyles}>Home</a>
	{#if currentUserUsername}
		<a href="/profile/{currentUserUsername}" class={linkStyles}>My Profile</a>
	{/if}
	<a href="/news" class={linkStyles}>News</a>
	<a href="/forum" class={linkStyles}>Forum</a>
	<a href="/events" class={linkStyles}>Events</a>
	<a href="/careers" class={linkStyles}>Careers</a>
	<a href="/learning-resources" class={linkStyles}>Learning</a>
	<!-- <a href="/settings" class={linkStyles}>Settings</a> -->
	<!-- Logout will be at the top of the page -->
</div>

<style>
	.menu-container {
		width: 200px; /* fixed width */
		height: 365px; /* fixed height */
	}
</style>
