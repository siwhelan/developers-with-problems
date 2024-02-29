import { connectDB } from '$lib/utils/db';

// Immediately invoke the asynchronous function
(async () => {
	await connectDB();
})();

export const handle = async ({ event, resolve }) => {
	const response = await resolve(event);
	event.locals.user = response;
	console.log(response, 'REPOSNSE IN HOOKS');
	return response;
};
