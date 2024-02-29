// import { DISPLAY_ADVERT_API_KEY } from '$env/static/private';

// async function fetchApprenticeships() {
// 	const topStoriesUrl = 'https://api.apprenticeships.education.gov.uk/vacancies';
// 	try {
// 		// async GET request to the URL
// 		const response = await fetch(topStoriesUrl, {
// 			headers: {
// 				'Ocp-Apim-Subscription-Key': DISPLAY_ADVERT_API_KEY,
// 				'Content-Type': 'application/json'
// 			}
// 		});
// 		if (!response.ok) {
// 			throw new Error('Network response was not ok');
// 		}
// 		// Parses the response body as JSON, which is an array of IDs
// 		const storyIds = await response.json();
// 		// Returns the first 10 IDs from the list
// 		return storyIds.slice(0, 10);
// 	} catch (error) {
// 		// Logs any errors
// 		console.error('There was a problem with your fetch operation:', error);
// 		// Rethrows the error
// 		throw error;
// 	}
// }

// export const load = async () => {
// 	return fetchApprenticeships();
// };
