<script>
	import FollowBtn from './FollowBtn.svelte';
	import PostLink from './PostLink.svelte';
	import AvatarUpload from './AvatarUpload.svelte';
	import CodewarsInfo from './CodewarsInfo.svelte';
	import { enhance } from '$app/forms';
	let sectionStyles =
		'block py-2 px-4 bg-gray-800 text-white rounded-md mb-2 max-w-xs hover:bg-gray-700 text-center';
	let linkStyles =
		'block py-2 px-4 bg-green-800 text-white rounded-md mb-2 max-w-xs hover:bg-red-700 text-center';
	export let profileUser;
	export let followBtnBool;
	export let onClick;
	export let isFollowing;
	export let posts;
	export let codewarsData;
	export let loggedInUser;
</script>

<div class="menu-container text-center bg-blue-900 rounded-lg p-5 m-10">
	<img class="avatar" src={profileUser.avatar} alt="Avatar" />
	<AvatarUpload />
	<div class={sectionStyles}><p>Name: {profileUser.username}</p></div>
	<div class={sectionStyles}><p>Email: {profileUser.email}</p></div>
	<div class={sectionStyles}><p>Bio: {profileUser.bio || 'placeholder text'}</p></div>
	<div class={sectionStyles}>
		<p class={sectionStyles}>Socials:</p>
		<div id="socials">
			{#if profileUser.social.codewars}
				<p>
					Codewars : <a href="http://www.codewars.com/users/{profileUser.social.codewars}"
						>{profileUser.social.codewars}</a
					>
				</p>
			{:else}
				<p>
					Codewars : <em>Add Username</em>
				</p>
			{/if}
			{#if profileUser.social.linkedin}
				<p>
					LinkedIn : <a href="http://www.linkedin.com/in/{profileUser.social.linkedin}"
						>{profileUser.social.linkedin}</a
					>
				</p>
			{:else}
				<p>
					LinkedIn : <em>Add User</em>
				</p>
			{/if}
		</div>
		<div id="socialsMenu" class="hidden">
			<form method="POST" action="?/addSocials" use:enhance>
				<span class="pr-3">LinkedIn: </span><input
					class="text-black m-1"
					id="linkedin"
					name="linkedinUser"
					placeholder="url"
				/>
				<span>Codewars: </span><input
					class="text-black m-1"
					id="codewars"
					name="codewarsUser"
					placeholder="username"
				/>
				<button type="submit" id="addSocialsButton" class="p-1">Add socials</button>
			</form>
		</div>
		<img src="/share-icon.png" alt="Share" class="w-5 h-5 cursor-pointer" id="socialsIcon" />
	</div>

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
{#if codewarsData}
	<CodewarsInfo {codewarsData} />
{/if}

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
	<script>
		var socialsMenu = document.getElementById('socialsMenu');
		var socialsIcon = document.getElementById('socialsIcon');
		var socials = document.getElementById('socials');

		const toggleForm = function () {
			socialsMenu.classList.toggle('hidden');
			socials.classList.toggle('hidden');
		};

		document.getElementById('socialsIcon').addEventListener('click', toggleForm);
		document.getElementById('addSocialsButton').addEventListener('click', toggleForm);
	</script>
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
