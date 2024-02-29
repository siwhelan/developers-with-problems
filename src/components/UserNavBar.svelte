<script>
    import Page from "../routes/signup/+page.svelte";

    let session = false;
</script>

<div class="bg-gray-800 text-white p-4">
    <nav class="flex justify-between">
        <ul class="flex space-x-4 items-center">
            <li>
                <a href="/home">
                    <img src="/dwp.png" class="hover:underline w-25 h-8">
                </a>
            </li>
        </ul>
        <ul class="flex space-x-4">
            <li>
                {#if session}<a href="/profile" class="hover:underline">Profile</a>{/if}
            </li>
            <li>
                {#if !session}<a href="/signup" class="hover:underline">Sign Up</a>{/if}      
            </li> 
            <li>
                {#if !session}<a href="/login" class="hover:underline">Login</a>
                {:else}<a href="/logout" class="hover:underline">Logout</a>{/if}
            </li>
        </ul>
    </nav>
</div>