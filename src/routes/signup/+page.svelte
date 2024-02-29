<script>
	import { enhance } from '$app/forms';
	let errorMessage = null;
	let successMessage = null;
	let showLoginForm = false;

	const clearErrorMessage = () => {
		errorMessage = null;
	};
</script>

<div class="pt-3 text-center">
	<form
		class="max-w-md mx-auto p-4 bg-white shadow-md"
		method="POST"
		action="?/create"
		use:enhance={({ formData, cancel }) => {
			return async ({ result, update }) => {
				const password = formData.get('password');
				const confirmPassword = formData.get('confirmPassword');

				if (password !== confirmPassword) {
					errorMessage = 'Passwords do not match';
					cancel();
					return;
				}

				if (result.data.success == true) {
					successMessage = 'You have signed up successfully!';
					showLoginForm = true;
				}

				errorMessage = result.data.error;
				update();
			};
		}}
	>
		<div class="mb-4">
			<label class="block text-gray-700 text-sm font-bold mb-2" for="username">Username:</label>
			<input
				class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
				type="text"
				name="username"
				id="username"
				value=""
				placeholder="username"
				required
				on:focus={clearErrorMessage}
			/>
		</div>

		<div class="mb-4">
			<label class="block text-gray-700 text-sm font-bold mb-2" for="email">Email:</label>
			<input
				class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
				type="email"
				name="email"
				id="email"
				value=""
				placeholder="email"
				required
				on:focus={clearErrorMessage}
			/>
		</div>

		<div class="mb-4">
			<label class="block text-gray-700 text-sm font-bold mb-2" for="password">Password:</label>
			<input
				class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
				type="password"
				name="password"
				id="password"
				value=""
				placeholder="password"
				required
				on:focus={clearErrorMessage}
			/>
		</div>

		<div class="mb-4">
			<label class="block text-gray-700 text-sm font-bold mb-2" for="confirmPassword"
				>Confirm Password:</label
			>
			<input
				class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
				type="password"
				name="confirmPassword"
				id="confirmPassword"
				value=""
				placeholder="password"
				required
				on:focus={clearErrorMessage}
			/>
		</div>

		{#if errorMessage}<p class="text-red-500">{errorMessage}</p>{/if}
		{#if successMessage}<p class="text-green-500">{successMessage}</p>{/if}

		{#if !showLoginForm}
			<button
				class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
				type="submit">Sign Up</button
			>
		{:else}
			<!-- Form will render to login form and button will change to log in -->
			<button
				class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
				type="button"
				on:click={() => (showLoginForm = false)}>Log In</button
			>
		{/if}
	</form>
</div>
