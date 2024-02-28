<script>
	import { enhance } from '$app/forms';

	let link = true;
	function handleOptionChange(event) {
		link = !link;
	}
	export let form;
</script>

<form
	method="POST"
	action="?/create"
	use:enhance={({ formElement, formData, action, cancel, submitter }) => {
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
				Title
				<input
					class=" rounded-lg bg-gray-50 border focus:ring-blue-500 focus:border-blue-500 text-sm border-gray-300 p-2.5"
					type="Title"
					name="title"
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
				class=" rounded-lg bg-gray-50 border focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 text-sm border-gray-300 p-2.5"
				label="link"
				name="link"
			/>
		</label>
	{/if}
	<label>
		Text content
		<textarea
			class=" rounded-lg bg-gray-50 border focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 text-sm border-gray-300 p-2.5"
			label="text"
			name="textPost"
		/>
	</label>
	<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit"
		>New Post</button
	>
</form>
