<script>
	import Profile from '../../../components/Profile.svelte';
	export let onClick = () => {};
	export let data;
	$: ({ profileUser, myProfile, isFollowing, posts, codewarsData } = data);
</script>

{#if myProfile}
	<Profile {profileUser} followBtnBool={false} {isFollowing} {posts} {codewarsData} {onClick} />
{:else}
	<Profile {profileUser} followBtnBool={true} {isFollowing} {posts} {codewarsData} {onClick} />
{/if}
