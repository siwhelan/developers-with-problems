<script>
	export let profileUserID;
	export let isFollowing;
	export let onClick;
</script>

<form data-testid="socials" method="POST" action="?/create">
	Facebook: <input type="hidden" name="profileUserID" value={profileUserID} />
	X: <input type="hidden" name="profileUserID" value={profileUserID} />
	LinkedIn: <input type="hidden" name="profileUserID" value={profileUserID} />

	<button
		class="block py-2 px-4 bg-green-800 text-white rounded-md mb-2 max-w-xs hover:bg-red-700 text-center"
		on:click={() => onClick(profileUserID, isFollowing)}
	>
		Add Socials
	</button>
</form>
