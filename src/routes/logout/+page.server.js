// import { connectDB } from '../../lib/utils/db';
import { redirect } from '@sveltejs/kit';

export const actions = {
	cancel: async () => {
		console.log('cancelled log out');

		redirect(302, '/');
		//just kick to homepage
	},
	continue: async () => {
		console.log('successfully logged out');
		redirect(302, '/');
		//remove token and kick to homepage
	}
};
