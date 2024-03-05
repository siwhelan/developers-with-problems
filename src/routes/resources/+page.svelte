<script>
	import resources from './resources.json';
</script>

<div class="pt-24">
	<h2 class="text-3xl font-bold pb-2">Learning Resources</h2>
	<h3>Resources recommended by us.</h3>
</div>
<ul class="list-inside mt-4 pb-14">
	{#each resources as resource}
		<li class="mt-2">
			<a href={resource.url} target="_blank" class="text-text hover:text-primary"
				>🔗 {resource.name}</a
			>
			<p class="pb-5">{resource.description}</p>
		</li>
	{/each}
</ul>
