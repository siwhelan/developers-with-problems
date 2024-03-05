<script>
	import Comment from '../../../../components/Comment.svelte';
	import NewComment from '../../../../components/NewComment.svelte';
	import Post from '../../../../components/Post.svelte';

	export let data;
	console.log('post is back', data.post);
	$: data;
</script>

<div class="pt-16 my-12">
	<Post
		postAuthor={data.user.username}
		postId={data.post._id}
		postTitle={data.post.title}
		postContent={data.post.content}
		upvoteNumber={data.post.upvotes.length}
		postUpvotes={data.post.upvotes}
		loggedInUser={data.loggedInUser}
		downvoteNumber={data.post.downvotes.length}
		postDownvotes={data.post.downvotes}
	/>
	<div class="flex justify-between items-center mb-6">
		<h2 class="text-lg mt-8 font-semibold lg:text-2xl text-text dark:text-white">Discussion</h2>
	</div>
	<NewComment />
	{#each data.commentsWithAuthors as comment}
		<Comment
			commentContent={comment.content}
			commentTime={comment.timestamp}
			commentUser={comment.author.username}
		/>
	{/each}
</div>
