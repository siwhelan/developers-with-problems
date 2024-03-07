<script>
	export let challenge;
	let chosenLang;
	let currentItems = 110;
</script>

<!-- <div class="pt-3 pb-4 px-2 text-center rounded-lg shadow-md max-w-2xl relative border-t-1 border-gray-300 flex flex-col items-center"> -->
<div
	class="p-4 text-center rounded-lg shadow-md max-w-2xl relative border-t-1 border-gray-300 items-center"
>
	<h6 class="mb-1 font-bold text-lg">Codewars Daily Challenge</h6>
	<img
		src="/codewars.svg"
		alt="codewars logo"
		class="mx-auto object-scale-down h-6 bg-orange-500 rounded-md mb-4"
	/>
	<hr class="mb-4" />
	<p class="text-xl text-[#202937] text-text font-bold">{challenge.name}</p>
	<p class="text-text text-[#202937] font-bold pb-2">{challenge.rank.name}</p>

	<div class="list-element">
		<p class="text-xs text-text pb-2">
			{challenge.description.slice(
				0,
				currentItems
			)}{#if currentItems < challenge.description.length}...{/if}
		</p>
	</div>
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
	<div class="mb-2">
		<p class="text-[#202937] pb-2 text-small">Select a Language:</p>
		<select
			id="langSelect"
			aria-label="Select a programming language"
			bind:value={chosenLang}
			class="text-black text-center border border-gray-400 rounded p-0.5"
		>
			{#each challenge.languages as language}
				<option value={language}>{language}</option>
			{/each}
		</select>
	</div>

	<a href="{challenge.url}/train/{chosenLang}" target="_blank" rel="noopener noreferrer"
		class="btn btn-primary text-[#202937] py-1 px-4 rounded-md mt-2 hover:text-primary"

		>Click here to Train!</a
	>
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
