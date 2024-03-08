<!-- component for post previews such as on feed page, not entire post for post page -->

<script>
	import Upvote from './upvote.svelte';
	import Upvoted from './upvoted.svelte';
	import Downvote from './downvote.svelte';
	import Downvoted from './downvoted.svelte';
	import DisplayAvatar from './DisplayAvatar.svelte';

	export let postTitle;
	export let postContent;
	export let postAuthor;
	export let postAvatar;
	export let postUpvotes;
	export let postSlug;
	export let loggedInUser;
	export let postDownvotes;

	let userUpvoted;
	let userDownvoted;
	// console.log('postupvotes', postUpvotes);
	// console.log('postdownvotes', postDownvotes);
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

	//either upvotes or removes an upvote based on userUpvoted bool
	async function upvote(action) {
		await fetch(`/api/post/${postSlug}?/upvote`, {
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
		await fetch(`/api/post/${postSlug}?/downvote`, {
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

	const loginPopup = function () {
		const modal = document.getElementById('loginModal');
		const popup = modal.querySelector('#popup');

		modal.classList.remove('hidden');
		modal.classList.remove('opacity-0');
		popup.classList.remove('opacity-0');
		setTimeout(() => {
			modal.classList.add('opacity-0');
			popup.classList.add('opacity-0');

			setTimeout(() => {
				modal.classList.add('hidden');
			}, 3000);
		}, 2000);
	};
</script>

<div id="loginModal" class="fixed inset-0 z-10 overflow-y-auto hidden">
	<div class="flex items-center justify-center min-h-screen p-4">
		<div class="bg-white rounded-lg shadow-lg p-6">
			<span id="popup" class="opacity-0">Please signup or login to vote!</span>
		</div>
	</div>
</div>

<div data-testid="postLink" class="flex flex-row py-5 pr-28 rounded-lg shadow-md text-dark">
	<div class="mr-1">
		<div class="w-20 h-14">
			{#if !userUpvoted && loggedInUser}
				<div class="flex px-3">
					<button
						aria-label="downvote"
						id="upvote"
						aria-pressed="false"
						on:click={() => upvote(userUpvoted)}
						class="max-h-1"
					>
						<Upvote />
					</button>
					<p class="text-xl py-2">{postUpvotes.length}</p>
				</div>
			{:else if userUpvoted && loggedInUser}
				<div class="flex px-3">
					<button
						aria-label="remove upvote"
						id="remove upvote"
						aria-pressed="true"
						on:click={() => upvote(userUpvoted)}
						class="max-h-1"
					>
						<Upvoted />
					</button>
					<p class="text py-2">{postUpvotes.length}</p>
				</div>
			{:else}
				<div class="flex px-3">
					<button
						aria-label="upvote"
						id="upvote"
						aria-pressed="false"
						on:click={() => loginPopup()}
						class="max-h-1"
					>
						<Upvote />
					</button>
					<p class="text-xl py-2">{postUpvotes.length}</p>
				</div>
			{/if}
		</div>
		<div class="w-20 h-14">
			{#if !userDownvoted && loggedInUser}
				<div class="flex px-3">
					<button
						id="downvote"
						aria-label="downvote"
						aria-pressed="false"
						on:click={() => downvote(userDownvoted)}
						class="max-h-1"
					>
						<Downvote />
					</button>
					<p class="text-xl py-2">{postDownvotes.length}</p>
				</div>
			{:else if userDownvoted && loggedInUser}
				<div class="flex px-3">
					<button
						id="remove downvote"
						aria-label="remove downvote"
						aria-pressed="true"
						on:click={() => downvote(userDownvoted)}
						class="max-h-1"
					>
						<Downvoted />
					</button>
					<p class="text py-2">{postDownvotes.length}</p>
				</div>
			{:else}
				<div class="flex px-3">
					<button
						aria-label="downvote"
						id="downvote"
						aria-pressed="false"
						on:click={() => loginPopup()}
						class="max-h-1"
					>
						<Downvote />
					</button>
					<p class="text-xl py-2">{postDownvotes.length}</p>
				</div>
			{/if}
		</div>
	</div>
	<a href={`/forum/post/${postSlug}`}>
		<div>
			<h2 class="text-xl font-bold pb-2 text-primary">{postTitle}</h2>
			<p class=" pb-3">{postContent}</p>
			<div class="flex items-center">
				<DisplayAvatar avatarUrl={postAvatar} />
				<a href="/profile/{postAuthor}" class="ml-2">{postAuthor}</a>
			</div>
		</div>
	</a>

	<script>
	</script>
</div>
<div class="pb-12"></div>
