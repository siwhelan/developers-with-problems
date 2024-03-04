<script>
	import resources from './resources.json';
</script>

{#each resources as resource}
	<p>{resource.name}</p>
{/each}
