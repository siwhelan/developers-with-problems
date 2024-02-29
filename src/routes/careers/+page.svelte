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
				<h2>{job.title}</h2>
				<p>{job.description}</p>
				<p>{job.salary}</p>
				<p>{job.company}</p>
				<p>{job.location}</p>
				<p>{job.tags}</p>
				<p>Posted on: {formatDate(job.timestamp)}</p>
				<p>Closing date: {formatDate(job.closingDate)}</p>
				<p>Contact: {job.userId}</p>
			</li>
		{/each}
	</ul>
</div>
