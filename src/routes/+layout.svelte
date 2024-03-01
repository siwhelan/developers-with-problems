<script>
	import '../app.css';
	import Navigation from '../components/navigation.svelte';
	import UserNavBar from '../components/userNavBar.svelte';
</script>

<div>
	<UserNavBar />
</div>
<div class="flex">
	<Navigation />
	<div class="flex flex-col flex-grow">
		<slot />
	</div>
	<div class="menu-container bg-blue-100 rounded-lg p-5 m-10 max-w-xs">
		<p href="/">Placeholder for other sidebar</p>
	</div>
</div>
