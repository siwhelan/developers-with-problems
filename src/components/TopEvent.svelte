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
<div class="pt-3 text-center rounded-lg shadow-md max-w-2xl relative border-t-2 border-gray-300">
	<h6 class="mb-1 font-bold text-lg pb-3">Featured Event</h6>
	<hr class="mb-2 mx-4" />
	<a href="/events" class="block text-decoration-none">
		<li key={trendingEvent._id} class="p-2 rounded-lg shadow-md max-w-2xl relative list-none">
			<h2 class="text-xl text-primary text-[#202937] font-bold mb-2">{trendingEvent.title}</h2>
			<p class="text-text hover:text-primary font-medium">{formatDate(trendingEvent.startDate)}</p>
			<p class="text-text hover:text-primary font-medium">{trendingEvent.location}</p>
			<p class="text-text hover:text-primary font-medium">{trendingEvent.description}</p>
		</li>
	</a>
</div>
