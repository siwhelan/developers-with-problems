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

<div class="pt-24">
	<h2 class="text-3xl font-bold pb-2">Careers</h2>
</div>
<div class="text-left bg-background w-full flex justify-start">
	<ul class="flex flex-col w-full justify-start">
		{#each jobs as job}
			<li
				key={job._id}
				class="my-8 p-4 rounded-lg shadow-md max-w-2xl relative text-dark"
				style="min-height: 200px;"
			>
				<h2 class="text-text"><b>Title:</b> {job.title}</h2>
				<p class="text-text"><b>Description:</b> {job.description}</p>
				<p class="text-text"><b>Salary:</b> {job.salary}</p>
				<p class="text-text"><b>Company:</b> {job.company}</p>
				<p class="text-text"><b>Location:</b> {job.location}</p>
				<p class="text-text"><b>Tags:</b> {job.tags}</p>
				<p class="text-text"><b>Posted on:</b> {formatDate(job.timestamp)}</p>
				<p class="text-text"><b>Closing date:</b> {formatDate(job.closingDate)}</p>
				<p class="text-text">
					<b>Click here to apply:</b>
					<a href="mailto:your-email@example.com" class="text-alttext hover:text-altdark underline"
						>Apply Now</a
					>
				</p>
			</li>
		{/each}
	</ul>
</div>
