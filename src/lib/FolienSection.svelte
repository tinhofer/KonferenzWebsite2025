<script>
	import InternalLink from './InternalLink.svelte';
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
		if (hashedPsw == 3556498) {
			authanticated = true;
		} else {
			alert('Das angegebene Passwort ist leider falsch.');
			authanticated = false;
		}
	}

	// Example usage
	const myString = 'Hello, world!';
	const hash = simpleHash(myString);
	console.log(hash);
</script>

<div></div>
{#if authanticated}
	<div class="inlineContainer">
		<div class="presentationContainer">
			<h2>Downloadlinks zu den Folien:</h2>
			<ul>
				<li><a href="/download.pdf" target="_blank">Folien_Tinhofer.pdf<InternalLink /></a></li>
				<li><a href="/download.pdf" target="_blank">Folien_Reichel.pdf<InternalLink /></a></li>
				<li><a href="/download.pdf" target="_blank">Folien_Greiner.pdf<InternalLink /></a></li>
				<li><a href="/download.pdf" target="_blank">Folien_Warter.pdf<InternalLink /></a></li>
				<li><a href="/download.pdf" target="_blank">Folien_Heitzinger.pdf<InternalLink /></a></li>
				<li><a href="/download.pdf" target="_blank">Folien_Auer-Mayer.pdf<InternalLink /></a></li>
				<li><a href="/download.pdf" target="_blank">Folien_Eisenberger.pdf<InternalLink /></a></li>
			</ul>
		</div>
	</div>
{:else}
	<div class="inlineContainer">
		<div class="presentationContainer">
			<p>Bitte geben sie das Passwort ein, um Zugriff auf die Unterlagen zu bekommen.</p>
			<input bind:value={psw} placeholder="password" />
			<button on:click={checkPsw}>enter</button>
		</div>
	</div>
{/if}

<style>
	.inlineContainer {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		gap: 1rem;
		margin-bottom: 1rem;
	}
	.presentationContainer {
		background-color: white;
		padding: 3rem;
		width: 100%;
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
		color: black;
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
