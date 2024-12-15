<script>
	export let heading = 'Heading';
</script>

<section>
	<h1>{heading}</h1>
	<!-- <h2>{subHeading}</h2> -->
</section>

<style>
	section {
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;
		width: 100%;
		background-color: var(--cyan-light);
		color: var(--white);
		min-height: 16rem;
	}
	h1 {
		filter: drop-shadow(rgba(0, 0, 0, 0.32) 0.03em 0.02em);
		position: relative;
		font-size: var(--fs-xl);
		font-weight: 700;
		margin: 0;
	}
</style>
