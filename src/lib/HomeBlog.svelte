<script>
	import thumbnail from '$lib/images/blogitem.png';
	function OnClickBlock() {
		window.open('/blog');
	}
</script>

<div class="blogSection">
	<div class="blogBackground">
		<div class="blogHeading heading">Aktuelles</div>
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
		<a class="blogButton button" href="/blog">Zum Blog</a>
	</div>
</div>

<style>
	.blogButton {
		text-decoration: none;
	}
	.item {
		max-width: 400px;
		background-color: var(--white);
		font-size: 1.75rem;
	}
	img {
		max-width: 400px;
	}
	.textarea {
		padding: 10px;
	}
	.heading {
		font-weight: 700;
	}
	.link {
		color: var(--cyan);
		text-decoration: none;
	}
	.blogSection {
		width: 100%;
		background-color: var(--white-dark);
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	.blogBackground {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: var(--largerGap);
		padding: var(--largerGap);
		min-height: var(--min-height);
		max-width: var(--max-width);
	}
	.blogHeading {
		color: var(--cyan);
		font-size: var(--fs-h);
		font-weight: 500;
	}
	.blogContainer {
		display: flex;
		align-items: center;
		justify-content: center;
		max-width: 1600px;
		gap: var(--largerGap);
		justify-content: center;
		margin: auto;
	}
	.blogButton {
		border: var(--cyan) solid 0.2em;
		color: var(--cyan);
		font-size: var(--fs-p);
	}
	@media (max-width: 85rem) {
		.item:nth-child(n + 3) {
			display: none;
		}
	}
	@media (max-width: 70rem) {
		.item:nth-child(n + 2) {
			display: none;
		}

		.item {
			width: 100%;
		}
		img {
			width: 100%;
		}
	}
</style>
