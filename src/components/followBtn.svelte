<script>
	import { User } from '../lib/models/user';
	export let profileUserID;
	let isFollowing = false;
	const userID = 'user1'; // Will be gotten dynamically when setup

	async function handleClick(profileUserID, userID) {
		try {
			const user = await User.findOne({ _id: userID });
			const profileUser = await User.findOne({ _id: profileUserID });

			const userIndex = user.following.indexOf(profileUserID);
			const profileUserIndex = profileUser.followers.indexOf(userID);

			if (userIndex !== -1) {
				user.following.splice(userIndex, 1);
				profileUser.followers.splice(profileUserIndex, 1);
			} else {
				user.following.push(profileUserID);
				profileUser.followers.push(userID);
			}

			isFollowing = !isFollowing;
			await user.save();
			await profileUser.save();
		} catch (error) {
			console.error('Error toggling follow:', error);
		}

		profileUser.followers.push(userID);
		profileUser.save();
	}
</script>

<button on:click={handleClick}>
	{#if isFollowing}
		Unfollow
	{:else}
		Follow
	{/if}
</button>
