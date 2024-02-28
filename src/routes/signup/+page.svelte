<script>
    import { enhance } from '$app/forms';
    let errorMessage = null;

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

        // If validation passes, you can perform additional actions
        // ...

        // Call the default behavior
        update();
    };
}}>
	Username: <input type="text" name="username" value="username" required />
	Email: <input type="email" name="email" value="email" required />
	Password: <input type="password" name="password" value="password" required />
	Confirm Password: <input type="password" name="confirmPassword" value="confirmPassword" required />

    {#if errorMessage}<p class="error">{errorMessage}</p>{/if}

	<button type="submit">Sign Up</button>
</form>
