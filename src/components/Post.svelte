<script>
	import Upvote from './upvote.svelte';
	import Upvoted from './upvoted.svelte';

	export let postTitle;
	export let postContent;
	export let postAuthor;
	export let postUpvotes;
	export let upvoteNumber;

	// let userID = '';

	export let loggedInUser;
	// console.log(loggedInUser);

	let userUpvoted;

	//changes page state based on whether user has upvoted
	if (postUpvotes.includes(loggedInUser)) {
		userUpvoted = true;
	} else {
		userUpvoted = false;
	}
	async function upvote(action) {
		// console.log(JSON.stringify({ action }));
		await fetch('?/upvote', {
			method: 'POST',
			body: JSON.stringify({ action })
		});
		if (userUpvoted == true) {
			upvoteNumber -= 1;
		} else {
			upvoteNumber += 1;
		}
		userUpvoted = !userUpvoted;
	}
</script>

<div class="flex flex-row py-5 pr-28 bg-background rounded shadow-md relative">
	<div>
		{#if !userUpvoted && loggedInUser}
			<div class="flex px-3">
				<button
					aria-pressed="false"
					on:click={() => upvote(userUpvoted)}
					class="max-h-1"
					aria-label="Upvote"
				>
					<Upvote />
				</button>
				<p class="text-xl py-2">{upvoteNumber}</p>
			</div>
		{:else if userUpvoted && loggedInUser}
			<div class="flex px-3">
				<button
					aria-pressed="true"
					on:click={() => upvote(userUpvoted)}
					class="max-h-1"
					aria-label="upvote"
				>
					<Upvoted />
				</button>
				<p class="text py-2">{upvoteNumber}</p>
			</div>
		{:else}
			<div class="flex px-3">
				<button aria-pressed="false" class="max-h-1" aria-label="upvote">
					<Upvote />
				</button>
				<p class="text-xl py-2">{upvoteNumber}</p>
			</div>
		{/if}
		<p class="text-xl py-2 px-6">💬</p>
	</div>
	<!-- upvote and comment icon to be added -->
	<div>
		<h2 class="text-xl font-bold pb-1 text-primary">{postTitle}</h2>
		<p class="font-bold"><a href="/profile/{postAuthor}">{postAuthor}</a></p>
		<p class=" pb-3">{postContent}</p>
	</div>
</div>
<div class="pb-2"></div>
