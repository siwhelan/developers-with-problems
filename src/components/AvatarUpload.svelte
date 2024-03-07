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

<form on:submit={handleSubmit}>
	<input type="file" name="file" aria-label="Upload a personal avatar" accept="image/*" />
	<button type="submit">Upload Avatar</button>
</form>
∏
