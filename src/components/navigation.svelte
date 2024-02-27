<script>
    // optional depending on whether we decide to include links or just use state to handle page changes
export let currentPage;

function changeFocus(pageName) {
  currentPage(pageName)
}
  </script>
  
  <style>
    /* Add CSS styles here */
    .menu-container {
      width: 200px;
      display: flex;
      flex-direction: column;
      gap: 5px;
      background-color: black;
      padding: 20px;
      margin: 10px;
      border-radius: 25px;
    }
    .menu-button {
      padding: 10px;
      background-color: #333;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }
    .menu-button:hover {
      background-color: #555;
    }
  </style>
  
  <!-- <div class="menu-container">
    <button class="menu-button" on:click={() => changeFocus('Home')}>Home</button>
    <button class="menu-button" on:click={() => changeFocus('My Profile')}>My Profile</button>
    <button class="menu-button" on:click={() => changeFocus('Following')}>Following</button>
    <button class="menu-button" on:click={() => changeFocus('Forum')}>Forum</button>
    <button class="menu-button" on:click={() => changeFocus('Events')}>Events</button>
    <button class="menu-button" on:click={() => changeFocus('Jobs')}>Jobs</button>
    <button class="menu-button" on:click={() => changeFocus('Learning Resources')}>Learning Resources</button>
    <button class="menu-button" on:click={() => changeFocus('News')}>News</button>
    <button class="menu-button" on:click={() => changeFocus('Settings')}>Settings</button>
    <button class="menu-button" on:click={() => changeFocus('Logout')}>Logout</button>
  </div> -->

  <div class="menu-container">
    <a href="/home" class="menu-button">Home</a>
    <a href="/profile" class="menu-button">My Profile</a>
    <a href="/following" class="menu-button">Following</a>
    <a href="/forum" class="menu-button">Forum</a>
    <a href="/events" class="menu-button">Events</a>
    <a href="/jobs" class="menu-button">Jobs</a>
    <a href="/learning-resources" class="menu-button">Learning Resources</a>
    <a href="/news" class="menu-button">News</a>
    <a href="/settings" class="menu-button">Settings</a>
    <a href="/logout" class="menu-button">Logout</a>
  </div>