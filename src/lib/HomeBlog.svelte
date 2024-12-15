<div class="section blog">
	<div class="outerContainer">
		<div class="blogHeading heading">Aktuelles</div>
		<div class="blogContainer">
			<div class="row">
				<div class="heading">künstlicher Intelligenz</div>
				<div class="content paragraph">
					Soll der Gesetzgeber auf diese neuen Herausforderungen für das Verhältnis zwischen
					Arbeitgeber:innen und Arbeitnehmer:innen.
				</div>
			</div>
			<div class="line"></div>
			<div class="row">
				<div class="heading">künstlicher Intelligenz</div>
				<div class="content paragraph">
					Soll der Gesetzgeber auf diese neuen Herausforderungen für das Verhältnis zwischen
					Arbeitgeber:innen und Arbeitnehmer:innen.
				</div>
			</div>
			<div class="line"></div>
			<div class="row">
				<div class="heading">künstlicher Intelligenz</div>
				<div class="content paragraph">
					Soll der Gesetzgeber auf diese neuen Herausforderungen für das Verhältnis zwischen
					Arbeitgeber:innen und Arbeitnehmer:innen.
				</div>
			</div>
		</div>
		<button class="blogButton">Zum Blog</button>
	</div>
</div>

<style>
	.heading {
		font-size: var(--fs-h);
		font-weight: 500;
		text-align: center;
	}
	.content {
		font-size: var(--fs-p);
		font-weight: 400;
	}

	.blog {
		background-color: var(--white);
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		color: var(--cyan);
	}
	.outerContainer {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: var(--largerGap);
		min-height: var(--min-height);
		max-width: var(--max-width);
	}
	.blogContainer {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: var(--midGap);
	}
	.row {
		display: flex;
		flex-direction: column;
		justify-content: center;
		position: relative;
		padding-top: 5rem;
		padding-bottom: 5rem;
	}
	.line {
		font-size: var(--fs-p);
		height: 30rem;
		width: 1em;
		border-radius: 0.2rem;
		background-color: var(--cyan);
	}
	.paragraph {
		margin-top: 1.5rem;
		text-align: center;
	}
	.blogButton {
		border: var(--cyan) solid 0.2em;
		color: var(--cyan);
		font-size: var(--fs-p);
	}

	@media (max-width: 48rem) {
		.blog {
			flex-direction: column;
		}
		.line {
			width: 100%;
			height: 0.5rem;
		}
	}
</style>
