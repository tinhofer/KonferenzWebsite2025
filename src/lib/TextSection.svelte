<script>
	import ExternalLink from '$lib/ExternalLink.svelte';
</script>

<section class="textSection">
	<!-- <svg class="zigZagSvg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 58 283">
		<path
			d="M49 4.5L9 28.9764L49 49.7134L9 74.1898L49 93.567L9 116.684L49 137.421L9 161.897L49 189.433L9 210.17L49 236.006L9 252.664L49 278.5"
			stroke-width="8"
			stroke-linecap="round"
		/>
	</svg> -->
	<div class="paragraphContainer">
		<h2 class="paragraphHeadline">Eine Tagung für die Arbeitswelt</h2>
		<p class="paragraphText">
			Digitale Technologien haben die Arbeitswelt in den letzten Jahrzehnten stark verändert. Wie
			wir arbeiten, kommunizieren und uns informieren, wird zunehmend durch Algorithmen und Systeme
			Künstlicher Intelligenz bestimmt. Soll der Gesetzgeber auf diese neuen Herausforderungen für
			das Verhältnis zwischen Arbeitgeber:innen und Arbeitnehmer:innen sowie zwischen den
			Sozialpartnern reagieren?
		</p>
	</div>
	<div class="paragraphContainer">
		<h2 class="paragraphHeadline">Informationen</h2>
		<ul>
			<li>Datum: 29.02.2024 | 09:00 - 17:00 Uhr</li>
			<li>
				Ort: Campus WU, LC - Learning Center, OG 2, LC.2.400 Clubraum <br /><a
					class="link"
					href="https://campus.wu.ac.at/?q=LC.2.400"
					target="_blank">WU Gebäudeplan<ExternalLink /></a
				>
			</li>
			<li>
				Kontakt: Institut für Arbeits- und Sozialrecht, WU Wien <br /> T: 01 313 36 – 4637 <br /> E:
				<a href="mailto:arbeitsrecht.sozialrecht@wu.ac.at" target="_blank"
					>arbeitsrecht.sozialrecht@wu.ac.at</a
				>
			</li>
			<ul></ul>
		</ul>
	</div>
</section>

<style>
	.textSection {
		display: flex;
		gap: 1rem;
		flex-direction: row;
		flex-wrap: wrap;
		margin-bottom: 1rem;
	}
	.paragraphContainer {
		padding: 2rem;
		width: calc(50% - 4.5rem);
		font-size: var(--fs-400);
		background-color: var(--white-dark);
	}
	@media (max-width: 50rem) {
		.paragraphContainer {
			width: 100%;
			padding: 1rem;
		}
	}
	h2 {
		margin-bottom: var(--smallGap);
		color: var(--black);
		font-weight: 700;
		word-wrap: break-word;
		font-size: var(--fs-500);
		margin: 0;
		margin-bottom: 0.5rem;
	}

	p {
		color: var(--black);
		font-weight: 400;
		word-wrap: break-word;
		font-size: var(--fs-400);
		margin: 0;
		max-width: 45ch;
	}
	ul {
		padding-left: 1rem;
	}
	li:not(:last-child) {
		margin-bottom: 1.5rem;
		word-wrap: break-word;
	}
	a {
		white-space: nowrap;
		color: var(--cyan);
		text-decoration: none;
	}
	a:hover {
		background-image: linear-gradient(to bottom, currentcolor, 75%, transparent 75%);
		background-position: 0 1.1em;
		background-repeat: repeat-x;
		background-size: 5em 0.15em;
	}
</style>
