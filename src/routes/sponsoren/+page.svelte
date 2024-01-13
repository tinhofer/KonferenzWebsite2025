<script>
	import BannerSection from "$lib/BannerSection.svelte";
	import SponsorenSection from "$lib/SponsorenSection.svelte";
    const heading = "Sponsoren";
    const subheading = 'Hier finden Sie alle Sponsoren, die diese Veranstaltung möglich gemacht haben.';
</script>


<section>
	<div class="bannerContainer"><BannerSection heading={heading} subHeading={subheading} /></div>
	<div class="sponsorenContainer"><SponsorenSection/></div>
</section>


<style>
	.bannerContainer{
		width: min(100%, 127rem);
		background-color: var(--Color2);
		display: flex;
		padding-top: 1rem;
		margin-bottom: -1rem;
	}
	.sponsorenContainer{
		width: min(calc(100% - 2rem), 125rem);
		padding: 1rem;
		padding-top: 0;
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
