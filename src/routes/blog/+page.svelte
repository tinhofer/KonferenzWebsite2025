<script>
	import SubPageLayout from '$lib/SubPageLayout.svelte';
	import thumbnail from '$lib/images/blogitem.png';
	let heading = 'Blog';
</script>

<SubPageLayout Heading={heading}>
	<div class="blogBackground">
		<div class="blogContainer">
			<div class="item i1">
				<img src={thumbnail} alt="flying robot" />
				<div class="textarea">
					<div class="heading">Versuche zur Kontrolle von Superintelligenz</div>
					<div class="descripiton">
						AI wird immer ausgefeilter. Daher wird erforscht, wie man eine superintelligente AI
						unter Kontrolle behalten kann. <a class="link" href="https://google.com"
							>Hier weiterlesen</a
						>
					</div>
				</div>
			</div>
			<div class="item i2">
				<img src={thumbnail} alt="flying robot" />
				<div class="textarea">
					<div class="heading">Versuche zur Kontrolle von Superintelligenz</div>
					<div class="descripiton">
						AI wird immer ausgefeilter. Daher wird erforscht, wie man eine superintelligente AI
						unter Kontrolle behalten kann. <a class="link" href="https://google.com"
							>Hier weiterlesen</a
						>
					</div>
				</div>
			</div>
			<div class="item i3">
				<img src={thumbnail} alt="flying robot" />
				<div class="textarea">
					<div class="heading">Versuche zur Kontrolle von Superintelligenz</div>
					<div class="descripiton">
						AI wird immer ausgefeilter. Daher wird erforscht, wie man eine superintelligente AI
						unter Kontrolle behalten kann. <a class="link" href="https://google.com"
							>Hier weiterlesen</a
						>
					</div>
				</div>
			</div>
		</div>
	</div>
</SubPageLayout>

<style>
	.item {
		max-width: 26rem;
		padding: 1rem;
		background-color: var(--white);
		font-size: var(--fs-x);
	}
	img {
		max-width: 100%;
	}
	.blogBackground {
		min-height: var(--min-height-sub);
		background-color: #f3f3f3;
		padding: 5%;
		width: 90%;
	}
	.blogContainer {
		display: grid;
		grid-template-columns: repeat(auto-fit, 400px);
		max-width: 1600px;
		gap: 30px;
		justify-content: center;
		margin: auto;
	}
	@media (max-width: 450px) {
		.blogContainer {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			gap: 1rem;
		}
	}
</style>
