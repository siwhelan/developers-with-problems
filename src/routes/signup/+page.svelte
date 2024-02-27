<script>
    import { dbConnect } from '$lib/utils/db';

    let username = '';
    let email = '';
    let password = '';
    let confirmPassword = '';
    let errorMessage = '';

    async function signup() {
        try {
            // Validate input
            if (!username || !email || !password || password !== confirmPassword) {
                errorMessage = 'Please fill in all fields and ensure passwords match.';
                return;
            }
            if (password !== confirmPassword) {
                errorMessage = "Passwords don't match";
                return;
            } 

            const db = await dbConnect();
            const user = db.collection('User');

            // Check if username already exists
            const existingUsername = await user.findOne({ username });
            if (existingUsername) {
                errorMessage = 'Username already exists';
                return;
            }

            // Check if email already exists
            const existingEmail = await user.findOne({ email });
            if (existingEmail) {
                errorMessage = 'Email address already exists';
                return;
            }

            // Insert user into the database
            await user.insertOne({ username, email, password });

            // Redirect or show success message
            console.log('User signed up successfully');
        } catch (error) {
            // Handle errors
            console.error('Error signing up user', error);
            errorMessage = 'An error occurred during signup.';
        }
    }
</script>

<form on:submit={signup}>
    <input type="username" bind:value={username} required />
    <input type="email" bind:value={email} required />
    <input type="password" bind:value={password} required />
    <input type="password" bind:value={confirmPassword} required />

    {#if errorMessage}
        <p class="error">{errorMessage}</p>
    {/if}

    <button type="submit">Sign Up</button>
</form>

