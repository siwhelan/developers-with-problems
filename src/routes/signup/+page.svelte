<script>
    let username = '';
    let email = '';
    let password = '';
    let confirmPassword = '';
    let errorMessage = '';

    const signup = async () => {
        try {
            // Reset error message
            errorMessage = '';

            if (!username || !email || !password || !confirmPassword) {
                errorMessage = 'Please fill in all fields and ensure passwords match.';
                return;
            }

            if (password !== confirmPassword) {
                errorMessage = "Passwords don't match";
                return;
            }
            
            const response = await fetch('/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: username,
                    email: email,
                    password: password
                }),
            });
            console.log(response)
            // Check if the request was successful (status code 2xx)
            if (response.ok) {
                const result = await response.json();
                // Handle the result as needed
                console.log(result);
            } else {
                // Handle error response (status code other than 2xx)
                console.error('Server error:', response.status);
                errorMessage = 'An error occurred on the server.';
            }
        } catch (error) {
            console.error('An error occurred:', error);
            errorMessage = 'An error occurred while processing your request.';
        }
    }
</script>

<form method='POST' on:submit={signup}>
    <input type="text" bind:value={username} required />
    <input type="email" bind:value={email} required />
    <input type="password" bind:value={password} required />
    <input type="password" bind:value={confirmPassword} required />

    {#if errorMessage}
        <p class="error">{errorMessage}</p>
    {/if}

    <button type="submit">Sign Up</button>
</form>

