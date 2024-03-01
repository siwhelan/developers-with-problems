<script>
	import Profile from '../../../components/Profile.svelte';
	export let onClick = () => {};
	export let data;
	$: ({ profileUser, myProfile, isFollowing } = data);
</script>

{#if myProfile}
	<Profile {profileUser} followBtnBool={false} {isFollowing} {onClick} />
{:else}
	<Profile {profileUser} followBtnBool={true} {isFollowing} {onClick} />
{/if}
