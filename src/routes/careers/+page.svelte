<script>
	// export let posts;
	export let data;
	$: ({ jobs } = data);

	// function to format the date
	function formatDate(dateString) {
		const options = { year: 'numeric', month: 'long', day: 'numeric' };
		return new Date(dateString).toLocaleDateString(undefined, options);
	}
</script>

<div class="pt-3 text-center bg-background">
	<ul>
		{#each jobs as job}
			<li key={job._id} class="my-12 p-4 rounded-lg shadow-md max-w-2xl mx-auto relativ text-dark">
				<h2 class="text-dark"><b>Title:</b> {job.title}</h2>
				<p class="text-text"><b>Description:</b> {job.description}</p>
				<p class="text-text"><b>Salary:</b> {job.salary}</p>
				<p class="text-text"><b>Company:</b> {job.company}</p>
				<p class="text-text"><b>Location:</b> {job.location}</p>
				<p class="text-text"><b>Tags:</b> {job.tags}</p>
				<p class="text-text"><b>Posted on:</b> {formatDate(job.timestamp)}</p>
				<p class="text-text"><b>Closing date:</b> {formatDate(job.closingDate)}</p>
				<p class="text-text">
					<b>Click here to apply:</b>
					<a href="mailto:your-email@example.com" class="text-primary hover:text-dark">Apply Now</a>
				</p>
			</li>
		{/each}
	</ul>
</div>
