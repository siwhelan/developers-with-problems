<script>
	import '../app.css';
	import Navigation from '../components/navigation.svelte';
	import UserNavBar from '../components/userNavBar.svelte';
	import Footer from '../components/Footer.svelte';
	export let data;
	$: ({ currentUserUsername } = data);
</script>

<div>
	<UserNavBar />
</div>
<!-- <p>{posts}</p> -->
<div class="flex flex-col min-h-screen">
	<div class="flex bg-background text-text">
		<Navigation {currentUserUsername} />
		<div class="flex flex-col flex-grow">
			<slot />
		</div>
		<!-- <div class="menu-container bg-accent rounded-lg p-5 m-10 max-w-xs">
			<p href="/">Placeholder for other sidebar</p>
		</div> -->
	</div>
</div>

<Footer />
