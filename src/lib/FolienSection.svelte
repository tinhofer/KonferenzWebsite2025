<script>
	import InternalLink from './InternalLink.svelte';
	import SlideKatzlberger from '$lib/slides/Präsentation_Katzlberger.pdf';6
	import SlideHomar from '$lib/slides/Präsentation_Homar.pdf';5
	import SlideAuerMayer from '$lib/slides/Präsentation_Auer-Mayer.pdf';1
	import SlideSchmidl from '$lib/slides/Präsentation_Schmidl.pdf';8
	import SlideKöszegi from '$lib/slides/Präsentation_Köszegi.pdf';7
	import SlideDjeffal from '$lib/slides/Präsentation_Djeffal.pdf';2
	import SlideDorner from '$lib/slides/Präsentation_Dorner.pdf';3
	import SlideFuchs from '$lib/slides/Präsentation_Fuchs.pdf';4
	var authanticated = false;
	/**
	 * @type {string}
	 */
	var psw = '';
	/**
	 * @param {string} string
	 */
	function simpleHash(string) {
		let hash = 0;
		if (string.length === 0) return hash;
		for (let i = 0; i < string.length; i++) {
			const char = string.charCodeAt(i);
			hash = (hash << 5) - hash + char;
			hash = hash & hash; // Convert to 32bit integer
		}
		return hash;
	}
	function checkPsw() {
		var hashedPsw = simpleHash(psw);
		console.log(hashedPsw);
		if (hashedPsw == 538178232) {
			authanticated = true;
		} else {
			alert('Das angegebene Passwort ist leider falsch.');
			authanticated = false;
		}
	}

</script>

<div class="bg">
	{#if authanticated}
			<div class="presentationContainer">
				<h2>Präsentationen:</h2>
				<ul>
					<li><a href="{SlideAuerMayer}" target="_blank">Präsentation_Auer-Mayer.pdf<InternalLink /></a></li>
					<li><a href="{SlideDjeffal}" target="_blank">Präsentation_Djeffal<InternalLink /></a></li>
					<li><a href="{SlideDorner}" target="_blank">Präsentation_Dorner.pdf<InternalLink /></a></li>
					<li><a href="{SlideFuchs}" target="_blank">Präsentation_Fuchs.pdf<InternalLink /></a></li>
					<li><a href="{SlideHomar}" target="_blank">Präsentation_Homar.pdf<InternalLink /></a></li>
					<li><a href="{SlideKatzlberger}" target="_blank">Präsentation_Katzlberger.pdf<InternalLink /></a></li>
					<li><a href="{SlideKöszegi}" target="_blank">Präsentation_Köszegi.pdf<InternalLink /></a></li>
					<li><a href="{SlideSchmidl}" target="_blank">Präsentation_Schmidl.pdf<InternalLink /></a></li>
				</ul>
			</div>
	{:else}

			<div class="presentationContainer">
				<p>Bitte geben sie das Passwort ein, um Zugriff auf die Unterlagen zu bekommen.</p>
				<input bind:value={psw} placeholder="password" />
				<button on:click={checkPsw}>enter</button>
			</div>
	{/if}
</div>

<style>
	.bg {
		width: 100%;
		background-color: var(--white-dark);
		min-height: var(--min-height-sub);
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		color: var(--cyan);
	}
	.presentationContainer {
		background-color: white;
		padding: 3rem;
		width: calc(100% - 2rem);
		max-width: 60ch;
		height: fit-content;
		border: 0;
		z-index: 2;
	}
	@media (max-width: 30rem) {
		.presentationContainer {
			padding: 1rem;
		}
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
	ul {
		padding-left: 2rem;
	}
	li:not(:last-child) {
		margin-bottom: 1.5rem;
		word-wrap: break-word;
	}
	h2 {
		margin-bottom: var(--smallGap);
		font-weight: 700;
		word-wrap: break-word;
		font-size: var(--fs-500);
		margin: 0;
		margin-bottom: 0.5rem;
	}
	button {
		width: max-content;
		padding: 0.2em 0.4em; /* 1px 19px / 16px */

		border: 0.2em solid var(--cyan);
		border-radius: 0.48em;
		box-shadow: 0.03em 0.1em 0.125em rgba(0, 0, 0, 0.4);

		background-color: var(--cyan);

		color: var(--white);
		text-decoration: none;
		font-size: var(--fs-400);
	}
	input {
		padding: 0.2em 0.4em;
		font-size: var(--fs-400);
		border: 0.2em solid var(--cyan);
		border-radius: 0.48em;
		box-shadow: 0.03em 0.1em 0.125em rgba(0, 0, 0, 0.4);
		background-color: white;
		margin-bottom: 1rem;
	}
	input:focus-visible {
		outline: 0;
	}
	p {
		font-size: var(--fs-400);
	}
</style>
