<!-- 
	// import { onMount } from 'svelte';
	// import { fetchApprenticeships } from '../../services/fetchApprenticeships';

	// let apprenticeships = [];

	// async function loadApprenticeships() {
		try {
			const storyIds = await fetchApprenticeships();
			const storyDetailsPromises = storyIds.map((id) => fetchStoryDetails(id));
			apprenticeships = await Promise.all(storyDetailsPromises);
			console.log('here');
		} catch (error) {
			console.error('Failed to load top stories:', error);
		}
	}

	console.log(apprenticeships);
	onMount(() => {
		loadApprenticeships();
	});
	export let data;
	console.log(data); -->
