<!-- component for post previews such as on feed page, not entire post for post page -->

<!-- example usage -->
<!-- <PostLink
	postSlug={post._id}
	postTitle={post.title}
	postContent={post.content}
	postUpvotes={post.upvotes}
	upvoteNumber={post.upvotes.length}
	loggedInUser={data.loggedInUser}
/> -->

<script>
	import Upvote from './upvote.svelte';
	import Upvoted from './upvoted.svelte';

	export let postTitle;
	export let postContent;
	export let postUpvotes;
	export let postSlug;
	export let upvoteNumber;
	export let loggedInUser;

	let userUpvoted;

	//changes page state based on whether user has upvoted
	if (postUpvotes.includes(loggedInUser)) {
		userUpvoted = true;
	} else {
		userUpvoted = false;
	}

	//either upvotes or removes an upvote based on userUpvoted bool
	async function upvote(action, postSlug) {
		await fetch('?/upvote', {
			method: 'POST',
			body: JSON.stringify({ action, postSlug })
		});
		if (userUpvoted == true) {
			upvoteNumber -= 1;
		} else {
			upvoteNumber += 1;
		}
		userUpvoted = !userUpvoted;
	}
</script>

<div class="flex flex-row py-5 pr-28 rounded-lg shadow-md max-w-2xl text-dark">
	<div>
		{#if !userUpvoted && loggedInUser}
			<div class="flex px-3">
				<button aria-pressed="false" on:click={() => upvote(userUpvoted, postSlug)} class="max-h-1">
					<Upvote />
				</button>
				<p class="text-xl py-2">{upvoteNumber}</p>
			</div>
		{:else if userUpvoted && loggedInUser}
			<div class="flex px-3">
				<button aria-pressed="true" on:click={() => upvote(userUpvoted, postSlug)} class="max-h-1">
					<Upvoted />
				</button>
				<p class="text-xl py-2">{upvoteNumber}</p>
			</div>
		{:else}
			<div class="flex px-3">
				<button aria-pressed="false" class="max-h-1">
					<Upvote />
				</button>
				<p class="text-xl py-2">{upvoteNumber}</p>
			</div>
		{/if}
		<p class="text-xl py-2 px-3">💬</p>
	</div>
	<!-- upvote and comment icon to be added -->
	<a href={`/forum/post/${postSlug}`}>
		<div>
			<h2 class="text-2xl pb-2">{postTitle}</h2>
			<p class=" pb-3">{postContent}</p>
		</div>
	</a>
</div>
<div class="pb-2"></div>
