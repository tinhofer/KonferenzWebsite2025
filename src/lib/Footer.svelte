<footer>
	<a href="/impressum">Impressum</a>
	<a href="/datenschutzerklärung">Datenschutzerklärung</a>
	<span>Heumarkt 7/7/93 | A-1010 Wien</span>
</footer>
<style>
	footer {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-evenly;
		position: relative;
		width: calc(100% - 2rem);
		min-height: 6.25rem; /* 100px / 16px */
		background: var(--Color1);
		color: #f5f5f5;
		font-size: var(--fs-400);
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
	span{
		padding: 0.5rem;
	}
	a:hover {
		text-decoration: underline;
	}
</style>