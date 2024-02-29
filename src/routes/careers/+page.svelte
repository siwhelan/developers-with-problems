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

<div class="pt-3 text-center">
	<!-- <a
		class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
		href="/forum/newPost">Make a new post</a
	> -->

	<ul>
		{#each jobs as job}
			<li key={job._id}>
				<h2><b>Title:</b> {job.title}</h2>
				<p><b>Description:</b> {job.description}</p>
				<p><b>Salary:</b> {job.salary}</p>
				<p><b>Company:</b> {job.company}</p>
				<p><b>Location:</b> {job.location}</p>
				<p><b>Tags:</b> {job.tags}</p>
				<p><b>Posted on:</b> {formatDate(job.timestamp)}</p>
				<p><b>Closing date:</b> {formatDate(job.closingDate)}</p>
				<p>
					<b>Click here to apply:</b>
					<a href="mailto:your-email@example.com" class="text-gray-500 hover:text-gray-700"
						>Apply Now</a
					>
				</p>
			</li>
			<br />
		{/each}
	</ul>
</div>
