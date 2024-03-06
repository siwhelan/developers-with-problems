<script>
	export let trendingEvent;
	function formatDate(dateString) {
		const options = { year: 'numeric', month: 'long', day: 'numeric' };
		return new Date(dateString).toLocaleDateString(undefined, options);
	}
</script>

<!-- <p>
    {trendingEvent.description}
</p> -->
<div>
	<a href="/events">
		<li key={trendingEvent._id} class="p-4 rounded-lg shadow-md max-w-2xl relative list-none">
			<h2 class="flex justify-start text-xl text-primary font-bold">{trendingEvent.title}</h2>
			<p class="flex justify-start text-gray-600">{formatDate(trendingEvent.startDate)}</p>
			<p class="flex justify-start text-gray-600">{trendingEvent.location}</p>
			<p class="flex justify-start text-gray-600">{trendingEvent.description}</p>
		</li>
	</a>
</div>
