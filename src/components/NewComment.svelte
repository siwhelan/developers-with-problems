<script>
	import { enhance } from '$app/forms';

	let link = false;
	function handleOptionChange() {
		link = !link;
	}
	// export let form;
</script>

<form
	class="mb-6"
	method="POST"
	action="?/create"
	use:enhance={() => {
		return async ({ result, update }) => {
			console.log(result);
			update();
		};
	}}
>
	<div
		class="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700"
	>
		<label for="comment" class="sr-only">Your comment</label>
		<textarea
			id="comment"
			name="textContent"
			rows="6"
			class="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
			placeholder="Write a comment..."
			required
		></textarea>
	</div>
	<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit"
		>Post Response</button
	>
</form>
