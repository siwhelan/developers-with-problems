<script>
	import '../app.css';
	import Navigation from '../components/navigation.svelte';
	import UserNavBar from '../components/userNavBar.svelte';
	import Footer from '../components/Footer.svelte';
	import DailyChallenge from '../components/DailyChallenge.svelte';
	export let data;
	$: ({ currentUserUsername, challenge } = data);
</script>

<div>
	<UserNavBar {currentUserUsername} />
</div>
<!-- <p>{posts}</p> -->
<div class="flex flex-col min-h-screen text-text">
	<div class="flex bg-background">
		<Navigation {currentUserUsername} />
		<div class="flex flex-col flex-grow">
			<slot />
		</div>
		<div
			class="menu-container bg-background text-primary text-center font-bold my-24 rounded-lg outline-black p-1 m-10 max-w-xs h-10"
			style="outline: 2px solid rgba(128, 128, 128, 0.2)"
		>
			<p href="/">Highlights Reel</p>
			<div>
			<DailyChallenge {challenge} />
			</div>
			<div>
				<DailyChallenge {challenge} />
			</div>
		</div>
	</div>
</div>

<Footer />

<style>
	.menu-container {
		width: 250px; /* fixed border height and width - can be adjusted to suit contents */
		height: 1000px;
	}
</style>
