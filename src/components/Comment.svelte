<script>
	import DisplayAvatar from './DisplayAvatar.svelte';
	export let commentUser;
	export let commentContent;
	export let commentTime;
	export let commentAvatar;

	function timeAgo(timestamp) {
		const timeSince = new Date(timestamp).getTime();
		const secondsAgo = Math.floor((Date.now() - timeSince) / 1000);

		const intervals = {
			year: 31536000,
			month: 2592000,
			week: 604800,
			day: 86400,
			hour: 3600,
			minute: 60,
			second: 1
		};

		for (const interval in intervals) {
			const value = Math.floor(secondsAgo / intervals[interval]);
			if (value >= 1) {
				return `${value} ${interval}${value !== 1 ? 's' : ''} ago`;
			}
		}

		return 'Just now';
	}

	import Upvote from './upvote.svelte';
	import Upvoted from './upvoted.svelte';
	import Downvote from './downvote.svelte';
	import Downvoted from './downvoted.svelte';

	export let commentId;
	export let commentUpvotes;
	export let commentDownvotes;

	export let loggedInUser;

	let userUpvoted;
	let userDownvoted;

	if (commentUpvotes.includes(loggedInUser)) {
		userUpvoted = true;
	} else {
		userUpvoted = false;
	}

	if (commentDownvotes.includes(loggedInUser)) {
		userDownvoted = true;
	} else {
		userDownvoted = false;
	}

	async function upvote(action) {
		await fetch(`/api/comment/${commentId}?/upvote`, {
			method: 'POST',
			body: JSON.stringify({ action })
		});
		if (userUpvoted == true) {
			commentUpvotes = commentUpvotes.filter((like) => like.toString() !== loggedInUser);
			// console.log('upvote removed', postUpvotes);
		} else {
			commentUpvotes.push(loggedInUser);
			if (commentDownvotes.includes(loggedInUser)) {
				commentDownvotes = commentDownvotes.filter((like) => like.toString() !== loggedInUser);
				userDownvoted = !userDownvoted;
				// console.log('downvote auto remove', postDownvotes);
			}
			// console.log('upvoted, postupvotes', postUpvotes);
		}
		userUpvoted = !userUpvoted;
	}

	async function downvote(action) {
		await fetch(`/api/comment/${commentId}?/downvote`, {
			method: 'POST',
			body: JSON.stringify({ action })
		});
		if (userDownvoted == true) {
			commentDownvotes = commentDownvotes.filter((like) => like.toString() !== loggedInUser);
			// console.log('downvote removed', postDownvotes);
		} else {
			commentDownvotes.push(loggedInUser);
			if (commentUpvotes.includes(loggedInUser)) {
				commentUpvotes = commentUpvotes.filter((like) => like.toString() !== loggedInUser);
				// console.log('upvote auto removed', postUpvotes);
				userUpvoted = !userUpvoted;
			}
			// console.log('downvote added', postDownvotes);
		}
		userDownvoted = !userDownvoted;
	}
</script>

<article
	class="p-6 text-base bg-background shadow-sm border-t flex flex-row border-gray-200 dark:border-gray-700 dark:bg-gray-800"
>
	<div class="mr-1">
		<div class="w-20 h-14">
			{#if !userUpvoted && loggedInUser}
				<div class="flex px-3">
					<button
						aria-pressed="false"
						on:click={() => upvote(userUpvoted)}
						aria-label="upvote"
						class="max-h-1"
					>
						<Upvote />
					</button>
					<p class="text-xl py-2">{commentUpvotes.length}</p>
				</div>
			{:else if userUpvoted && loggedInUser}
				<div class="flex px-3">
					<button
						aria-pressed="true"
						on:click={() => upvote(userUpvoted)}
						aria-label="upvoted"
						class="max-h-1"
					>
						<Upvoted />
					</button>
					<p class="text py-2">{commentUpvotes.length}</p>
				</div>
			{:else}
				<div class="flex px-3">
					<button aria-pressed="false" aria-label="upvote" class="max-h-1">
						<Upvote />
					</button>
					<p class="text-xl py-2">{commentUpvotes.length}</p>
				</div>
			{/if}
		</div>
		<div class="w-20 h-14">
			{#if !userDownvoted && loggedInUser}
				<div class="flex px-3">
					<button
						aria-pressed="false"
						on:click={() => downvote(userDownvoted)}
						aria-label="downvote"
						class="max-h-1"
					>
						<Downvote />
					</button>
					<p class="text-xl py-2">{commentDownvotes.length}</p>
				</div>
			{:else if userDownvoted && loggedInUser}
				<div class="flex px-3">
					<button
						aria-pressed="true"
						on:click={() => downvote(userDownvoted)}
						aria-label="downvoted"
						class="max-h-1"
					>
						<Downvoted />
					</button>
					<p class="text py-2">{commentDownvotes.length}</p>
				</div>
			{:else}
				<div class="flex px-3">
					<button aria-pressed="false" aria-label="downvote" class="max-h-1">
						<Downvote />
					</button>
					<p class="text-xl py-2">{commentDownvotes.length}</p>
				</div>
			{/if}
		</div>
	</div>
	<div class="flex flex-col flex-grow">
		<div class="flex justify-between mb-2">
			<div class="flex items-center">
				<DisplayAvatar avatarUrl={commentAvatar} class="mr-2" />
				<p
					class="inline-flex items-center ml-2 mr-3 text-sm text-gray-900 dark:text-white font-semibold"
				>
					{commentUser}
				</p>
				<p class="text-sm text-gray-600 dark:text-gray-400">
					<time pubdate datetime="2022-06-23" title="June 23rd, 2022">{timeAgo(commentTime)}</time>
				</p>
			</div>
			<button
				id="dropdownComment4Button"
				data-dropdown-toggle="dropdownComment4"
				aria-label="edit comment"
				class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-800 dark:text-gray-40 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
				type="button"
			>
				<svg
					class="w-4 h-4"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					fill="currentColor"
					viewBox="0 0 16 3"
				>
					<path
						d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"
					/>
				</svg>
			</button>
			<!-- Dropdown menu -->
			<div
				id="dropdownComment4"
				class="hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
			>
				<ul
					class="py-1 text-sm text-gray-800 dark:text-gray-200"
					aria-labelledby="dropdownMenuIconHorizontalButton"
				>
					<li>
						<a
							href="edit"
							class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
							>Edit</a
						>
					</li>
					<li>
						<a
							href="remove"
							class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
							>Remove</a
						>
					</li>
					<li>
						<a
							href="report"
							class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
							>Report</a
						>
					</li>
				</ul>
			</div>
		</div>

		<p class="text-gray-800 dark:text-gray-400">
			{commentContent}
		</p>
		<div class="flex items-center mt-4 space-x-4"></div>
	</div>
</article>
