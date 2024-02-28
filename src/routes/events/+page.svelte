<script>
	// export let events;
	export let data;
	$: ({ events } = data);
</script>

<div class="pt-3 text-center">
	<!-- <a
		class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
		href="/forum/newEvent">Add an Event</a
	> -->

	<ul>
		{#each events as event}
			<li key={event._id}>
				<h2>{event.title}</h2>
				<p>{event.startDate}</p>
				<p>{event.location}</p>
				<p>{event.description}</p>
				<p>{event.attending}</p>
				<p>{event.interested}</p>
			</li>
		{/each}
	</ul>
</div>
