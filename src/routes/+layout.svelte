<script>
	import '../app.css';
	import Header from '$lib/Header.svelte';
	import Footer from '$lib/Footer.svelte';
	var showBurger = false;
	import '@fontsource-variable/inter';
</script>

<div>
	<Header bind:isBurgerActivated={showBurger} />
	{#if !showBurger}
		<slot />
		<Footer/>
	{/if}
</div>

<style>
	div {
		overflow: hidden;
	}
</style>
