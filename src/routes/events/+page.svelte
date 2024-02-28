<script>
	export let events = [];
	console.log(events);
</script>

<div>
	<h1>Events</h1>
	<ul>
		{#each events as event}
			<li>{event.title} - {event.startDate}</li>
		{/each}
	</ul>
</div>
