## Page Routes

- **+layout.svelte**

  - **Description:** This defines the layout of every page in the application. Components that are used on every page are passed in. `<slot/>` represents the page content.
  - **File:** `src/routes/+layout.svelte`
  - **Current use:** Components passed in: `<UserNavBar />`, `<Navigation {currentUserUsername} />`, `<Footer />`
  - **Server**
    - Load - automatically returns the username of the user currently logged in.

- **/**

  - **Description:** The home page of the application.
  - **File:** `src/routes/+page.svelte`
  - **Server**
    - Load - automatically returns 10 most recent posts and user ID of logged in user on page load
    - `?/upvote` - passed action (boolean) and postSlug (postID). Either adds or removes upvote based on bool.

- **/careers**

  - **Description:** Provides information about current open job adverts
  - **File:** `src/routes/careers/+page.svelte`
  - **Server**
    - Load - automatically returns all jobs from DB

- **/events**

  - **Description:** Provides information about upcoming events
  - **File:** `src/routes/events/+page.svelte`
  - **Server**
    - Load - automatically returns all jobs from DB

- **/jobs**

  - **Description:** Not functional - TODO
  - **File:** `src/routes/jobs/+page.svelte`
  - **Server**
    - TODO

- **/login**

  - **Description:** Allows user to log in
  - **File:** `src/routes/login/+page.svelte`
  - **Server**
    - `?/authorisation` - auth using Lucia

- **/logout**

  - **Description:** Allows user to log out
  - **File:** `src/routes/logout/+page.svelte`
  - **Server**
    - `?/cancel` - cancels logout
    - `?/continue` - logs out and redirects to `/`

- **/signup**

  - **Description:** Allows user to sign up
  - **File:** `src/routes/signup/+page.svelte`
  - **Server**
    - `?/create` - creates a user using lucia

- **/profile/[slug]**

  - **Description:** Shows details of a user
  - **File:** `src/routes/profile/[slug]/+page.svelte`
  - **Dynamic Parameter:**
  - **slug:** The unique identifier of the user. -->
  - **Server**
    - Load - automatically returns profileUser, myProfile, isFollowing, posts
    - `?/create` - updates following

- **/news**

  - **Description:** Shows top 10 posts on hackernews and reddit/r/technology
  - **File:** `src/routes/news/+page.svelte`

- **/forum**

  - **Description:** Shows all posts in DB
  - **File:** `src/routes/forum/+page.svelte`
  - **Server**
    - Load - automatically returns all posts from DB
    - `?/upvote` - passed action (boolean) and postSlug (postID). Either adds or removes upvote based on bool.

- **/forum/newPost**

  - **Description:** Add a new post to DV
  - **File:** `src/routes/forum/newPost/+page.svelte`
  - **Server**
    - `?/create` - creates a new post in the DB

- **/forum/post/[slug]**
  - **Description:** Shows the content of a specific forum post.
  - **File:** `src/routes/forum/post/[slug]/+page.svelte`
  - **Dynamic Parameter:**
    - **slug:** The unique identifier of the blog post. -->
  - **Server**
    - Load - automatically returns post, details of post creator, and userID of logged in user
    - `?/upvote` - passed action (boolean) and postSlug (postID). Either adds or removes upvote based on bool.
