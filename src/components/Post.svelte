<script>
	import Upvote from './upvote.svelte';
	import Upvoted from './upvoted.svelte';
	import Downvote from './downvote.svelte';
	import Downvoted from './downvoted.svelte';
	export let postId;
	export let postTitle;
	export let postContent;
	export let postAuthor;
	export let postUpvotes;
	export let postDownvotes;

	export let loggedInUser;
	// console.log('postId', postId);
	// console.log('postupvotes', postUpvotes);
	// console.log('postdownvotes', postDownvotes);
	let userUpvoted;
	let userDownvoted;

	//changes page state based on whether user has upvoted
	if (postUpvotes.includes(loggedInUser)) {
		userUpvoted = true;
	} else {
		userUpvoted = false;
	}

	if (postDownvotes.includes(loggedInUser)) {
		userDownvoted = true;
	} else {
		userDownvoted = false;
	}

	async function upvote(action) {
		await fetch(`/api/post/${postId}?/upvote`, {
			method: 'POST',
			body: JSON.stringify({ action })
		});
		if (userUpvoted == true) {
			postUpvotes = postUpvotes.filter((like) => like.toString() !== loggedInUser);
			// console.log('upvote removed', postUpvotes);
		} else {
			postUpvotes.push(loggedInUser);
			if (postDownvotes.includes(loggedInUser)) {
				postDownvotes = postDownvotes.filter((like) => like.toString() !== loggedInUser);
				userDownvoted = !userDownvoted;
				// console.log('downvote auto remove', postDownvotes);
			}
			// console.log('upvoted, postupvotes', postUpvotes);
		}
		userUpvoted = !userUpvoted;
	}

	async function downvote(action) {
		await fetch(`/api/post/${postId}?/downvote`, {
			method: 'POST',
			body: JSON.stringify({ action })
		});
		if (userDownvoted == true) {
			postDownvotes = postDownvotes.filter((like) => like.toString() !== loggedInUser);
			// console.log('downvote removed', postDownvotes);
		} else {
			postDownvotes.push(loggedInUser);
			if (postUpvotes.includes(loggedInUser)) {
				postUpvotes = postUpvotes.filter((like) => like.toString() !== loggedInUser);
				// console.log('upvote auto removed', postUpvotes);
				userUpvoted = !userUpvoted;
			}
			// console.log('downvote added', postDownvotes);
		}
		userDownvoted = !userDownvoted;
	}
</script>

<div class="flex flex-row py-5 pr-28 bg-background rounded shadow-md relative">
	<div class="mr-1">
		<div class="w-20 h-14">
			{#if !userUpvoted && loggedInUser}
				<div class="flex px-3">
					<button aria-pressed="false" on:click={() => upvote(userUpvoted)} class="max-h-1">
						<Upvote />
					</button>
					<p class="text-xl py-2">{postUpvotes.length}</p>
				</div>
			{:else if userUpvoted && loggedInUser}
				<div class="flex px-3">
					<button aria-pressed="true" on:click={() => upvote(userUpvoted)} class="max-h-1">
						<Upvoted />
					</button>
					<p class="text py-2">{postUpvotes.length}</p>
				</div>
			{:else}
				<div class="flex px-3">
					<button aria-pressed="false" class="max-h-1">
						<Upvote />
					</button>
					<p class="text-xl py-2">{postUpvotes.length}</p>
				</div>
			{/if}
		</div>
		<div class="w-20 h-14">
			{#if !userDownvoted && loggedInUser}
				<div class="flex px-3">
					<button aria-pressed="false" on:click={() => downvote(userDownvoted)} class="max-h-1">
						<Downvote />
					</button>
					<p class="text-xl py-2">{postDownvotes.length}</p>
				</div>
			{:else if userDownvoted && loggedInUser}
				<div class="flex px-3">
					<button aria-pressed="true" on:click={() => downvote(userDownvoted)} class="max-h-1">
						<Downvoted />
					</button>
					<p class="text py-2">{postDownvotes.length}</p>
				</div>
			{:else}
				<div class="flex px-3">
					<button aria-pressed="false" class="max-h-1">
						<Downvote />
					</button>
					<p class="text-xl py-2">{postDownvotes.length}</p>
				</div>
			{/if}
		</div>
	</div>
	<div>
		<h2 class="text-xl font-bold pb-1 text-primary">{postTitle}</h2>
		<p class="font-bold"><a href="/profile/{postAuthor}">{postAuthor}</a></p>
		<p class=" pb-3">{postContent}</p>
	</div>
</div>
<div class="pb-2"></div>
