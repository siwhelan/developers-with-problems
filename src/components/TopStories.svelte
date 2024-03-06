<script>
    export let topStory;
    export let topRedditPost
</script>

<h6>Top Stories of the day</h6>
<div>
<ul class="list-inside mt-4">
    <li class="mt-2">
        <a
            href={topStory.url}
            target="_blank"
            rel="noopener noreferrer"
            class="text-text hover:text-primary">🔗 {topStory.title}</a
        >
    </li>
</ul>
<ul class="list-inside mt-4">
<li class="mt-2">
    <a
        href={topRedditPost.url}
        target="_blank"
        rel="noopener noreferrer"
        class="text-text hover:text-primary">🔗 {topRedditPost.title}</a
    >
</li>
</ul>
</div>
