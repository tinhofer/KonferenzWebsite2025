<footer>
	<a class="item" href="/impressum">Impressum</a>
	<a class="item" href="/datenschutzerklärung">Datenschutzerklärung</a>
	<a href="https://github.com/SimonTinhofer">Webdesign by Simon Tinhofer</a>
</footer>
<style>
	footer {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-evenly;
		position: relative;
		width: calc(100% - 2rem);
		min-height: var(--bigGap); /* 100px / 16px */
		background: var(--Color1);
		color: #f5f5f5;
		font-size: var(--fs-400);
		z-index: 3;
	}
	@media (max-width: 40rem) {
		footer{
			flex-direction: column;
			align-items: baseline;
			padding: 1rem;
		}
	}
	a {
		padding: 0.5rem;
		color: var(--Color2);		
	}
	a:hover {
		text-decoration: underline;
		transform: translateY(-0.07em);
	}
</style>