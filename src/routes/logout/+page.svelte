<div class="pt-3 mr-12 text-center">
	<h1 class="my-24 text-2xl text-text font-bold mb-4">Are you sure you want to log out of DWP?</h1>
	<div class="flex justify-center space-x-4">
		<form method="POST" action="?/cancel">
			<button
				class="bg-primary hover:bg-dark text-white rounded font-bold py-2 px-4"
				aria-label="cancel log out">Cancel</button
			>
		</form>
		<form method="POST" action="?/continue">
			<input type="hidden" name="username" />
			<button
				class="bg-primary hover:bg-dark text-white rounded font-bold py-2 px-4"
				aria-label="continue to log out">Logout</button
			>
		</form>
	</div>
</div>
<!-- <img
	alt="leap year william"
	src="https://www.tvguide.com/a/img/hub/2020/02/27/37070159-2ce9-4d8a-a16d-bf55625567a7/gettyimages-140251691-1.jpg"
/> -->
