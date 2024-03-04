<script>
	import News from '../components/News.svelte';
	import PostLink from '../components/PostLink.svelte';

	export let data;
	$: ({ posts } = data);

	let feedChoice = 'forum';
	// options are forum, dev news, events. Toggling changes what appears in the feed. Default is forum posts
</script>

<div class="px-5 pt-10 flex flex-col">
	<!-- placeholder icon to test out how a logo with the name looks -->
	<div class="flex pb-10 h-24 leading-5">
		<!-- <svg
			height="75"
			width="75"
			version="1.1"
			id="Layer_1"
			xmlns="http://www.w3.org/2000/svg"
			xmlns:xlink="http://www.w3.org/1999/xlink"
			viewBox="0 0 421 421"
			xml:space="preserve"
			fill="#000000"
			><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g
				id="SVGRepo_tracerCarrier"
				stroke-linecap="round"
				stroke-linejoin="round"
			></g><g id="SVGRepo_iconCarrier">
				<g>
					<polygon
						style="fill:#EB7830;"
						points="189.75,114.147 219.767,84.13 249.805,114.147 219.767,144.185 "
					></polygon>
					<rect
						x="274.698"
						y="169.074"
						transform="matrix(0.7071 -0.7071 0.7071 0.7071 -47.8922 264.9969)"
						style="fill:#EB7830;"
						width="42.472"
						height="42.472"
					></rect>
					<rect
						x="350.859"
						y="245.234"
						transform="matrix(0.7071 -0.7071 0.7071 0.7071 -79.4386 341.1577)"
						style="fill:#EB7830;"
						width="42.472"
						height="42.472"
					></rect>
					<polygon
						style="fill:#3E81C8;"
						points="170.241,311.397 200.258,281.38 230.295,311.397 200.258,341.435 "
					></polygon>
					<polygon
						style="fill:#3E81C8;"
						points="94.08,235.252 124.098,205.215 154.135,235.252 124.098,265.27 "
					></polygon>
					<polygon
						style="fill:#3E81C8;"
						points="17.92,159.092 47.937,129.056 77.974,159.092 47.937,189.11 "
					></polygon>
					<g>
						<path
							style="fill:#231F20;"
							d="M404.95,260.81l-27.2-27.2c-1.5-1.5-3.54-2.34-5.66-2.34s-4.16,0.84-5.66,2.34l-21.54,21.55 l-37.65-37.65l21.55-21.54c3.12-3.13,3.12-8.19,0-11.32l-27.2-27.2c-3.13-3.12-8.19-3.12-11.32,0L268.73,179l-37.65-37.65 l21.55-21.54c3.12-3.13,3.12-8.19,0-11.32l-27.2-27.2c-1.5-1.5-3.54-2.34-5.66-2.34s-4.16,0.84-5.66,2.34l-27.19,27.2 c-3.13,3.13-3.13,8.19,0,11.32l27.19,27.2l48.96,48.96l5.21,5.2c-18.29-3.88-37.49-2.54-55.58,4.24l-7.72,2.88 c-25.32,9.48-52.8,6.4-75.39-8.45c-3.83-2.52-7.39-5.3-10.69-8.31l-5.46-5.46c-12.89-14.14-20.53-32.31-21.51-52.1l-4.48-90.58 c-0.22-4.41-3.97-7.82-8.39-7.59c-4.41,0.21-7.81,3.97-7.59,8.38l4.48,90.58c0.27,5.4,0.96,10.7,2.04,15.86L53.6,126.23 c-1.56-1.56-3.61-2.34-5.66-2.34c-2.04,0-4.09,0.78-5.65,2.34l-27.2,27.2c-1.5,1.5-2.35,3.53-2.35,5.66 c0,2.12,0.85,4.15,2.35,5.65l27.2,27.2c1.56,1.56,3.61,2.35,5.65,2.35c2.05,0,4.1-0.79,5.66-2.35l21.54-21.54l37.65,37.65 l-21.54,21.54c-3.13,3.12-3.13,8.19,0,11.31l27.2,27.2c1.5,1.5,3.53,2.35,5.65,2.35s4.16-0.85,5.66-2.35l21.54-21.54l37.65,37.65 l-21.54,21.54c-3.13,3.12-3.13,8.19,0,11.31l27.2,27.2c1.56,1.56,3.61,2.34,5.65,2.34c2.05,0,4.1-0.78,5.66-2.34l27.2-27.2 c3.12-3.12,3.12-8.19,0-11.31l-27.2-27.2l-48.96-48.96l-2.05-2.05c18.27,3.91,37.44,2.56,55.68-4.26l7.71-2.89 c24.19-9.05,50.73-6.56,72.81,6.82c4.35,2.64,8.39,5.63,12.12,8.91l7.42,7.43c10.99,12.47,18.08,28.05,20.18,45.06l11.35,92.15 c0.5,4.06,3.95,7.03,7.93,7.03c0.33,0,0.66-0.02,0.99-0.06c4.39-0.54,7.5-4.54,6.96-8.92l-11.35-92.16 c-0.35-2.85-0.82-5.67-1.41-8.46l21.13,21.14c1.57,1.56,3.61,2.34,5.66,2.34c2.05,0,4.1-0.78,5.66-2.34l27.2-27.2 C408.07,269,408.07,263.94,404.95,260.81z M203.89,114.15l15.88-15.88l15.89,15.88l-15.89,15.89L203.89,114.15z M47.94,174.97 l-15.88-15.88l15.88-15.89l15.89,15.89L47.94,174.97z M124.1,251.13l-15.88-15.88l15.88-15.89l15.89,15.89L124.1,251.13z M216.15,311.4l-15.89,15.89l-15.88-15.89l15.88-15.88L216.15,311.4z M295.93,206.2l-15.89-15.89l15.89-15.89l15.89,15.89 L295.93,206.2z M372.09,282.36l-15.89-15.89l15.89-15.89l15.89,15.89L372.09,282.36z"
						></path>
						<path
							style="fill:#231F20;"
							d="M400.5,0h-380c-4.418,0-8,3.582-8,8s3.582,8,8,8h372v170.12c0,4.418,3.582,8,8,8s8-3.582,8-8V8 C408.5,3.582,404.918,0,400.5,0z"
						></path>
						<path
							style="fill:#231F20;"
							d="M400.5,405h-372V254.12c0-4.418-3.582-8-8-8s-8,3.582-8,8V413c0,4.418,3.582,8,8,8h380 c4.418,0,8-3.582,8-8S404.918,405,400.5,405z"
						></path>
					</g>
				</g>
			</g></svg -->
		<h1 class="mb-4 text-3xl font-extrabold text-dark dark:text-white md:text-5xl lg:text-6xl">
			<span class="text-transparent bg-clip-text bg-gradient-to-r from-dark to-primary">
				<span></span>Developers with</span
			> Problems
		</h1>
	</div>
	<div class="max-w-48 ml-auto mr-0">
		<a
			href="/forum/newPost"
			type="button"
			class="text-white bg-primary hover:bg-dark focus:ring-2 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-primary focus:outline-none dark:focus:ring-blue-800"
			>New Forum Post</a
		>
	</div>
	<!-- </a> -->
	<div>
		<h2 class="text-3xl font-bold pb-2">Most Recent Activity</h2>
	</div>
	<div class="flex-row py-4">
		<button
			class:active={feedChoice === 'forum'}
			on:click={() => (feedChoice = 'forum')}
			type="button"
			class="text-white bg-primary hover:bg-dark focus:ring-2 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-primary focus:outline-none dark:focus:ring-blue-800"
			>Forum Posts</button
		>

		<button
			class:active={feedChoice === 'devNews'}
			on:click={() => (feedChoice = 'devNews')}
			type="button"
			class="text-white bg-primary hover:bg-dark focus:ring-2 focus:ring-accent font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-dark dark:hover:bg-primary focus:outline-none dark:focus:ring-accent"
			>Dev News</button
		>
		<button
			type="button"
			class="text-white bg-primary hover:bg-dark focus:ring-2 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-primary focus:outline-none dark:focus:ring-blue-800"
			>Events</button
		>
		<button
			type="button"
			class="text-white bg-primary hover:bg-dark focus:ring-2 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-primary focus:outline-none dark:focus:ring-blue-800"
			>Recent Jobs</button
		>
		<!-- <button
			type="button"
			class="text-white bg-purple-700 hover:bg-dark focus:ring-2 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-primary focus:outline-none dark:focus:ring-blue-800"
			>Purple</button
		> -->
	</div>
	{#if feedChoice == 'forum'}
		{#each posts as post}
			<div class="flex flex-col">
				<PostLink
					postSlug={post._id}
					postTitle={post.title}
					postContent={post.content}
					postUpvotes={post.upvotes}
					upvoteNumber={post.upvotes.length}
					loggedInUser={data.loggedInUser}
				/>
			</div>
		{/each}
	{/if}
	{#if feedChoice == 'devNews'}
		<div class="py-5">
			<News />
		</div>
	{/if}
</div>

<style>
	.active {
		background-color: #202937;
	}
</style>
