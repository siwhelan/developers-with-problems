<script>
	import Upvote from './upvote.svelte';
	import Upvoted from './upvoted.svelte';

	export let postTitle;
	export let postContent;
	export let postAuthor;
	export let upvoteNumber = 1;

	export let userUpvoted = true;
</script>

<div class="flex flex-row py-5 pr-28 bg-slate-100">
	<div>
		{#if !userUpvoted}
			<div class="flex">
				<div class="max-h-1">
					<Upvote />
				</div>
				<p class="text-xl py-2">{upvoteNumber}</p>
			</div>
		{:else if userUpvoted}
			<div class="flex">
				<div class="max-h-1">
					<Upvoted />
				</div>
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
