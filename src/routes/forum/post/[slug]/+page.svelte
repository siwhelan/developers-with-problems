<script>
	import Comment from '../../../../components/Comment.svelte';
	import NewComment from '../../../../components/NewComment.svelte';
	import Post from '../../../../components/Post.svelte';

	export let data;
	$: ({ post } = data);
</script>

<div class="pt-16">
	<Post
		postAuthor={data.user.username}
		postTitle={data.post.title}
		postContent={data.post.content}
	/>
	<div class="flex justify-between items-center mb-6">
		<h2 class="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">Discussion</h2>
	</div>
	<NewComment />
	<Comment />
</div>
