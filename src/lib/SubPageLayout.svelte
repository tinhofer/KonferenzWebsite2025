<script>
    import BannerSection from '$lib/BannerSection.svelte';
    export var Heading = "Überschrift"; 
</script>
<section>
    <div class="bg">
		<div class="bannerContainer">
			<BannerSection heading={Heading}/>
		</div>
		<div class="contentContainer">
			<slot />
		</div>
	</div>
</section>
<style>
	.bannerContainer{
		width: min(100%, 127rem);
		background-color: var(--Color2);
		display: flex;
	}
	.contentContainer{
		width: min(calc(100% - 2rem), 125rem);
		padding-left: 1rem;
		padding-right: 1rem;
		overflow: hidden;
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
		background-color: var(--Color8);
		padding-top: 0;
		min-height: calc(100vh - 2 * var(--bigGap));
	}
	.bg {
		width: min(100%, 127rem);
		min-height: calc(100vh - 2 * var(--bigGap));
		background-color: var(--Color2);
	}
</style>