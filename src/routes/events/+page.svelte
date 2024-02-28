<script>
	// export let events;
	export let data;
	$: ({ events } = data);

	// function to format the date
	function formatDate(dateString) {
		const options = { year: 'numeric', month: 'long', day: 'numeric' };
		return new Date(dateString).toLocaleDateString(undefined, options);
	}
</script>

<div class="pt-3 text-center">
	<!-- <a
		class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
		href="/forum/newEvent">Add an Event</a
	> -->

	<ul>
		{#each events as event}
			<li key={event._id}>
				<h2>Title: {event.title}</h2>
				<p>Date: {formatDate(event.startDate)}</p>
				<p>Location: {event.location}</p>
				<p>Description: {event.description}</p>
				<p>
					Attending: {#each event.attending as user}<span>{user} </span>{/each}
				</p>
				<p>
					Interested: {#each event.interested as user}<span>{user} </span>{/each}
				</p>
				<br />
			</li>
		{/each}
	</ul>
</div>
