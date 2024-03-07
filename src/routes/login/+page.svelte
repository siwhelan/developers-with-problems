<script>
	import { enhance } from '$app/forms';
	let resultMessage;
</script>

<div class="pt-3 mr-12 text-center">
	<h1 class="my-24 text-2xl text-text font-bold mb-4">Log In To DWP</h1>
	<form
		class="max-w-md mx-auto p-4 bg-white shadow-md"
		method="POST"
		action="?/authorisation"
		use:enhance={() => {
			return async ({ result }) => {
				console.log(result.data.body);
				resultMessage = result.data.body;
			};
		}}
	>
		<div class="mb-4">
			<label class="block text-gray-700 text-sm font-bold mb-2" for="email">Email:</label>
			<input
				class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
				type="text"
				name="email"
				value=""
				placeholder="email"
				required
			/>
		</div>
		<div class="mb-4">
			<label class="block text-gray-700 text-sm font-bold mb-2" for="email">Password:</label>
			<input
				class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
				type="password"
				name="password"
				value=""
				placeholder="password"
				required
			/>
		</div>
		{#if resultMessage}<p class="text-red-500">{resultMessage}</p>{/if}
		<button
			class="bg-primary hover:bg-dark text-white rounded font-bold py-2 px-4"
			type="submit"
			aria-label="Log in">Login</button
		>
	</form>
</div>
