<script>
	import FollowBtn from './FollowBtn.svelte';
	let sectionStyles =
		'block py-2 px-4 bg-gray-800 text-white rounded-md mb-2 max-w-xs hover:bg-gray-700 text-center';
	let linkStyles =
		'block py-2 px-4 bg-green-800 text-white rounded-md mb-2 max-w-xs hover:bg-red-700 text-center';
	export let profileUser;
	export let followBtnBool;
	export let onClick;
	export let isFollowing;
</script>

<div class="menu-container bg-blue-900 rounded-lg p-5 m-10 max-w-xs">
	<h1 class={sectionStyles}>User Profile</h1>
	<!-- <img src={profileUser.avatar} alt="Avatar" /> -->
	<p class={sectionStyles}>Name: {profileUser.username}</p>
	<p class={sectionStyles}>Email: {profileUser.email}</p>
	<p class={sectionStyles}>Bio: {profileUser.bio || 'placeholder text'}</p>
	<p class={sectionStyles}>Socials: {profileUser.social || 'placeholder text'}</p>
	<p class={sectionStyles}>
		Followers: {profileUser.followers != '' ? profileUser.followers : 'No followers yet!'}
	</p>
	<p class={sectionStyles}>
		Following: {profileUser.following != '' ? profileUser.following : 'Not following anyone yet!'}
	</p>
	{#if followBtnBool}
		<FollowBtn profileUserID={profileUser._id} {isFollowing} {onClick} />
	{/if}
	{#if !followBtnBool}
		<a class={linkStyles} href="/profile/changePassword">Change Password</a>
	{/if}
</div>
