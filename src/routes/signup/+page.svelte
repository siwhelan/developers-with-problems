<script>
    import { enhance } from '$app/forms';
    let errorMessage = null;

</script>

<form method="POST" action="?/create" use:enhance={({ formElement, formData, action, cancel }) => {

    return async ({ result, update }) => {
        // Custom validation logic goes here
        const password = formData.get('password');
        const confirmPassword = formData.get('confirmPassword');

        if (password !== confirmPassword) {
            alert("Passwords do not match");
            cancel();
            return;
        }

        const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/;

        if (!passwordRegex.test(password)) {
            alert("Password must contain at least 8 characters, a capital letter, a number, and a symbol");
            cancel();
            return;
        }
        update();


        // Call the default behavior

    };
}}>
    Us
	Username: <input type="text" name="username" value="username" required />
	Email: <input type="email" name="email" value="email" required />
	Password: <input type="password" name="password" value="password" required />
	Confirm Password: <input type="password" name="confirmPassword" value="confirmPassword" required />

	<button type="submit">Sign Up</button>
</form>
