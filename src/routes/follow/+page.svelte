<script>
	export let userID;
	const handleClick = (userID) => {
		console.log('trying to follow user');
		followUser(followingUserID);
	};
</script>

<!-- Button component -->
<button on:click={handleClick}> Follow </button>
