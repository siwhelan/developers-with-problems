<script>
	import { enhance } from '$app/forms';

	let link = false;
	function handleOptionChange() {
		link = !link;
	}
	export let form;
</script>

<div
	class="editor mx-auto w-10/12 flex h-1/2 flex-col text-gray-800 border border-gray-300 p-4 shadow-lg max-w-2xl mt-10"
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
		class="flex flex-col items-center h-screen"
	>
		<div class="flex">
			<div class="flex-col">
				<div class="pt-3 pb-3 block">
					{#if form?.error}<p class="error">Please check all fields are filled in</p>{/if}
				</div>
				<label>
					<input
						class="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none"
						type="Title"
						name="title"
						placeholder="Post Title"
					/>
				</label>
			</div>
		</div>
		<label>
			<input type="checkbox" value="link" on:change={handleOptionChange} />
			Add Link
		</label>

		{#if link == true}
			<label>
				Link URL
				<input
					class="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none"
					label="link"
					name="link"
				/>
			</label>
		{/if}
		<label>
			<textarea
				class="description bg-gray-100 sec p-3 w-100 h-60 border border-gray-300 outline-none"
				label="text"
				name="textPost"
				placeholder="Describe everything about this post here"
			/>
		</label>
		<button
			class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
			type="submit">New Post</button
		>
	</form>
</div>
