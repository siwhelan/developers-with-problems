<script>
	import FollowBtn from './FollowBtn.svelte';
	import PostLink from './PostLink.svelte';
	import AvatarUpload from './AvatarUpload.svelte';
	import CodewarsInfo from './CodewarsInfo.svelte';
	import { enhance } from '$app/forms';
	import AddIcon from './AddIcon.svelte';
	export let profileUser;
	export let followBtnBool;
	export let onClick;
	export let isFollowing;
	export let posts;
	export let codewarsData;
	export let loggedInUser;
	let addSocial = false;
	const toggleForm = function () {
		addSocial = !addSocial;
	};
	// eslint-disable-next-line
	function onKeyDown(_e) {
		addSocial = !addSocial;
	}
</script>

<div class="flex text-center justify-center flex-row">
	<div class="menu-container text-center rounded-lg p-5 m-10 px-5 w-96 bg-stone-100">
		<!-- <img
			class="avatar w-32 h-32 absolute right-[120px] top-[50px] rounded-full"
			src={profileUser.avatar}
			alt="Avatar"
		/> -->
		<AvatarUpload />
		<div class=" pb-10">
			<img class="h-40 m-auto pt-5" alt="profile" src={profileUser.avatar} />
			<div class="pt-5 text-xl"><p>{profileUser.username}</p></div>

			<div class="sectionStyles"><p>Bio: {profileUser.bio || 'placeholder text'}</p></div>
		</div>
		<div class="">
			<p class="sectionStyles">
				Followers: {profileUser.followers != '' ? profileUser.followers : 'No followers yet!'}
			</p>
			<p class="sectionStyles">
				Following: {profileUser.following != ''
					? profileUser.following
					: 'Not following anyone yet!'}
			</p>
			{#if followBtnBool}
				<div class="m-auto w-full pt-3">
					<FollowBtn profileUserID={profileUser._id} {isFollowing} {onClick} />
				</div>
			{/if}
		</div>
		<div class="flex flex-col pt-5">
			<!-- <p class="sectionStyles pt-5">Socials:</p> -->
			<div id="socials" class="flex flex-col">
				<div><p>Email: {profileUser.email}</p></div>

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
			{#if addSocial}
				<div id="socialsMenu" class="flex flex-col">
					<form method="POST" action="?/addSocials" use:enhance class="flex flex-col">
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
						<div class="w-50 pt-3">
							<button
								type="submit"
								id="addSocialsButton"
								class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
								>Add socials</button
							>
						</div>
					</form>
				</div>
			{/if}
			<!-- <img src="/share-icon.png" alt="Share" class="w-5 h-5 cursor-pointer" id="socialsIcon" /> -->
			<a
				on:click={toggleForm}
				alt="Share"
				type="button"
				aria-roledescription="add social media"
				role="button"
				aria-label="addSocials"
				class="w-5 h-5 cursor-pointer ml-5 mb-5"
				tabindex="0"
				id="socialsIcon"
				on:keydown|preventDefault={onKeyDown}
			>
				<AddIcon />
			</a>
			<div class="pt-5">
				<a class="linkStyles" href="/profile/changePassword">Change Profile Picture</a>
				{#if !followBtnBool}
					<a class="linkStyles" href="/profile/changePassword">Change Password</a>
				{/if}
			</div>
		</div>
	</div>

	<!-- <p class={sectionStyles}>
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
	{/if} -->
</div>
{#if codewarsData}
	<CodewarsInfo {codewarsData} />
{/if}

<h2 class="text-center text-2xl">Posts by this user</h2>
<div class="">
	{#each posts as post}
		<PostLink
			postSlug={post._id}
			postTitle={post.title}
			postContent={post.content}
			postUpvotes={post.upvotes}
			upvoteNumber={post.upvotes.length}
			postAuthor={profileUser.username}
			{loggedInUser}
			downvoteNumber={post.downvotes.length}
			postDownvotes={post.downvotes}
		/>
	{/each}
</div>

<style lang="postcss">
	/* .sectionStyles {
		@apply block py-2 px-4 bg-navigation text-white rounded-md mb-2 max-w-xs text-center;
	} */
	.linkStyles {
		@apply block py-2 px-4 m-auto bg-green-800 text-white rounded-md mb-2 max-w-xs hover:bg-red-700 text-center;
	}
</style>
