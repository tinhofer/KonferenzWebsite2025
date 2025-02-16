<!-- <script>
	import HeroSection from '$lib/HeroSection.svelte';
	import TextSection from '$lib/TextSection.svelte';
</script>
<svelte:head>
	<title>Tagung Automatisierung der Arbeit</title>
	<meta name="description" content='Chancen und Risiken des Einsatzes von Künstlicher Intelligenz: In Zusammenarbeit mit der WU Wien veranstaltet Rechtsanwalt Dr. Andreas Tinhofer eine Tagung zum Thema "Automatiserung der Arbeit", auf der Experten zu den Risiken und Chancen des Einsatzes von Künstlicher Intelligenz in der Arbeitswelt sprechen' />
</svelte:head>
<HeroSection />
<section>
	<div class="contentContainer">
		<TextSection />
	</div>
</section>
<style>
	.contentContainer{
		width: min(calc(100% - 2rem), 125rem);
		padding-left: 1rem;
		padding-right: 1rem;
		overflow: hidden;
		background-color: var(--Color2);
	}
	@media (max-width: 30rem) {
		.contentContainer{
			width: 100%;
			padding: 0;
		}
	}
	section {
		display: flex;
		align-items: center;
		justify-content: start;
		flex-direction: column;
		background-color: var(--Color2);
		padding-top: 0;
	}
</style>
 -->
<script>
	import HeroSection from '$lib/HeroSection.svelte';
	import HomePageContent from '$lib/HomePageContent.svelte';
</script>
<svelte:head>
	<title>Fachtagung Automatisierung der Arbeit</title>
	<meta name="description" content='2. Fachtagung zum Thema Automatisierung der Arbeit am 10.3.2025 ' />
</svelte:head>

<HeroSection />
<HomePageContent />
