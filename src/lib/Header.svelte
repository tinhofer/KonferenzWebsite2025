<script>
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { base } from '$app/paths';
	import logoPng from '$lib/images/Logo.svg';
	export var isBurgerActivated = false;
	/**@type {HTMLDivElement}*/
	let navBar;
	/**@type {HTMLDivElement}*/
	let burgerMenu;
	/**@type {HTMLButtonElement}*/
	let openButton;
	/**@type {HTMLButtonElement}*/
	let closeButton;

	$: $page.url.pathname, updateActive();
	let isMounted = false;
	onMount(() => {
		isMounted = true;
		updateActive();
	});

	function updateActive() {
		if (isMounted) {
			const pathname = $page.url.pathname;

			for (let i = 0; i < navBar.children.length; i++) {
				const link = navBar.children[i];
				const burgerA = burgerMenu.children[i];
				if (pathname === link.getAttribute('href')) {
					link.classList.add('active');
					burgerA.classList.add('activeBurger');
				} else {
					link.classList.remove('active');
					burgerA.classList.remove('activeBurger');
				}
			}
		}
	}

	function toggleBurgerBool() {
		isBurgerActivated = !isBurgerActivated;
		checkisBurgerActivated();

	}
	function checkisBurgerActivated(){
		if(isBurgerActivated){
			burgerMenu.classList.remove('hide');
			openButton.classList.add('hide');
			closeButton.classList.remove('hide');
		}
		else{
			burgerMenu.classList.add('hide');
			openButton.classList.remove('hide');
			closeButton.classList.add('hide');
		}
	}
</script>

<header>
	<img src={logoPng} alt="Das Logo des Anwaltes Dr. Andreas Tinhofer und der Wirtschaftsuniversität Wien" class="headerContentsContainer">
	<button on:click={toggleBurgerBool} class="headerButton" bind:this={openButton}>
		<svg id="burgerMenuEnter" class="burgerMenuSvg" viewBox="0 0 10 8">
			<path d="M1 1h8M1 4h 8M1 7h8" stroke-width="1.5" stroke-linecap="round" />
		</svg>
	</button>

	<button on:click={toggleBurgerBool} class=" headerButton hide" bind:this={closeButton}>
		<svg
			class="burgerMenuSvg"
			width="40"
			viewBox="0 0 56 53"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<rect
				width="65.5145"
				height="11.1251"
				rx="4"
				transform="matrix(0.72233 0.691549 -0.72233 0.691549 8.03589 0)"
				fill="#F5F5F5"
			/>
			<rect
				width="65.5145"
				height="11.1251"
				rx="4"
				transform="matrix(0.72233 -0.691549 0.72233 0.691549 0 45.3065)"
				fill="#F5F5F5"
			/>
		</svg>
	</button>

	<div class="navBar headerContentsContainer" bind:this={navBar}>
		<a class="hyperLink" href="{base}/">Home</a>
		<a class="hyperLink" href="{base}/programm">Programm</a>
		<a class="hyperLink" href="{base}/sprecher">Sprecher</a>
		<a class="hyperLink" href="{base}/sponsoren">Sponsoren</a>
		<a class="hyperLink" href="{base}/anmeldung">Anmeldung</a>
	</div>
</header>
<div class="burgerNavigation unselectable-text hide" bind:this={burgerMenu}>
	<a class="burgerRow" href="{base}/" on:click={toggleBurgerBool}
		><span class="burgerHyperlink">Home</span></a
	>
	<a class="burgerRow" href="{base}/programm" on:click={toggleBurgerBool}
		><span class="burgerHyperlink">Programm</span></a
	>
	<a class="burgerRow" href="{base}/sprecher" on:click={toggleBurgerBool}
		><span class="burgerHyperlink">Sprecher</span></a
	>
	<a class="burgerRow" href="{base}/sponsoren" on:click={toggleBurgerBool}
		><span class="burgerHyperlink">Sponsoren</span></a
	>
	<a class="burgerRow" href="{base}/anmeldung" on:click={toggleBurgerBool}
		><span class="burgerHyperlink">Anmeldung</span></a
	>
</div>

<style>
	button {
		border: none;
		background: none;
		padding: 0;
		width: fit-content;
		height: fit-content;
	}
	.navBar {
		display: none;
		justify-content: space-between;
		align-items: flex-end;
		gap: 1.5625rem; /* 25px / 16px */

		padding-top: 0.0625rem; /* 1px / 16px */
		padding-bottom: 0.0625rem; /* 1px / 16px */
		margin-left: auto;
	}
	.hyperLink {
		color: var(--Color2);
		font-size: clamp(1rem, 1.7vw, 1.5rem); /* 24px / 16px */
		font-weight: 400;
		text-decoration: none;
		word-wrap: break-word;
		cursor: pointer;
	}

	.hyperLink:hover {
		transform: translateY(-0.125rem);
	}
	@media (min-width: 60rem) {
		.navBar {
			display: inline-flex;
		}

		.burgerMenuSvg {
			display: none;
		}
	}
	img {
		max-width: min(18rem, 65%);
		margin: 1rem;
	}
	.headerButton {
		margin-right: 1rem;
	}
</style>
