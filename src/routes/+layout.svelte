<script>
	import '../app.css';
	import Navigation from '../components/navigation.svelte';
	import UserNavBar from '../components/userNavBar.svelte';
</script>

<div>
	<UserNavBar />
</div>
<div class="flex bg-background text-text">
	<Navigation class="text-dark" />
	<div class="flex flex-col flex-grow">
		<slot />
	</div>
	<!-- <div class="menu-container bg-accent rounded-lg p-5 m-10 max-w-xs">
		<p href="/">Placeholder for other sidebar</p>
	</div> -->
</div>
