<script>
	export let challenge;
	let chosenLang;
	let currentItems = 100;
</script>

<div
	class="w-full bg-[#1c212c] max-w-xs text-white max-h-160 flex flex-col items-center mt-2 pt-4 pl-4 pr-4 rounded-md"
>
	<h6 class="mb-1">Codewars Daily Challenge</h6>
	<img
		src="/codewars.svg"
		alt="codewars logo"
		class="object-scale-down h-6 bg-orange-500 rounded-md mb-1"
	/>
	<p class="text-xl">{challenge.name}</p>
	<!-- rank.name needs to be smaller -->
	<p>{challenge.rank.name}</p>

	<div class="list-element">
		<p class="text-xs">
			{challenge.description.slice(
				0,
				currentItems
			)}{#if currentItems < challenge.description.length}...{/if}
		</p>
	</div>

	{#if currentItems < challenge.description.length}
		<button
			on:click={() => (currentItems = challenge.description.length)}
			id="loadmore"
			type="button"
			class="btn btn-secondary text-xs font-extrabold"
		>
			Show more
		</button>
	{/if}
	{#if currentItems == challenge.description.length}
		<button
			on:click={() => (currentItems = 100)}
			id="loadless"
			type="button"
			class="btn btn-secondary text-s font-bold m-10"
		>
			Show less
		</button>
	{/if}
	<div>
		<p>Select a Language:</p>
		<select
			id="langSelect"
			aria-label="Select a programming language"
			bind:value={chosenLang}
			class="text-black text-center"
		>
			{#each challenge.languages as language}
				<option value={language}>{language}</option>
			{/each}
		</select>
	</div>
	<a href="{challenge.url}/train/{chosenLang}">Click here to Train!</a>
</div>

<!-- {
    "id": "57eb8fcdf670e99d9b000272",
    "name": "Highest Scoring Word",
    "slug": "highest-scoring-word",
    "category": "reference",
    "publishedAt": "2016-09-28T10:35:24.874Z",
    "approvedAt": "2017-06-18T17:52:59.608Z",
    "languages": [
        "javascript",
        "haskell",
        "ruby",
        "python",
        "crystal",
        "csharp",
        "java",
        "r",
        "cpp",
        "c",
        "elixir",
        "powershell",
        "php",
        "kotlin",
        "scala",
        "nasm",
        "rust",
        "go",
        "coffeescript",
        "julia",
        "typescript",
        "cobol",
        "d",
        "factor"
    ],
    "url": "https://www.codewars.com/kata/57eb8fcdf670e99d9b000272",
    "rank": {
        "id": -6,
        "name": "6 kyu",
        "color": "yellow"
    },
    "createdAt": "2016-09-28T09:39:25.122Z",
    "createdBy": {
        "username": "PG1",
        "url": "https://www.codewars.com/users/PG1"
    },
    "approvedBy": {
        "username": "smile67",
        "url": "https://www.codewars.com/users/smile67"
    },
    "description": "Given a string of words, you need to find the highest scoring word.\n\nEach letter of a word scores points according to its position in the alphabet: `a = 1, b = 2, c = 3` etc.\n\nFor example, the score of `abad` is `8` (1 + 2 + 1 + 4).\n\nYou need to return the highest scoring word as a string.\n\nIf two words score the same, return the word that appears earliest in the original string.\n\nAll letters will be lowercase and all inputs will be valid.",
    "totalAttempts": 321541,
    "totalCompleted": 89623,
    "totalStars": 2605,
    "voteScore": 6647,
    "tags": [
        "Fundamentals",
        "Strings",
        "Arrays"
    ],
    "contributorsWanted": true,
    "unresolved": {
        "issues": 2,
        "suggestions": 1
    }
} -->

<style>
	.btn.btn-secondary {
		transition: background-color 0.3s ease;
	}

	.btn.btn-secondary:hover {
		background-color: #4d4e4e;
	}
</style>
