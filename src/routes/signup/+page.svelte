<script>
    import { enhance } from '$app/forms';
    let errorMessage = null;
    let successMessage = null
    let showLoginForm = false; // Track whether to show the login form

    const clearErrorMessage = () => {
        errorMessage = null;
    }

</script>

<form method="POST" action="?/create" use:enhance={({ formElement, formData, action, cancel }) => {

    return async ({ result, update }) => {
        // Custom validation logic goes here
        const password = formData.get('password');
        const confirmPassword = formData.get('confirmPassword');
        console.log(result)

        if (password !== confirmPassword) {
            // Passwords don't match, prevent form submission
            errorMessage ="Passwords do not match";
            cancel();
            return;
        }

        if (result.data.success == true) {
            successMessage = "You have signed up successfully!"
            showLoginForm = true;
        }

        // If validation passes, you can perform additional actions
        // ...

        // Call the default behavior
        errorMessage = result.data.error
        update();
    };
}}>
	Username: <input type="text" name="username" value="username" required on:focus={clearErrorMessage} />
	Email: <input type="email" name="email" value="email" required on:focus={clearErrorMessage}/>
	Password: <input type="password" name="password" value="password" required on:focus={clearErrorMessage}/>
	Confirm Password: <input type="password" name="confirmPassword" value="confirmPassword" required on:focus={clearErrorMessage}/>

    {#if errorMessage}<p class="error">{errorMessage}</p>{/if}
    {#if successMessage}<p class="success">{successMessage}</p>{/if}

	{#if !showLoginForm}
        <button type="submit">Sign Up</button>
    {:else}
        <!-- Render a login button instead -->
        <button type="button" on:click={() => showLoginForm = false}>Log In</button>
    {/if}
</form>
