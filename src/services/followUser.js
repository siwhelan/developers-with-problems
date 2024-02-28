import { connectDB } from '$lib/utils/db';

export async function followUser(followingUserID) {
	const db = await connectDB();
	const user = db.collection('User');
}
