<script>
	import Profile from '../../../components/Profile.svelte';
	export let onClick = () => {};
	export let data;
	$: ({ profileUser, myProfile, isFollowing, posts, loggedInUser } = data);
</script>

{#if myProfile}
	<Profile {profileUser} followBtnBool={false} {isFollowing} {posts} {onClick} {loggedInUser} />
{:else}
	<Profile {profileUser} followBtnBool={true} {isFollowing} {posts} {onClick} {loggedInUser} />
{/if}
