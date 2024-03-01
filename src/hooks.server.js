import { connectDB } from '$lib/utils/db';
import { _lucia } from './routes/login/+page.server.js';

(async () => {
	await connectDB();
})();

export const handle = async ({ event, resolve }) => {
	const sessionId = event.cookies.get('session');
	if (!sessionId) {
		event.locals.user = null;
		event.locals.session = null;
		return resolve(event);
	}
	const { session, user } = await _lucia.validateSession(sessionId);
	if (session) {
		const sessionCookie = _lucia.createSessionCookie(session.id);
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
	event.locals.user = user;
	event.locals.session = session;
	return resolve(event);
};
// const response = await resolve(event);
// event.locals.user = response;
// // console.log(response, 'REPOSNSE IN HOOKS');
// return response;
