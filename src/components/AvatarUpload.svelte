<script>
	export let avatarUrl = '';

	async function handleSubmit(event) {
		event.preventDefault();
		const formData = new FormData(event.target);
		const response = await fetch('/imageUpload', {
			method: 'POST',
			body: formData // No need to set content-type header
		});
		if (response.ok) {
			const result = await response.json();
			avatarUrl = result.image; // Update the avatar URL
		} else {
			// Handle error scenario
			console.error('Upload failed');
		}
	}
</script>

<form on:submit={handleSubmit} class="flex flex-col items-center justify-center">
	<input
		class="block w-full px-4 py-2 mb-2 text-center text-outline hover:text-outline-hover text-white bg-primary rounded max-w-xs"
		type="file"
		name="file"
		accept="image/*"
	/>
	<button
		type="submit"
		class="px-8 py-2 text-white text-outline hover:text-outline-hover bg-primary max-w-xs rounded hover:bg-dark focus:outline-none focus:ring-2 focus:ring-accent-focus focus:ring-opacity-50"
	>
		Upload Avatar
	</button>
</form>

<style lang="postcss">

	.text-outline {
		text-shadow:
			-1px -1px 0 #c83f00,
			1px -1px 0 #c83f00,
			-1px 1px 0 #c83f00,
			1px 1px 0 #c83f00;
	}
	.hover\:text-outline-hover:hover {
		text-shadow:
			-1px -1px 0 #1a202c,
			1px -1px 0 #1a202c,
			-1px 1px 0 #1a202c,
			1px 1px 0 #1a202c;
	}
</style>
