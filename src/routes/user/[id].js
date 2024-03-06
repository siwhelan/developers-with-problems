import { User } from '../../lib/models/user.js';

export async function get({ params }) {
	const { id } = params;
	const user = await User.findOne({ _id: id });
	if (user) {
		return {
			status: 200,
			body: {
				user
			}
		};
	} else {
		return {
			status: 404,
			body: {
				error: 'User not found'
			}
		};
	}
}
