<script>
	// let username = '';
	// let email = '';
	// let password = '';
	// let confirmPassword = '';
	// let errorMessage = '';

	// export let form;

	// const signup = async () => {
	// 	try {
	// 		// Reset error message
	// 		errorMessage = '';

	// 		if (!username || !email || !password || !confirmPassword) {
	// 			errorMessage = 'Please fill in all fields and ensure passwords match.';
	// 			return;
	// 		}

	// 		if (password !== confirmPassword) {
	// 			errorMessage = "Passwords don't match";
	// 			return;
	// 		}

	// 		const response = await fetch('/signup', {
	// 			method: 'POST',
	// 			headers: {
	// 				'Content-Type': 'application/json'
	// 			},
	// 			body: JSON.stringify({
	// 				username: username,
	// 				email: email,
	// 				password: password
	// 			})
	// 		});
	// 		console.log(response);
	// 		// Check if the request was successful (status code 2xx)
	// 		if (response.ok) {
	// 			const result = await response.json();
	// 			// Handle the result as needed
	// 			console.log(result);
	// 		} else {
	// 			// Handle error response (status code other than 2xx)
	// 			console.error('Server error:', response.status);
	// 			errorMessage = 'An error occurred on the server.';
	// 		}
	// 	} catch (error) {
	// 		console.error('An error occurred:', error);
	// 		errorMessage = 'An error occurred while processing your request.';
	// 	}
	// };
</script>

<form method="POST" action="?/create">
	<input type="text" name="username" value="username" required />
	<input type="email" name="email" value="email" required />
	<input type="password" name="password" value="password" required />
	<input type="password" name="confirmPassword" value="confirmPassword" required />

	<!-- {#if errorMessage}
		<p class="error">{errorMessage}</p>
	{/if} -->

	<button type="submit">Sign Up</button>
</form>
