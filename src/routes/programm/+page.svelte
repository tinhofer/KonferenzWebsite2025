<script>
	import BannerSection from '$lib/BannerSection.svelte';
	import TimelineSection from '$lib/TimelineSection.svelte';
	const heading = 'Programm';
	const subheading = 'Hier findest du das Programm für die Konferenz Autommatisierung der Arbeitswelt';
</script>

<section>
	<div class="bannerContainer">
		<BannerSection {heading} subHeading={subheading} />
	</div>
	<div class='timelineContainer'>
		<TimelineSection />
	</div>
</section>

<style>
	.bannerContainer{
		width: min(100%, 127rem);
		background-color: var(--Color2);
		display: flex;
		padding-top: 1rem;
		margin-bottom: -1rem;
	}
	.timelineContainer{
		width: min(calc(100% - 2rem), 125rem);
		padding: 1rem;
		padding-top: 0;
		overflow: hidden;
		background-color: var(--Color2);
	}
	section {
		display: flex;
		align-items: center;
		justify-content: start;
		flex-direction: column;
		gap: 1rem;
		background-color: var(--Color8);
		padding-top: 0;
	}
</style>
