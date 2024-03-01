<script>
	import Profile from '../../../components/Profile.svelte';
	export let onClick = () => {};
	export let data;
	$: ({ profileUser, myProfile, isFollowing, posts } = data);
</script>

{#if myProfile}
	<Profile {profileUser} followBtnBool={false} {isFollowing} {posts} {onClick} />
{:else}
	<Profile {profileUser} followBtnBool={true} {isFollowing} {posts} {onClick} />
{/if}
