<script>
	import Upvote from './upvote.svelte';
	import Upvoted from './upvoted.svelte';
	import Downvote from './downvote.svelte';
	import Downvoted from './downvoted.svelte';

	export let postTitle;
	export let postContent;
	export let postAuthor;
	export let postUpvotes;
	export let upvoteNumber;
	export let postDownvotes;
	export let downvoteNumber;

	export let loggedInUser;

	let userUpvoted;
	let userDownvoted;

	let downvotes = postDownvotes.length;
	let upvotes = postUpvotes.length;
	function updateUpandDownVotes(upvotes, downvotes) {
		upvotes = postUpvotes.length;
		downvotes = postDownvotes.length;
	}

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
		// console.log(JSON.stringify({ action }));
		const newPost = await fetch('?/upvote', {
			method: 'POST',
			body: JSON.stringify({ action })
		});
		if (userUpvoted == true) {
			// upvoteNumber -= 1;

			postUpvotes.push(loggedInUser);
		} else {
			postUpvotes = postUpvotes.filter((like) => like.toString() !== loggedInUser);

			// upvoteNumber += 1;
			if (postDownvotes.includes(loggedInUser)) {
				// downvoteNumber -= 1;

				postDownvotes = postDownvotes.filter((like) => like.toString() !== loggedInUser);
				userDownvoted = !userDownvoted;
			}
		}
		userUpvoted = !userUpvoted;
	}

	async function downvote(action) {
		await fetch('?/downvote', {
			method: 'POST',
			body: JSON.stringify({ action })
		});
		if (userDownvoted == true) {
			postDownvotes = postDownvotes.filter((like) => like.toString() !== loggedInUser);
			// downvoteNumber -= 1;
		} else {
			// downvoteNumber += 1;
			postDownvotes.push(loggedInUser);
			if (postUpvotes.includes(loggedInUser)) {
				// upvoteNumber -= 1;
				postUpvotes = postUpvotes.filter((like) => like.toString() !== loggedInUser);

				// userUpvoted = !userUpvoted;
			}
		}
		userDownvoted = !userDownvoted;
	}

	//append to postUpvote
	//class
</script>

<div class="flex flex-row py-5 pr-28 bg-background rounded shadow-md relative">
	<div>
		{#if !userUpvoted && loggedInUser}
			<div class="flex px-3">
				<button aria-pressed="false" on:click={() => upvote(userUpvoted)} class="max-h-1">
					<Upvote />
				</button>
				<p class="text-xl py-2">{upvotes}</p>
			</div>
		{:else if userUpvoted && loggedInUser}
			<div class="flex px-3">
				<button aria-pressed="true" on:click={() => upvote(userUpvoted)} class="max-h-1">
					<Upvoted />
				</button>
				<p class="text py-2">{upvotes}</p>
			</div>
		{:else}
			<div class="flex px-3">
				<button aria-pressed="false" class="max-h-1">
					<Upvote />
				</button>
				<p class="text-xl py-2">{upvotes}</p>
			</div>
		{/if}
		{#if !userDownvoted && loggedInUser}
			<div class="flex px-3">
				<button aria-pressed="false" on:click={() => downvote(userDownvoted)} class="max-h-1">
					<Downvote />
				</button>
				<p class="text-xl py-2">{downvotes}</p>
			</div>
		{:else if userDownvoted && loggedInUser}
			<div class="flex px-3">
				<button aria-pressed="true" on:click={() => downvote(userDownvoted)} class="max-h-1">
					<Downvoted />
				</button>
				<p class="text py-2">{downvotes}</p>
			</div>
		{:else}
			<div class="flex px-3">
				<button aria-pressed="false" class="max-h-1">
					<Downvote />
				</button>
				<p class="text-xl py-2">{downvotes}</p>
			</div>
		{/if}
	</div>
	<!-- upvote and comment icon to be added -->
	<div>
		<h2 class="text-xl font-bold pb-1 text-primary">{postTitle}</h2>
		<p class="font-bold"><a href="/profile/{postAuthor}">{postAuthor}</a></p>
		<p class=" pb-3">{postContent}</p>
	</div>
</div>
<div class="pb-2"></div>
