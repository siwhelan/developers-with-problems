import { writable } from 'svelte/store';

function createAvatarStore() {
	const { subscribe, set } = writable(null);

	return {
		subscribe,
		upload: (file) => {
			const formData = new FormData();
			formData.append('file', file);

			fetch('/imageUpload', {
				method: 'POST',
				body: formData
			})
				.then((response) => response.json())
				.then((data) => {
					// Update the store with the new avatar URL
					set(data.avatarUrl);
				});
		}
	};
}

export const avatar = createAvatarStore();
