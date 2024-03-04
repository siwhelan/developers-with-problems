<script>
	import Comment from '../../../../components/Comment.svelte';
	import NewComment from '../../../../components/NewComment.svelte';
	import Post from '../../../../components/Post.svelte';

	export let data;
	$: data;
</script>

<div class="pt-16 my-12">
	<Post
		postAuthor={data.user.username}
		postTitle={data.post.title}
		postContent={data.post.content}
		upvoteNumber={data.post.upvotes.length}
		postUpvotes={data.post.upvotes}
	/>
	<div class="flex justify-between items-center mb-6">
		<h2 class="text-lg mt-8 font-semibold lg:text-2xl text-text dark:text-white">Discussion</h2>
	</div>
	<NewComment />
	<Comment />
</div>
