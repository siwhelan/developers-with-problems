<script>
	// let session = false;
	export let currentUserUsername;
	export let currentUserAvatar;
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
		<ul class="flex space-x-2">
			<div class="options">
				<li>
					{#if currentUserUsername}<a
							href="/profile/{currentUserUsername}"
							class="text-primary hover:underline text-outline hover:text-outline-hover pr-3"
							>{currentUserUsername}</a
						>{/if}
				</li>
				<li>
					{#if currentUserAvatar}<a
							href="/profile/{currentUserUsername}"
							class="text-primary hover:underline text-outline hover:text-outline-hover"
							><img src={currentUserAvatar} alt="User Avatar" class="w-8 h-8 rounded-full" /></a
						>{/if}
				</li>
				<li>
					{#if !currentUserAvatar}<a
							href="/signup"
							class="text-primary hover:underline text-outline hover:text-outline-hover">Sign Up</a
						>{/if}
				</li>
				<li>
					{#if !currentUserAvatar}<a
							href="/login"
							class="text-primary hover:underline text-outline hover:text-outline-hover pl-5"
							>Login</a
						>
					{:else}<a
							href="/logout"
							class="text-primary hover:underline text-outline hover:text-outline-hover pl-5 pr-3"
							>Logout</a
						>{/if}
				</li>
			</div>
		</ul>
	</nav>
</div>

<style>
	.options {
		display: flex;
		align-items: center;
	}
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
