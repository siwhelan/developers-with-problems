<script>
	import Upvote from './upvote.svelte';
	import Upvoted from './upvoted.svelte';

	export let postTitle;
	export let postContent;
	export let postAuthor;
	export let postUpvotes;
	export let upvoteNumber;
	export let data;
	console.log(data);
	let userID = '';
	// let { post, user, userID } = data;
	// console.log(userID);
	// const userID = '65e09e269f5ee760ed08ff57';
	// TODO, user ID currently hardcoded
	let userUpvoted;
	if (postUpvotes.includes(userID)) {
		userUpvoted = true;
	} else {
		userUpvoted = false;
	}
	async function upvote(action) {
		console.log(JSON.stringify({ action }));
		await fetch('?/upvote', {
			method: 'POST',
			body: JSON.stringify({ action })
		});
	}
</script>

<div class="flex flex-row py-5 pr-28 bg-slate-100">
	<div>
		{#if !userUpvoted}
			<div class="flex px-3">
				<button aria-pressed="false" on:click={() => upvote(userUpvoted)} class="max-h-1">
					<Upvote />
				</button>
				<p class="text-xl py-2">{upvoteNumber}</p>
			</div>
		{:else if userUpvoted}
			<div class="flex px-3">
				<button aria-pressed="true" on:click={() => upvote(userUpvoted)} class="max-h-1">
					<Upvoted />
				</button>
				<p class="text-xl py-2">{upvoteNumber}</p>
			</div>
		{/if}
		<p class="text-xl py-2 px-3">1 💬</p>
	</div>
	<!-- upvote and comment icon to be added -->
	<div>
		<p>{postAuthor}</p>
		<h2 class="text-2xl pb-2">{postTitle}</h2>
		<p class=" pb-3">{postContent}</p>
	</div>
</div>
<div class="pb-2"></div>
