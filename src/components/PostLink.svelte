<script>
	import Upvote from './upvote.svelte';
	export let postTitle;
	export let postContent;
	export let postSlug;
	export let upvoteNumber;
</script>

<div class="flex flex-row py-5 pr-28 rounded-lg shadow-md max-w-2xl text-dark">
	<div class="flex flex-row">
		<div class="flex flex-col px-3">
			<button aria-pressed="false" class="max-h-1">
				<Upvote />
			</button>
			<p class="text-xl py-1 pl-12">{upvoteNumber}</p>
			<p class="text-xl py-2 px-3">💬 1</p>
		</div>
		<a href={`/forum/post/${postSlug}`}>
			<div class="flex flex-col">
				<h2 class="text-xl font-bold pb-2 text-primary">{postTitle}</h2>
				<p class="pb-3">{postContent}</p>
			</div>
		</a>
	</div>
</div>
<div class="pb-1"></div>
