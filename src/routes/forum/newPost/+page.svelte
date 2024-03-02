<script>
	import { enhance } from '$app/forms';

	let link = false;
	function handleOptionChange() {
		link = !link;
	}
	export let form;
</script>

<div
	class="editor mx-auto w-10/12 h-1/2 flex flex-col text-gray-800 border border-gray-300 p-4 pb-8 shadow-lg max-w-2xl mt-10"
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
		class="flex flex-col items-center h-screen space-y-4"
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

		<button class="bg-primary hover:bg-dark text-white font-bold py-2 px-4 rounded" type="submit">
			New Post
		</button>
	</form>
</div>
