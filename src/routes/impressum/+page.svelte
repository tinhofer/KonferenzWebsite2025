<svelte:head>
	<title>Impressum</title>
	<meta
		name="description"
		content="Hier findet man das Impressum der Website zur Tagung 'Automatisierung der Arbeit', in der Experten zu den Risiken und Chancen des Einsatzes von Künstlicher Intelligenz auf der Arbeitswelt sprechen."
	/>
</svelte:head>
<div class="container">
	<h1>Information nach § 5 Abs 1 ECG</h1>

	<div>
		Dr. Andreas Tinhofer, LL.M. <br />
		Rechtsanwalt <br />
		Heumarkt 7/7/93 <br />
		1030 Wien
		<div class="line">
			<div class="char">T</div>
			+43 1 208 50 00
		</div>
		<div class="line">
			<div class="char">E</div>
			<a href="mailto:tinhofer@tinhofer.legal">tinhofer@tinhofer.legal</a>
		</div>
		<div class="line">
			<div class="char">W</div>
			<a href="http://www.tinhofer.legal">www.tinhofer.legal</a>
		</div>
	</div>

	<p>
		Ich bin Rechtsanwalt nach österreichischem Recht und unterliege dem einschlägigen Standesrecht
		(RAO, RL-BA), abrufbar unter <a href="http://www.oerak.at">http://www.oerak.at</a>, sowie der
		Aufsicht der Rechtsanwaltskammer Wien.
	</p>

	<h2>Disclaimer</h2>
	<p>
		Für den Inhalt dieser Website ist Herr RA Dr. Andreas Tinhofer, LL.M., alleinverantwortlich.
		Sämtliche Inhalte dienen ausschließlich der Information und stellen keine Rechtsberatung dar.
		Für die Richtigkeit dieser Informationen sowie für die Inhalte der verlinkten Websites wird
		keine Haftung übernommen.
	</p>

	<h2>Urheberrechtsschutz</h2>
	Die Texte auf der Website sind urheberrechtlich geschützt.
</div>

<style>
	div {
		font-size: var(--fs-400);
	}
	.container {
		background-color: white;
		padding: 1rem;
		min-height: 80vh;
	}
	p {
		font-size: var(--fs-400);
		max-width: 120ch;
	}
	h1 {
		font-size: var(--fs-400);
	}
	h2 {
		font-size: var(--fs-400);
		font-weight: 600;
	}
	a {
		color: var(--Color1);
	}
	.line {
		display: flex;
		flex-direction: row;
	}
	.char {
		width: 1.8em;
		height: 1ch;
	}
</style>
