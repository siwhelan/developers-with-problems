<script>
	// let session = false;
	export let currentUserUsername;
</script>

<div class="bg-gray-800 text-white p-4">
	<nav class="flex justify-between">
		<ul class="flex space-x-4 items-center">
			<li>
				<a href="/">
					<div
						class="my-4 text-primary font-extrabold justify-end text-right text-4xl col-start-4 mr-24"
					>
						DWP
					</div>
					<!-- <div class="text-primary text-2xl font-extrabold">
						<p>DWP</p>
					</div> -->
				</a>
			</li>
		</ul>
		<ul class="flex space-x-4">
			<li>
				{#if currentUserUsername}<a
						href="/profile/{currentUserUsername}"
						class="text-primary hover:underline text-outline hover:text-outline-hover"
						>{currentUserUsername}</a
					>{/if}
			</li>
			<li>
				{#if !currentUserUsername}<a
						href="/signup"
						class="text-primary hover:underline text-outline hover:text-outline-hover">Sign Up</a
					>{/if}
			</li>
			<li>
				{#if !currentUserUsername}<a
						href="/login"
						class="text-primary hover:underline text-outline hover:text-outline-hover">Login</a
					>
				{:else}<a
						href="/logout"
						class="text-primary hover:underline text-outline hover:text-outline-hover">Logout</a
					>{/if}
			</li>
		</ul>
	</nav>
</div>

<style>
	.text-outline {
		text-shadow:
			-1px -1px 0 #1a202c,
			1px -1px 0 #1a202c,
			-1px 1px 0 #1a202c,
			1px 1px 0 #1a202c;
	}
	.hover\:text-outline-hover:hover {
		text-shadow:
			-1px -1px 0 #1a202c,
			1px -1px 0 #1a202c,
			-1px 1px 0 #1a202c,
			1px 1px 0 #1a202c;
	}
</style>
