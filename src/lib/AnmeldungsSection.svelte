<script>
	import { base } from '$app/paths';
    import AnmeldungsTutorial from "$lib/images/anleintung.svg";
	import InternalLink from '$lib/InternalLink.svelte';
	import ExternalLink from '$lib/ExternalLink.svelte';


    const email = "tinhofer.simon@gmail.com";
    const subject = "Anmeldung für die Konferenz: Automatisierung der Arbeit";
    const body = "Mit dieser automatisch generierten E-mail melde ich mich zu Ihrer Konferenz an."
    const mailToLink = 'mailto:' + email + '?subject=' + subject + '&body=' + body;

    function openMail () {
        window.open(mailToLink, "_blank")
    }
</script>

<div class="inlineContainer">
	<div class="anmeldungsContainer">
		<div class="graphContainer">
	<!--         <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5167.37613663303!2d16.365550233522193!3d48.198990038160275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476d07653fefdefd%3A0x1e9933a0d2a95812!2sTechnische%20Universit%C3%A4t%20Wien!5e0!3m2!1sde!2sat!4v1703957088290!5m2!1sde!2sat"
			style="border:0;"
			loading="lazy"
			referrerpolicy="no-referrer-when-downgrade"
			title="Karte auf der die TU Wien eingezeichnet ist">
			</iframe> -->
			<iframe
			src="https://www.openstreetmap.org/export/embed.html?bbox=16.403660674888187%2C48.21119726890827%2C16.413262983161502%2C48.21613737269223&amp;layer=mapnik&amp;marker=48.21366738037747%2C16.408461829024873"
			style="border: 0"
			loading="lazy"
			title="Karte auf der die WU Wien eingezeichnet ist">
			</iframe>
		</div>
		<div class="textContainer info">
			<h1>Informationen</h1>
			<ul>
				<li>Veranstaltungszeit: <span>29.02.2024</span> | 09:00 - 17:00</li>
				<li>Ablauf: siehe <a class="link" href="{base}/programm">Programm<InternalLink /></a></li>
				<li>Veranstaltungsort: Campus WU, Gebäude: LC - Learning Center, Etage: OG 2, Raum: LC.2.400 Clubraum siehe <a class="link" href="https://campus.wu.ac.at/?q=LC.2.400" target="_blank">TU Gebäudeplan<ExternalLink /></a></li>
				<li>Vortragende: siehe <a class="link" href="{base}/sprecher">Sprecher<InternalLink /></a></li>
				<li>Kontakt: <a class="link" href="mailto:arbeitsrecht.sozialrecht@wu.ac.at" target="_blank">arbeitsrecht.sozialrecht@wu.ac.at</a></li>
			</ul>
		</div>
	</div>
	<div class="anmeldungsContainer anmeldung">
		<div class="textContainer">
			<h1>Hier Anmelden!</h1>
			<p>
				Um sich für die Konferenz anzumelden, ist es lediglich nötig eine E-mail an konferenzmail@gmail.com zu senden. Der Sender der E-Mail wird in Folge auf die Warteliste gesetzt und Informiert wenn ein Platz frei wird.
			</p>
			<a class="button" role="button" href={mailToLink} target="_blank">E-Mail senden</a>
		</div>
		<picture class="graphContainer">
			<img
				src={AnmeldungsTutorial}
				alt="Bildliche Anleitung zum Abschließen der Anmeldung"
				loading="lazy"
				decoding="async"
				width="1000px"
			/>
		</picture>
	</div>
</div>

<style>
	.link {
		white-space: nowrap;
		color: var(--Color1);
		text-decoration: none;
		padding-right: 0.05em;
		margin-right: 0.25em;
	}
	.link:hover {
		background-image: linear-gradient(to bottom, currentcolor, 75%, transparent 75%);
		background-position: 0 1.1em;
		background-repeat: repeat-x;
		background-size: 5em 0.15em;
	}
	.button {
		width: max-content;
		padding: 0.2em 0.4em; /* 1px 19px / 16px */

		border: 0px solid #ffffff;
		border-radius: 0.48em;
		box-shadow: 0.03em 0.1em 0.125em rgba(0, 0, 0, 0.4);

		background-color: var(--Color1);

		color: var(--Color2);
		font-weight: 600;
		font-size: clamp(1.5rem, 2vw, 3rem);
		text-decoration: none;
	}
	.button:hover {
		transform: translateY(-2%);
		cursor: pointer;
		text-decoration: none;
	}
	.inlineContainer{
		display: flex;
        flex-direction: colum;
        flex-wrap: wrap;
        gap: 1rem;
	}
	.anmeldungsContainer {
		background-color: white;
		display: flex;
		width: 100%;
	}
	.anmeldung{
		justify-content: space-between;
	}
	.graphContainer {
		position: relative;
		margin: 1rem;
		width: min(30%, 30rem);
		padding-top: min(30%, 30rem);
		height: 0; /* Set the desired width for the container */ /* Set the desired height for the container */
		position: relative;
  		overflow: hidden;
		background-color: var(--Color2);
	}
	img {
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		width: 100%;
		height: 100%;
	}
	iframe{
		position: absolute;
		top: 0;
		left: 0;
		width: 100% !important;
		height: 100% !important;
	}
	.textContainer{
		width: 70%;
		display: flex;
		flex-shrink: 10;
		flex-direction: column;
		gap: 1.5rem;
		justify-content: start;
		padding: 2rem;
	}
	h1 {
		font-size: var(--fs-600);
		line-height: 1;
		margin: 0;
	}
	p {
		font-size: var(--fs-400);
		margin: 0;
		max-width: 45ch;
	}
	li {
		font-size: var(--fs-400);
		margin-bottom: 0.5rem;
		max-width: 45ch;
	}
	ul{
		margin: 0;
	}
	span {
		font-weight: 700;
	}
	@media (max-width: 750px){
		.anmeldungsContainer{
			flex-direction: column;
			margin-bottom: 3rem;
		}
		.textContainer{
			width: calc(100% - 2rem);
			order: 1;
		}
		.graphContainer{
			order: 2;
			width: calc(100% - 2rem);
			padding-top: calc(100% - 2rem);
		}
	}
</style>
