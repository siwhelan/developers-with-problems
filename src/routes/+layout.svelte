<script>
	import '../app.css';
	import Navigation from '../components/navigation.svelte';
</script>

<div class="flex">
	<Navigation />
	<div class="flex flex-col flex-grow">
		<slot />
	</div>
	<div class="menu-container bg-blue-100 rounded-lg p-5 m-10 max-w-xs">
		<p href="/">Placeholder for other sidebar</p>
	</div>
</div>
