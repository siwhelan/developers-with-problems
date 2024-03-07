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

<div class="flex justify-center text-center my-24">
	<div class="rounded-lg bg-stone-100 p-5 m-10 flex sm:flex-wrap md:flex-nowrap">
		<div class="menu-container px-5 sm:w-full md:w-1/2 lg:max-w-lg">
			<div class="pb-10">
				<img class="h-40 m-auto pt-5" alt="profile" src={profileUser.avatar} />
				<div class="pt-5 text-xl"><p>{profileUser.username}</p></div>
				<div class="sectionStyles">
					<p>{profileUser.bio || 'Apprentice Software Engineer'}</p>
					<!-- Feel free to change this! -->
				</div>
			</div>
			<div>
				<p class="sectionStyles">
					Followers: {profileUser.followers != '' ? profileUser.followers : 'No followers yet!'}
				</p>
				<p class="sectionStyles">
					Following: {profileUser.following != ''
						? profileUser.following
						: 'Not following anyone yet!'}
				</p>
				{#if followBtnBool}
					<div class="pt-3 w-full">
						<FollowBtn profileUserID={profileUser._id} {isFollowing} {onClick} />
					</div>
				{/if}
			</div>
			<div class="flex flex-col pt-5">
				<div id="socials" class="flex flex-col">
					<div><p>Email: {profileUser.email}</p></div>

					{#if profileUser.social.codewars}
						<p>
							Codewars : <a
								class="hover:text-primary"
								href="http://www.codewars.com/users/{profileUser.social.codewars}"
								>{profileUser.social.codewars}</a
							>
						</p>
					{:else}
						<p>
							Codewars : <em>No Username</em>
						</p>
					{/if}
					{#if profileUser.social.linkedin}
						<p>
							LinkedIn : <a
								class="hover:text-primary"
								href="http://www.linkedin.com/in/{profileUser.social.linkedin}"
								>{profileUser.social.linkedin}</a
							>
						</p>
					{:else}
						<p>
							LinkedIn : <em>No User</em>
						</p>
					{/if}
				</div>
				{#if !followBtnBool}
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
										class="bg-primary hover:bg-dark text-outline hover:text-outline-hover text-white font-bold py-2 px-4 rounded"
										>Add socials</button
									>
								</div>
							</form>
						</div>
					{/if}
					<!-- <img src="/share-icon.png" alt="Share" class="w-5 h-5 cursor-pointer" id="socialsIcon" /> -->
					<a
						on:click={toggleForm}
						class="cursor-pointer ml-5 mb-5 w-5 h-5"
						role="button"
						aria-label="addSocials"
						alt="Share"
						type="button"
						aria-roledescription="add social media"
						tabindex="0"
						id="socialsIcon"
						on:keydown|preventDefault={onKeyDown}
					>
						<AddIcon />
					</a>
					<div class="pt-5 space-y-2">
						{#if !followBtnBool}
							<AvatarUpload />
							<a
								href="/profile/changePassword"
								class="inline-block px-4 py-2 text-white text-outline bg-primary rounded hover:bg-dark hover:text-outline-hover focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50"
							>
								Change Password
							</a>
						{/if}
					</div>
				{/if}
			</div>
		</div>
		{#if codewarsData}
			<div class="codewars-info-container px-5 sm:w-full md:w-1/2 lg:max-w-lg">
				<CodewarsInfo {codewarsData} />
			</div>
		{/if}
	</div>
</div>

<h2 class="text-2xl text-center">Posts by this user</h2>
<div>
	{#each posts as post}
		<PostLink
			postSlug={post._id}
			postTitle={post.title}
			postContent={post.content}
			postUpvotes={post.upvotes}
			upvoteNumber={post.upvotes.length}
			postAvatar={profileUser.avatar}
			postAuthor={profileUser.username}
			{loggedInUser}
			downvoteNumber={post.downvotes.length}
			postDownvotes={post.downvotes}
		/>
	{/each}
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

<style lang="postcss">
	.menu-container {
		display: flex;
		flex-direction: column;
		min-width: 300px; /* Adjust as needed */
		min-height: 400px; /* Adjust as needed */
		flex-grow: 1; /* Allows the container to grow to fit content */
	}
	.text-outline {
		text-shadow:
			-1px -1px 0 #c83f00,
			1px -1px 0 #c83f00,
			-1px 1px 0 #c83f00,
			1px 1px 0 #c83f00;
	}
	.hover\:text-outline-hover:hover {
		text-shadow:
			-1px -1px 0 #1a202c,
			1px -1px 0 #1a202c,
			-1px 1px 0 #1a202c,
			1px 1px 0 #1a202c;
	}
</style>
