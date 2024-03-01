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
	<ul>
		{#each events as event}
			<li key={event._id} class="my-12 p-4 rounded-lg shadow-md max-w-2xl mx-auto relative">
				<h2 class="flex justify-start text-xl text-primary font-bold">{event.title}</h2>
				<p class="flex justify-start text-gray-600">{formatDate(event.startDate)}</p>
				<p class="flex justify-start text-gray-600">{event.location}</p>
				<p class="flex justify-start text-gray-600">{event.description}</p>

				<div class="absolute top-0 right-0 mt-2 mr-2">
					<label for="attending-checkbox" class="ml-2">Attending</label>
					<input
						id="attending-checkbox"
						type="checkbox"
						value=""
						class="w-4 h-4 text-blue-400 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
					/>
				</div>

				<div class="absolute top-8 right-0 mt-2 mr-2">
					<label for="interested-checkbox" class="ml-2">Interested</label>
					<input
						id="interested-checkbox"
						type="checkbox"
						value=""
						class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
					/>
				</div>
				<div class="flex justify-start space-x-2 mt-2">
					<p class="font-semibold">Attending:</p>
					{#each event.attending as user}
						<span class="bg-blue-100 rounded px-3 py-1 text-sm font-semibold text-blue-700 mr-2"
							>{user}</span
						>
					{/each}
				</div>
				<div class="flex justify-start space-x-2 mt-2">
					<p class="font-semibold">Interested:</p>
					{#each event.interested as user}
						<span class="bg-green-100 rounded px-3 py-1 text-sm font-semibold text-green-700 mr-2"
							>{user}</span
						>
					{/each}
				</div>
				<div class="relative">
					<!-- Share Icon -->
					<div class="absolute bottom-0 right-0 mb-2 mr-2">
						<img src="/share-icon.png" alt="Share" class="w-5 h-5 cursor-pointer" id="shareIcon" />
					</div>

					<!-- Share Menu (hidden by default) -->
					<div class="absolute bottom-0 right-0 mb-10 mr-2 hidden" id="shareMenu">
						<div class="w-40 bg-white shadow-lg rounded-lg">
							<div class="py-2">
								<a
									href="https://en-gb.facebook.com/"
									target="_blank"
									class="block px-4 py-2 hover:bg-gray-100 text-sm text-gray-700"
									>Share on Facebook</a
								>
								<a
									href="https://twitter.com"
									target="_blank"
									class="block px-4 py-2 hover:bg-gray-100 text-sm text-gray-700"
									>Share on Twitter</a
								>
								<a
									href="https://www.linkedin.com"
									target="_blank"
									class="block px-4 py-2 hover:bg-gray-100 text-sm text-gray-700"
									>Share on LinkedIn</a
								>
							</div>
						</div>
					</div>
				</div>
			</li>
		{/each}
	</ul>
	<script>
		// Share Menu Toggle
		document.getElementById('shareIcon').addEventListener('click', function () {
			var shareMenu = document.getElementById('shareMenu');
			shareMenu.classList.toggle('hidden');
		});

		// Add event listener to each share option
		document.querySelectorAll('#shareMenu a').forEach(function (item) {
			item.addEventListener('click', function () {
				// Hide the share menu when any option is clicked
				document.getElementById('shareMenu').classList.add('hidden');
			});
		});
	</script>
</div>
