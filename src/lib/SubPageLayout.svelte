<script>
	import BannerSection from '$lib/BannerSection.svelte';
	export var Heading = 'Überschrift';
</script>

<section>
	<BannerSection heading={Heading} />
	<slot />
</section>

<style>
	section {
		display: flex;
		align-items: center;
		justify-content: start;
		flex-direction: column;
		background-color: red;
		padding-top: 0;
		min-height: calc(100vh - 2 * var(--bigGap));
	}
</style>
