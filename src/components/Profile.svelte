<script>
	import FollowBtn from './FollowBtn.svelte';
	import PostLink from './PostLink.svelte';
	import AvatarUpload from './AvatarUpload.svelte';
	let sectionStyles =
		'block py-2 px-4 bg-gray-800 text-white rounded-md mb-2 max-w-xs hover:bg-gray-700 text-center';
	let linkStyles =
		'block py-2 px-4 bg-green-800 text-white rounded-md mb-2 max-w-xs hover:bg-red-700 text-center';
	export let profileUser;
	export let followBtnBool;
	export let onClick;
	export let isFollowing;
	export let posts;
	export let loggedInUser;
</script>

<div class="menu-container text-center bg-blue-900 rounded-lg p-5 m-10">
	<img class="avatar" src={profileUser.avatar} alt="Avatar" />
	<AvatarUpload />
	<h1 class={sectionStyles}>User Profile</h1>
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

<div class="menu-container bg-blue-900 rounded-lg p-5 m-10 max-w-xs">
	<h2 class={sectionStyles}>Posts</h2>
	{#each posts as post}
		<PostLink
			postSlug={post._id}
			postTitle={post.title}
			postContent={post.content}
			postUpvotes={post.upvotes}
			upvoteNumber={post.upvotes.length}
			postAuthor={post.author}
			{loggedInUser}
		/>
	{/each}
</div>

<style>
	.menu-container {
		position: relative; /* This allows absolute positioning of child elements */
	}
	.avatar {
		width: 150px; /* Change this to the desired width */
		height: 150px; /* Change this to the desired height */
		position: absolute; /* This takes the image out of the normal document flow */
		right: 120px; /* Change this to move the image to the right */
		top: 50px; /* Change this to move the image down */
	}
</style>
