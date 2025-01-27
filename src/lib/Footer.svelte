<footer>
	<div class="container"><a class="item" href="/impressum">Impressum</a></div>
	<div class="container"><a class="item" href="/datenschutzerklärung">Datenschutzerklärung</a></div>
	<div class="container">
		<a href="https://github.com/SimonTinhofer">Webdesign by Simon Tinhofer</a>
	</div>
</footer>

<style>
	footer {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-evenly;
		position: relative;
		min-height: var(--bigGap); /* 100px / 16px */
		background: var(--cyan);
		color: var(--white-dark);
		font-size: var(--fs-400);
		z-index: 3;
	}
	.container {
		width: calc(100% / 3);
		display: flex;
		align-items: center;
		justify-content: center;
	}
	@media (max-width: 55rem) {
		footer {
			flex-direction: column;
			padding: 1rem;
		}
		.container {
			width: 100%;
			display: flex;
			align-items: center;
			justify-content: flex-start;
		}
	}
	a {
		padding: 0.5rem;
		color: var(--white-dark);
	}
	a:hover {
		text-decoration: underline;
		transform: translateY(-0.07em);
	}
</style>
