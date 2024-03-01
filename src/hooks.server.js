import { connectDB } from '$lib/utils/db';
import { _lucia } from './routes/login/+page.server.js';

// Immediately invoke the asynchronous function
(async () => {
	await connectDB();
})();

export const handle = async ({ event, resolve }) => {
	// console.log(lucia);
	// console.log(event.cookies.getAll());
	const sessionId = event.cookies.get('session');
	// const session2 = await _lucia.getSession(event);
	// console.log(session2);
	console.log(sessionId);
	// console.log(event.locals.user);
	if (!sessionId) {
		event.locals.user = null;
		event.locals.session = null;
		return resolve(event);
	}
	// console.log(await lucia.validateSession(sessionId));
	const { session, user } = await _lucia.validateSession(sessionId);
	console.log('session', session);
	if (session) {
		const sessionCookie = _lucia.createSessionCookie(session.id);
		// sveltekit types deviates from the de-facto standard
		// you can use 'as any' too
		event.cookies.set(sessionCookie.name, sessionCookie.value, {
			path: '.',
			...sessionCookie.attributes
		});
	}
	if (!session) {
		const sessionCookie = _lucia.createBlankSessionCookie();
		event.cookies.set(sessionCookie.name, sessionCookie.value, {
			path: '.',
			...sessionCookie.attributes
		});
	}
	// event.locals.user = user;
	console.log(session);
	console.log(user);
	event.locals.user = user;
	event.locals.session = session;
	console.log('user', event.locals.user);
	console.log(event.locals.user.id);
	return resolve(event);
	const response = await resolve(event);
	event.locals.user = response;
	// console.log(response, 'REPOSNSE IN HOOKS');
	return response;
};
