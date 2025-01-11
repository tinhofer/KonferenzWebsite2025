<script>
	import SubPageLayout from '$lib/SubPageLayout.svelte';
	import BlogItem from '$lib/BlogItem.svelte';

	let heading = 'Blog';
</script>

<SubPageLayout Heading={heading}>
	<div class="blogBackground">
		<div class="blogContainer">
			<BlogItem />
			<BlogItem />
			<BlogItem />
			<BlogItem />
			<BlogItem />
			<BlogItem />
			<BlogItem />
			<BlogItem />
			<BlogItem />
			<BlogItem />
		</div>
	</div>
</SubPageLayout>

<style>
	.blogBackground {
		min-height: var(--min-height-sub);
		width: 100%;
		background-color: #f3f3f3;
		padding: 5%;
	}
	.blogContainer {
		display: grid;
		grid-template-columns: repeat(auto-fit, 400px);
		max-width: 1600px;
		gap: 30px;
		justify-content: center;
		margin: auto;
	}
</style>
