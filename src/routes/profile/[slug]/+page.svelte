<script>
	import Profile from '../../../components/Profile.svelte';
	export let onClick = () => {};
	export let data;
	$: ({ profileUser, myProfile, isFollowing, posts, codewarsData, loggedInUser } = data);
</script>

{#if myProfile}
	<Profile {profileUser} followBtnBool={false} {isFollowing} {posts} {codewarsData} {loggedInUser} {onClick} />
{:else}
	<Profile {profileUser} followBtnBool={true} {isFollowing} {posts} {codewarsData} {loggedInUser} {onClick} />
{/if}
