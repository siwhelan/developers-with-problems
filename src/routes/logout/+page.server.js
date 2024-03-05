// import { connectDB } from '../../lib/utils/db';
import { _lucia } from '../../routes/login/+page.server.js';
import { redirect } from '@sveltejs/kit';
export const actions = {
	cancel: async () => {
		console.log('cancelled log out');

		redirect(302, '/');
		//just kick to homepage
	},
	continue: async ({ locals }) => {
		console.log('This is the locals: ', locals);
		console.log(locals);
		console.log('This is new locals: ', locals);
		await _lucia.invalidateSession(locals.session.id);
		console.log('successfully logged out');
		redirect(302, '/');
		//remove token and kick to homepage
	}
};
