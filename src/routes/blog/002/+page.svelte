<script>
  import ExternalLink from "$lib/ExternalLink.svelte";
  import thumbnail2 from '$lib/images/Blog2.png';
</script>
<style>
  img{
        width: 100%;
  }
  .blogContainer{
    background-color: var(--white);
    padding: 2rem;
    max-width: 70ch;
    margin:auto;
    min-height: calc(100dvh - (14rem));
    font-size: var(--fs-p);
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
  .blogBackground{
        background-color: var(--white);
        padding: 1rem;
  }
</style>

<div class="blogBackground">
  <div class="blogContainer">
    <img src="{thumbnail2}" alt="Illustration von 2 Personen die einen Podcast aufnehmen">
    <h1>Interview mit Anton Korinek on AI's Economic and Workforce Impact (Podcast)</h1>
    <p>In episode #14 of the Center for AI Policy Podcast, recorded on 3 January 2025, host Jakub Kraus discusses with Anton Korinek, a professor at the University of Virginia’s economics department and business school, AI productivity gains, augmentation versus automation, the future of white-collar work, global access to AI technology, universal basic income, career planning in the age of AI, workforce adaptation, AI-generated podcasts, and more.
    </p>
    <p>
      You can find out more about Anton Korinek’s work on the economics of AI on his website <a href="http://www.korinek.com" target="_blank">www.korinek.com<ExternalLink/></a>
    </p>
    <p>
      Listen the full episode <a href="https://aipolicypod.substack.com/p/14-anton-korinek-on-ais-economic" target="_blank">here<ExternalLink/></a>
    </p>
  </div>
</div>