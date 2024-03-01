<script>
	import Upvote from './upvote.svelte';

	export let postTitle;
	export let postContent;
	export let postSlug;
	export let upvoteNumber;
</script>

<!-- component for post previews such as on feed page, not entire post for post page -->
<a href={`/forum/post/${postSlug}`}>
	<div class="flex flex-row py-5 pr-28 bg-slate-100">
		<div>
			<div class="flex px-3">
				<button aria-pressed="false" class="max-h-1">
					<Upvote />
				</button>
				<p class="text-xl py-2">{upvoteNumber}</p>
			</div>
			<p class="text-xl py-2 px-3">1 💬</p>
		</div>
		<!-- upvote and comment icon to be added -->
		<div>
			<h2 class="text-2xl pb-2">{postTitle}</h2>
			<p class=" pb-3">{postContent}</p>
		</div>
	</div>
	<div class="pb-2"></div>
</a>
