<script>
	import '../app.css';
	import Navigation from '../components/navigation.svelte';
	import UserNavBar from '../components/userNavBar.svelte';
	import Footer from '../components/Footer.svelte';
	export let data;
	$: ({ currentUserUsername } = data);
</script>

<div>
	<UserNavBar {currentUserUsername} />
</div>
<!-- <p>{posts}</p> -->
<div class="flex flex-col min-h-screen">
	<div class="flex bg-background text-text">
		<Navigation {currentUserUsername} />
		<div class="flex flex-col flex-grow">
			<slot />
		</div>
		<div
			class="menu-container bg-background text-lg text-alttext text-center font-bold my-24 rounded-lg outline-black p-5 m-10 max-w-xs"
			style="outline: 2px solid rgba(128, 128, 128, 0.2)"
		>
			<p href="/">Highlights Reel</p>
			<!-- Place any components/content here -->
		</div>
	</div>
</div>

<Footer />

<style>
	.menu-container {
		width: 250px; /* fixed border height and width - can be adjusted to suit contents */
		height: 365px;
	}
</style>
