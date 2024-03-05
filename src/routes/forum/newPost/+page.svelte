<script>
	import { enhance } from '$app/forms';
	let selectedForum;
	let link = false;
	function handleOptionChange() {
		link = !link;
	}
	export let form;
</script>

<div class="pt-20">
	<div
		class="editor mx-auto w-10/12 flex flex-col text-gray-800 border border-gray-300 p-4 pb-8 shadow-lg max-w-2xl mt-12 ml-4"
	>
		<form
			method="POST"
			action="?/create"
			use:enhance={() => {
				return async ({ result, update }) => {
					console.log(result);
					update();
				};
			}}
			class="flex flex-col items-center space-y-4"
		>
			{#if form?.error}
				<div class="error pt-3 pb-3 block">
					<p>Please check all fields are filled in</p>
				</div>
			{/if}

			<label class="w-full">
				<input
					class="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none w-full"
					type="Title"
					name="title"
					placeholder="Post Title"
				/>
			</label>

			<label class="flex items-center">
				<input type="checkbox" value="link" on:change={handleOptionChange} />
				<span class="ml-2">Add Link</span>
			</label>

			<label for="options">Choose a Forum Category:</label>
			<select id="forum" name="forum" bind:value={selectedForum}>
				<option value="general">General Coding</option>
				<option value="job">Job Hunting/Career Advice</option>
				<option value="events">Events</option>
				<option value="news">News</option>
			</select>
			{#if link == true}
				<label class="w-full">
					<span>Link URL</span>
					<input
						class="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none w-full"
						label="link"
						name="link"
					/>
				</label>
			{/if}

			<label class="w-full">
				<textarea
					class="description bg-gray-100 sec p-3 w-full h-60 border border-gray-300 outline-none"
					label="text"
					name="textPost"
					placeholder="Describe everything about this post here"
				/>
			</label>

			<button
				class="bg-primary hover:bg-dark text-white text-outline hover:text-outline-hover font-bold py-2 px-4 rounded"
				type="submit"
				aria-label="New forum post"
			>
				New Post
			</button>
		</form>
	</div>
</div>

<style>
	.text-outline {
		text-shadow:
			-1px -1px 0 #c83f00,
			1px -1px 0 #c83f00,
			-1px 1px 0 #c83f00,
			1px 1px 0 #c83f00;
	}
	.hover\:text-outline-hover:hover {
		text-shadow:
			-1px -1px 0 #1a202c,
			1px -1px 0 #1a202c,
			-1px 1px 0 #1a202c,
			1px 1px 0 #1a202c;
	}
</style>
