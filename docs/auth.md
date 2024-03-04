## Signup and Signin Flow with Lucia Auth

[Lucia Auth Docs](https://lucia-auth.com/)

### User Signup

1. **User submits registration form:** The user fills out the form with username, email, and password.

2. **Form submission to backend:** The form is submitted using a `POST` request to the `/create` endpoint in `src/signup/`.

3. **Data validation:** On the backend in the `create` function, the submitted data (username and email) is retrieved using `request.formData()`.

4. **Existing user check:** The code uses `User.findOne` to check if a user with the provided username or email already exists in the database.

5. **Error handling for existing user:** If a user with the same username or email is found, an error message is logged and the function returns an object indicating the failure with an appropriate error message.

6. **New user creation:** If no existing user is found, a new user object is created with the submitted details.

<!-- 7. **Password hashing:** Libraries like `bcryptjs` are commonly used for this purpose. The hashed password should be stored in a dedicated field like `hashed_password` in your user model. -->

7. **User creation in MongoDB:** The `User.create` function is used to create a new user document in the database. GenerateID `generateId` from Lucia to creates a unique identifier for the user. This also creates a `sessions` table that contains an id (cookie) and the corresponding user id.

8. **Success response:** Upon successful user creation, the function returns an object indicating success.

9. **Frontend update:** The SvelteKit application handles the response and can update the UI accordingly with a success message.

### User Signin

1. **User submits login form:** The user enters their email and password in the login form.

2. **Form submission to backend:** The form is submitted using a `POST` request to the `/authorisation` endpoint on `src/login`.

3. **Data retrieval:** Similar to signup, the `actions.authorisation` function retrieves the submitted email and password using `request.formData()`.

4. **Existing user check:** The code uses `User.findOne` to check if a user with the provided email exists in the database.

5. **User not found:** If no user is found with the provided email, an error message is logged, and the function returns a response with a 401 status code and an appropriate error message indicating "User not found."

6. **Password verification:** If a user is found, their hashed password is retrieved from the database.

7. **Incorrect password:** The submitted password is compared against the user's password. If the passwords don't match, an error message is logged, and the function returns a response with a 401 status code and an "Incorrect password" message.

8. **Session creation:** Upon successful password verification, Lucia's `createSession` function is used to create a new session for the authenticated user. The user's ID (converted to a string) is passed as an argument.

9. **Session cookie creation:** A session cookie is created using `createSessionCookie` from Lucia, containing the session ID.

10. **Setting the cookie:** The cookie is set on the user's browser using `cookies.set`. The code snippet demonstrates setting various cookie properties like `path`, `httpOnly`, `sameSite`, `secure`, and `maxAge` for secure and proper cookie handling.

11. **Redirection:** After successful login, the user is redirected to the desired location (e.g., `/`).

### Using the cookie

Retrieval of userID/session.

1. **Hooks.server.js:** Uses handle to get the cookie from the browser with `event.cookies.get`. (The `handle` function is an asynchronous function that gets executed on every server-side request in the SvelteKit application.)
2. **Validating:** The session is validated using `lucia.validateSession(sessionId)`. If a valid session exists, the session cookie is updated with the latest session ID. If no valid session is found, a blank session cookie is set.
3. **Populating `event.locals`:** The validated user and session data (if any) are stored in event.locals.user and event.locals.session respectively. These are accessible within any `+server.svelte.js` in the application.
