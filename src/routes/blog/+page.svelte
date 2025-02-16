<script>
	import InternalLink from '$lib/InternalLink.svelte';
	import SubPageLayout from '$lib/SubPageLayout.svelte';
	import thumbnail1 from '$lib/images/blog1.webp';
	import thumbnail2 from '$lib/images/blog2.png';
	import thumbnail3 from '$lib/images/blog3.webp';
	let heading = 'Blog';
</script>

<SubPageLayout Heading={heading}>
	<div class="blogBackground">
		<div class="blogContainer">
			<div class="item i3">
				<img src={thumbnail3} alt="flying robot" />
				<div class="textarea">
					<div class="content">
						<div class="heading">Ein Beispiel für generative KI: NotebookLM</div>
						<div class="descripiton">
							<p>Generative KI kann jeden Text zum Leben erwecken!</p>
							<!-- 31.01.2025 -->
						</div>
					</div>
					<div class="link">
						<a class="link" href="/blog/003">Hier weiterlesen<InternalLink/></a>					
					</div>
				</div>
			</div>
			<div class="item i2">
				<img src={thumbnail2} alt="flying robot" />
				<div class="textarea">
					<div class="content">
						<div class="heading">Interview with Anton Korinek on AI's Economic and Workforce Impact (Podcast)</div>
						<div class="descripiton">
							<p>Listen to Anton Korinek on the disruptive effects of GenAI on working life!</p>
							<!-- 27.01.2025 -->
						</div>
					</div>
					<div class="link">
						<a class="link" href="/blog/002">Hier weiterlesen<InternalLink/></a>
					</div>
				</div>
			</div>
			<div class="item i1">
				<img src={thumbnail1} alt="flying robot" />
				<div class="textarea">
					<div class="content">
						<div class="heading">Von der Theorie zur Praxis: KI-Schulungen für Mitarbeitende</div>
						<div class="descripiton">
							<p>Seit 2. Februar 2025 müssen Mitarbeitende über KI-Kompetenz verfügen!</p>
							<!-- 25.01.2025 -->
						</div>
					</div>
					<div class="link">
						<a class="link" href="/blog/001">Hier weiterlesen<InternalLink/></a>
					</div>
				</div>
			</div>
		</div>
	</div>
</SubPageLayout>

<style>
	.link{
		margin-top: 1rem;
	}
	.textarea{
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	.item{
		display: flex;
		flex-direction: column;
		max-width: 26rem;
		padding: 1.5rem;
		background-color: var(--white);
		font-size: var(--fs-p);
		position: relative;
	}
	.heading{
		font-weight: 700;
		margin-top: 1rem;
		margin-bottom: 0.5rem;
	}
	img {
		max-width: 100%;
	}
	.blogBackground {
		min-height: var(--min-height-sub);
		background-color: #f3f3f3;
		padding: 5%;
		width: 90%;
	}
	.blogContainer {
		display: grid;
		grid-template-columns: repeat(auto-fit, 400px);
		max-width: 1600px;
		gap: 30px;
		justify-content: center;
		margin: auto;
	}
	@media (max-width: 450px) {
		.blogContainer {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			gap: 1rem;
		}
	}

	a {
		white-space: nowrap;
		color: var(--cyan);
		text-decoration: none;
	}
	a:hover {
		background-image: linear-gradient(to bottom, currentcolor, 75%, transparent 75%);
		background-position: 0 1.1em;
		background-repeat: repeat-x;
		background-size: 5em 0.15em;
	}
</style>
