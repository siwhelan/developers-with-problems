<script>
  let sectionStyles = "block py-2 px-4 bg-gray-800 text-white rounded-md mb-2 max-w-xs hover:bg-gray-700 text-center"
  let linkStyles = "block py-2 px-4 bg-green-800 text-white rounded-md mb-2 max-w-xs hover:bg-red-700 text-center"
	export let data;
	$: ({ user } = data);
</script>

<div class="menu-container bg-blue-900 rounded-lg p-5 m-10 max-w-xs">
  <h1 class={sectionStyles}>User Profile</h1>
  <p class={sectionStyles}>{user.avatar || 'avatar: nothing'}</p>
  <p class={sectionStyles}>Name: {user.username}</p>
  <p class={sectionStyles}>Email: {user.email}</p>
  <p class={sectionStyles}>Bio: {user.bio || 'nothing'}</p>
  <p class={sectionStyles}>Socials: {user.social || 'nothing'}</p>
  <p class={sectionStyles}>Followers: {user.followers}</p>
  <p class={sectionStyles}>Following: {user.following}</p>
  <a
  class={linkStyles}
		href="/profile/changePassword">Change Password</a>
  </div>