<script>
	// let session = false;
	export let currentUserUsername;
	export let currentUserAvatar;
	console.log('UserNavBar.svelte currentUserAvatar', currentUserAvatar);
	console.log('UserNavBar.svelte currentUserUsername', currentUserUsername);
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
				{#if currentUserAvatar}<a
						href="/profile/{currentUserUsername}"
						class="text-primary hover:underline"
						><img src={currentUserAvatar} alt="User Avatar" class="w-8 h-8 rounded-full" /></a
					>{/if}
			</li>
			<li>
				{#if !currentUserAvatar}<a href="/signup" class="text-primary hover:underline">Sign Up</a
					>{/if}
			</li>
			<li>
				{#if !currentUserAvatar}<a href="/login" class="text-primary hover:underline">Login</a>
				{:else}<a href="/logout" class="text-primary hover:underline">Logout</a>{/if}
			</li>
		</ul>
	</nav>
</div>
