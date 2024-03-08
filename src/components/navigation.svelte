<script>
	export let currentUserUsername;
	let linkStyles =
		'block py-2 px-4 bg-primary text-white rounded mb-2 max-w-xs text-center text-outline';
	let hoverStyles = 'hover:bg-dark hover:text-outline-hover';
</script>

<div
	class="menu-container bg-background my-24 rounded-lg outline-black p-5 m-10 max-w-xs"
	style="outline: 2px solid rgba(128, 128, 128, 0.2);"
	data-testid="navigation"
>
	<a href="/" class="{linkStyles} {hoverStyles}">Home</a>
	<a
		href={currentUserUsername ? `/profile/${currentUserUsername}` : '/login'}
		class="{linkStyles} {hoverStyles}">My Profile</a
	>

	<a href="/news" class="{linkStyles} {hoverStyles}">News</a>
	<a href="/forum" class="{linkStyles} {hoverStyles}">Forum</a>
	<a href="/events" class="{linkStyles} {hoverStyles}">Events</a>
	<a href="/careers" class="{linkStyles} {hoverStyles}">Careers</a>
	<a href="/resources" class="{linkStyles} {hoverStyles}">Learning</a>

	<!-- <a href="/settings" class={linkStyles}>Settings</a> -->
	<!-- Logout will be at the top of the page -->
</div>

<style>
	.menu-container {
		width: 200px; /* fixed width */
		height: 365px; /* fixed height */
	}
	.text-outline {
		text-shadow:
			-1px -1px 0 #c83f00,
			1px -1px 0 #c83f00,
			-1px 1px 0 #c83f00,
			1px 1px 0 #c83f00;
	}
	.hover\:text-outline-hover:hover {
		text-shadow:
			-1px -1px 0 #1a202c,
			1px -1px 0 #1a202c,
			-1px 1px 0 #1a202c,
			1px 1px 0 #1a202c;
	}
</style>
