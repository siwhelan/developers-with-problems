<script>
	import '../app.css';
	import Navigation from '../components/navigation.svelte';

	import UserNavBar from '../components/UserNavBar.svelte';
	import TopStories from '../components/TopStories.svelte';
	import TopEvent from '../components/TopEvent.svelte';

	import Footer from '../components/Footer.svelte';
	import DailyChallenge from '../components/DailyChallenge.svelte';
	import resources from './resources/resources.json';

	export let data;

	$: ({ currentUserUsername, currentUserAvatar, challenge, topThreeStories, trendingEvent } = data);
</script>

<div>
	<UserNavBar {currentUserUsername} {currentUserAvatar} />
</div>
<!-- <p>{posts}</p> -->
<div class="flex flex-col min-h-screen text-text">
	<div class="flex bg-background">
		<Navigation {currentUserUsername} />
		<div class="flex flex-col flex-grow">
			<slot />
		</div>
		<div
			class="menu-container bg-background text-alttext text-center font-bold my-24 rounded-lg outline-black p-1 m-10 max-w-xs h-10"
			style="outline: 2px solid rgba(128, 128, 128, 0.2)"
		>
			<div>
				<DailyChallenge {challenge} />
			</div>
			<div>
				<TopStories {topThreeStories} />
			</div>
			<div>
				<TopEvent {trendingEvent} />
			</div>

			<div class="text-center rounded-lg shadow-md max-w-2xl relative border-t-2 border-gray-300">
				<div class="p-4 rounded-lg shadow-md max-w-2xl relative list-none">
					<h6 class="mb-4 mt-1 font-bold text-lg">Beginner Friendly Resources</h6>
					<hr class="mb-4" />
					<a
						href={resources[2].url}
						target="_blank"
						rel="noopener noreferrer"
						class="text-decoration-none"
					>
						<p class="mb-2 text-[#202937]">{resources[2].name}</p>
						<p class="mb-2 text-text hover:text-primary font-medium">{resources[2].description}</p>
					</a>
					<hr class="mb-4" />
					<a
						href={resources[8].url}
						target="_blank"
						rel="noopener noreferrer"
						class="text-decoration-none"
					>
						<p class="mb-2 text-[#202937]">{resources[8].name}</p>
						<p class="mb-2 text-text hover:text-primary font-medium">{resources[8].description}</p>
					</a>
				</div>
			</div>
		</div>
	</div>
</div>

<Footer />

<style>
	.menu-container {
		width: 250px; /* fixed border height and width - can be adjusted to suit contents */
		height: 1265px;
	}
</style>
