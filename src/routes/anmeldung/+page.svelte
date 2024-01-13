<script>
	import BannerSection from "$lib/BannerSection.svelte";
	import AnmeldungsSection from "$lib/AnmeldungsSection.svelte";
    const heading = "Anmeldung";
    const subheading = 'Hier kannst du dich per E-mail auf die Warteliste für die Konferenz "Automatisierung der Arbeit" setzen lassen.';
</script>


<section>
	<div class="bannerContainer"><BannerSection heading={heading} subHeading={subheading} /></div>
	<div class="anmeldungscontainer"><AnmeldungsSection/></div>
</section>


<style>
	.bannerContainer{
		width: min(100%, 100rem);
		background-color: var(--Color2);
		display: flex;
		padding-top: 1rem;
		margin-bottom: -1rem;
	}
	.anmeldungscontainer{
		width: min(calc(100% - 2rem), 98rem);
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
