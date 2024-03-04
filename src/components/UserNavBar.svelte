<script>
	// let session = false;
	export let currentUserUsername;
</script>


<div class="bg-gray-800 text-white p-4">
	<nav class="flex justify-between">
		<ul class="flex space-x-4 items-center">
			<li>
				<a href="/">
					<img src="/dwp.png" alt="logo" class="hover:underline w-25 h-8" />
					<!-- <div class="text-primary text-2xl font-extrabold">
						<p>DWP</p>
					</div> -->
				</a>
			</li>
		</ul>
		<ul class="flex space-x-4">
			<li>
				{#if currentUserUsername}<a href="/profile/{currentUserUsername}" class="text-primary hover:underline">{currentUserUsername}</a>{/if}
			</li>
			<li>
				{#if !currentUserUsername}<a href="/signup" class="text-primary hover:underline">Sign Up</a>{/if}
			</li>
			<li>
				{#if !currentUserUsername}<a href="/login" class="text-primary hover:underline">Login</a>
				{:else}<a href="/logout" class="text-primary hover:underline">Logout</a>{/if}
			</li>
		</ul>
	</nav>
</div>
