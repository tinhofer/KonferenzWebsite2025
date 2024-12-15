<div class="section intro">
	<div class="introContainer">
		<div class="textContainer">
			<div class="heading introHeading">
				Generative KI wird die Arbeitswelt grundlegend verändern
			</div>
			<div class="content introContent">
				Mit ChatGPT & Co können Menschen und Maschinen binnen weniger Sekunden neue Texte, Bilder,
				Musik oder Code erzeugen. Wie sollen Unternehmen und Arbeitende darauf reagieren? Welche
				rechtlichen Rahmenbedingungen gibt es bereits und welche Regularien kommen noch auf uns zu?
			</div>
		</div>
		<div class="quoteWrapper">
			<div class="text">
				<p>
					Hier kommt dann ein toller Marketing Spruch rein! Mit dem man viele zum Stauenen bringen
					kann
				</p>
			</div>
		</div>
	</div>
</div>

<style>
	.heading {
		font-size: var(--fs-h);
		font-weight: 500;
	}
	.content {
		font-weight: 400;
	}

	.intro {
		background-color: var(--white-dark);
		color: var(--cyan);
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}
	.introContainer {
		padding: var(--largerGap);
		min-height: var(--min-height);
		max-width: var(--max-width);
		gap: 4rem;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}
	.textContainer {
		flex-grow: 1;
		text-align: left;
		max-width: 50ch;
		font-size: var(--fs-p);
	}
	.introHeading {
		align-self: flex-start;
		margin-left: auto;
	}
	.introContent {
		align-self: flex-end;
	}

	.quoteWrapper {
		flex-shrink: 0;
		aspect-ratio: 1/1;
		width: 33%;
		position: relative;
	}

	.text {
		width: 100%;
		height: 100%;
		/*BLUE BG*/
		background: radial-gradient(
			ellipse at center,
			var(--cyan-light) 0%,
			var(--cyan) 70%,
			rgba(255, 6, 6, 0) 70.3%
		);
		position: relative;
		margin: 0;
		color: white;
		text-align: center;
	}

	.text p {
		font-size: var(--fs-p);
		height: 100%;
		line-height: 1.25;
		padding: 0;
		text-align: center;
		font-style: italic;
	}

	.text::before {
		content: '';
		width: 50%;
		height: 100%;
		float: left;
		shape-outside: polygon(
			0 0,
			98% 0,
			50% 6%,
			23.4% 17.3%,
			6% 32.6%,
			0 50%,
			6% 65.6%,
			23.4% 82.7%,
			50% 94%,
			98% 100%,
			0 100%
		);
		shape-margin: 7%;
	}

	.text p::before {
		content: '';
		width: 50%;
		height: 100%;
		float: right;
		shape-outside: polygon(
			2% 0%,
			100% 0%,
			100% 100%,
			2% 100%,
			50% 94%,
			76.6% 82.7%,
			94% 65.6%,
			100% 50%,
			94% 32.6%,
			76.6% 17.3%,
			50% 6%
		);
		shape-margin: 7%;
	}
</style>
