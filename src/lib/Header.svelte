<script>
	// @ts-nocheck

	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import logoPng from '$lib/images/Logo.svg';
	import gsap from 'gsap';
	import { navbarAnimation } from './AnimationStore';
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
	function checkisBurgerActivated() {
		if (isBurgerActivated) {
			burgerMenu.classList.remove('hide');
			openButton.classList.add('hide');
			closeButton.classList.remove('hide');
		} else {
			burgerMenu.classList.add('hide');
			openButton.classList.remove('hide');
			closeButton.classList.add('hide');
		}
	}

	let header;

	function animateNavbar() {
		gsap.from(header, { opacity: 0, duration: 2, delay: 9 });
	}

	navbarAnimation.set(animateNavbar);
</script>

<header bind:this={header}>
	<a href="/" class="logoContainer"
		><img
			src={logoPng}
			alt="Das Logo des Anwaltes Dr. Andreas Tinhofer und der Wirtschaftsuniversität Wien"
		/></a
	>
	<button
		on:click={toggleBurgerBool}
		name="Burger-Menü öffnen"
		class="headerButton"
		bind:this={openButton}
	>
		<svg id="burgerMenuEnter" class="burgerMenuSvg" viewBox="0 0 10 8">
			<path d="M1 1h8M1 4h 8M1 7h8" stroke-width="1.5" stroke-linecap="round" />
		</svg>
	</button>

	<button
		on:click={toggleBurgerBool}
		name="Burger-Menü öffnen"
		class=" headerButton hide"
		bind:this={closeButton}
	>
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
				fill="#FFF"
			/>
			<rect
				width="65.5145"
				height="11.1251"
				rx="4"
				transform="matrix(0.72233 -0.691549 0.72233 0.691549 0 45.3065)"
				fill="#FFF"
			/>
		</svg>
	</button>

	<div class="navBar headerContentsContainer" bind:this={navBar}>
		<a class="hyperLink" href="/">Home</a>
		<a class="hyperLink" href="/program">Program</a>
		<a class="hyperLink" href="/people">People</a>
		<a class="hyperLink" href="/sponsoring">Sponsoring</a>
		<a class="hyperLink" href="/slides">Slides</a>
		<a class="hyperLink" href="/blog">Blog</a>
		<a class="hyperLink" href="htttps://www.automationofwork.at">2024</a>
	</div>
</header>
<div class="burgerNavigation unselectable-text hide" bind:this={burgerMenu}>
	<a class="burgerRow" href="/" on:click={toggleBurgerBool}
		><span class="burgerHyperlink">Home</span></a
	>
	<a class="burgerRow" href="/programm" on:click={toggleBurgerBool}
		><span class="burgerHyperlink">Program</span></a
	>
	<a class="burgerRow" href="/speaker" on:click={toggleBurgerBool}
		><span class="burgerHyperlink">People</span></a
	>
	<a class="burgerRow" href="/sponsoring" on:click={toggleBurgerBool}
		><span class="burgerHyperlink">Sponsoring</span></a
	>
	<a class="burgerRow" href="/unterlagen" on:click={toggleBurgerBool}
		><span class="burgerHyperlink">Slides</span></a
	>
	<a class="burgerRow" href="/unterlagen" on:click={toggleBurgerBool}
		><span class="burgerHyperlink">Blog</span></a
	>
	<a class="burgerRow" href="/unterlagen" on:click={toggleBurgerBool}
		><span class="burgerHyperlink">2024</span></a
	>
</div>

<style>
	header {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		position: sticky;
		top: 0;
		width: 100%;
		height: var(--bigGap);
		background: var(--cyan);
		z-index: 3;
		filter: drop-shadow(rgba(0, 0, 0, 0.25) 0px 3px 3px);
	}
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
		color: var(--white);
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
		height: 3rem;
	}
	.headerButton {
		margin-right: 1rem;
	}
	.headerContentsContainer {
		margin: var(--midGap);
	}
	.logoContainer {
		max-width: min(18rem, 65%);
		margin: 1rem;
	}
	.logoContainer:hover {
		transform: translateY(-0.125rem);
	}
</style>
