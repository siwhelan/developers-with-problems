<script>
	export let profileUserID;
	export let isFollowing;
	export let onClick;
</script>

<form method="POST" action="?/create">
	<input type="hidden" name="profileUserID" value={profileUserID} />
	{#if isFollowing}
		<button
			aria-label="unfollow"
			class="py-2 px-4 bg-primary text-white rounded-md mb-2 hover:bg-dark text-center"
			on:click={() => onClick(profileUserID, isFollowing)}
		>
			Unfollow
		</button>
	{:else}
		<button
			aria-label="follow"
			class="py-2 px-4 bg-primary text-white rounded-md mb-2 hover:bg-dark text-center"
			on:click={() => onClick(profileUserID, isFollowing)}
		>
			Follow
		</button>
	{/if}
</form>
