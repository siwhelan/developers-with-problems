<div class="pt-3 text-center">
	<p class="text-green-500">You have signed up successfully!</p>
	<br />
	<button
		class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
		on:click={() => (window.location.href = '/login')}
	>
		Log In
	</button>

	<button
		class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
		on:click={() => (window.location.href = '/signup')}
	>
		Back to Sign Up
	</button>
</div>
