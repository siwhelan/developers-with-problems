<div class="pt-20 pr-2 text-center">
	<h1 class="text-2xl font-bold mb-4 ml-2 mt-2">Log In To DWP</h1>
	<form
		class="max-w-md mx-auto p-4 bg-white shadow-md ml-15 mt-10"
		method="POST"
		action="?/authorisation"
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
		<button class="bg-primary hover:bg-dark text-white rounded font-bold py-2 px-4" type="submit"
			>Login</button
		>
	</form>
</div>
