<div class="flex flex-col items-center justify-start h-screen pt-20">
	<p class="text-text">You have signed up successfully!</p>
	<br />
	<div class="flex flex-row space-x-4">
		<button
			class="bg-primary hover:bg-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
			on:click={() => (window.location.href = '/login')}
			aria-label="Log in"
		>
			Log In
		</button>

		<button
			class="bg-primary hover:bg-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
			on:click={() => (window.location.href = '/signup')}
			aria-label="Sign up"
		>
			Back to Sign Up
		</button>
	</div>
</div>
