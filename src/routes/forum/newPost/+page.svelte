<script>
	let link = true;
	function handleOptionChange(event) {
		link = !link;
	}
</script>

<form class="flex flex-col items-center h-screen">
	<div class="flex">
		<label>
			Title
			<input
				class=" rounded-lg bg-gray-50 border text-gray-100 focus:ring-blue-500 focus:border-blue-500 text-sm border-gray-300 p-2.5"
				type="Title"
				name="title"
			/>
		</label>
	</div>
	<label>
		<input type="checkbox" value="link" on:change={handleOptionChange} />
		Add Link
	</label>

	{#if link == true}
		<label>
			Link URL
			<input
				class=" rounded-lg bg-gray-50 border text-gray-100 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 text-sm border-gray-300 p-2.5"
				label="link"
				name="link"
			/>
		</label>
	{/if}
	<label>
		Text content
		<textarea
			class=" rounded-lg bg-gray-50 border text-gray-100 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 text-sm border-gray-300 p-2.5"
			label="text"
			name="textPost"
		/>
	</label>
	<button
		class="bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded"
		type="submit">New Post</button
	>
</form>
