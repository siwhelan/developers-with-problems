<script>
	export let profileUserID;
	export let isFollowing;
	export let onClick;
</script>

<form method="POST" action="?/create">
	<input type="hidden" name="profileUserID" value={profileUserID} />
	{#if isFollowing}
		<button
			class="block py-2 px-4 bg-green-800 text-white rounded-md mb-2 max-w-xs hover:bg-red-700 text-center"
			on:click={() => onClick(profileUserID, isFollowing)}
		>
			Unfollow
		</button>
	{:else}
		<button
			class="block py-2 px-4 bg-green-800 text-white rounded-md mb-2 max-w-xs hover:bg-red-700 text-center"
			on:click={() => onClick(profileUserID, isFollowing)}
		>
			Follow
		</button>
	{/if}
</form>
