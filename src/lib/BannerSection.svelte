<script>
	export let heading = 'Heading';
</script>

<section>
	<h1>{heading}</h1>
	<!-- <h2>{subHeading}</h2> -->
	<svg viewBox="0 0 1100 767" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path
			d="M-472 389.679C-472 389.679 120.11 125.064 485.674 198.915C492.512 249.085 491.014 300.47 495.476 335.148C579.687 989.599 1082.95 695.37 1082.95 695.37C1082.95 695.37 937.733 683.003 785.492 589.652C683.401 527.053 698.285 329.953 599.586 237.706L441.729 85.0084C437.499 80.2251 432.893 75.7432 427.875 71.6075C144.976 -186.465 -472 389.679 -472 389.679Z"
			fill="#F5E8EE"
		/>
		<path
			d="M599.586 237.706C261.263 61.9827 -472 389.679 -472 389.679C-472 389.679 144.976 -186.465 427.875 71.6075M599.586 237.706C698.285 329.953 683.401 527.053 785.492 589.652C937.733 683.003 1082.95 695.37 1082.95 695.37C1082.95 695.37 579.687 989.599 495.476 335.148C486.632 266.416 501.201 132.046 427.875 71.6075M599.586 237.706L427.875 71.6075"
			stroke="white"
			stroke-width="10"
		/>
	</svg>
</section>

<style>
	section {
		position: relative;
		background-color: var(--Color2);
		color: var(--Color1);
		padding: clamp(1rem, 5vw, 5rem);
		min-height: 8rem;
	}
	h1 {
		position: relative;
		font-size: var(--fs-xl);
		font-weight: 700;
		margin: 0;
		z-index: 10;
	}
	svg {
		top: -2rem;
		left: 0;
		position: absolute;
		z-index: 1;
		height: 500px;
	}

</style>


