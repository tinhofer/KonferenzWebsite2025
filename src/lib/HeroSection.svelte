<script>
	// @ts-nocheck
	import kiIcon from '$lib/images/KIIcon.svg';
	let anim1;
	let anim2;
	let anim3;
	let anim4;
	let anim5;
	let anim6;

	let text1 = 'Wie kann ich dir helfen?';
	let text2 =
		'Hier ist ein strukturiertes Konzept für Generationenmanagement in einem Unternehmen, das auf Nachhaltigkeit, Produktivität und Zusammenarbeit zwischen den Generationen abzielt:<br><br>1. Zielsetzung des Generationenmanagements<br><br>Das Ziel ist es, die Zusammenarbeit zwischen den Generationen zu fördern, Fachwissen zu sichern, die Zufriedenheit der Mitarbeitenden zu erhöhen und die Leistungsfähigkeit des Unternehmens langfristig zu sichern.<br><br>Erhalt des Erfahrungswissens älterer Mitarbeitender.<br>Integration und Entwicklung jüngerer Generationen.<br>Schaffung von Synergien durch generationenübergreifende Zusammenarbeit.<br>Förderung von Vielfalt und Verbesserung der Unternehmenskultur.';
	import { gsap } from 'gsap';
	import { TextPlugin } from 'gsap/TextPlugin';
	gsap.registerPlugin(TextPlugin); // Register the TextPlugin

	import { onMount } from 'svelte';
	import { blur } from 'svelte/transition';
	import { animationPlayed, navbarAnimation, navbarSetup } from './AnimationStore';

	const inputEvents = ['pointerdown', 'keydown', 'wheel', 'touchstart', 'scroll'];

	onMount(() => {
		Start();
	});

	let hasAnimationPlayed = false;

	animationPlayed.subscribe((value) => {
		hasAnimationPlayed = value;
	});

	function Start() {
		if (typeof window !== 'undefined') {
			if (!hasAnimationPlayed) {
				PlayAnimation();
				animationPlayed.set(true);
			} else {
				SkipAnimation();
			}
		}
	}
	let triggerFunction;
	let setupFunction;

	// Subscribe to get the latest function
	navbarAnimation.subscribe((fn) => {
		triggerFunction = fn;
	});

	navbarSetup.subscribe((fn) => {
		setupFunction = fn;
	});

	function setNav() {
		setupFunction();
	}
	function triggerNav() {
		triggerFunction();
	}
	function SkipAnimation() {
		let timeline = gsap.timeline();
		timeline.set(anim2, { text: text1, ease: 'none' }, 0);
		timeline.set(
			anim5,
			{
				text: {
					value: text2
				},
				ease: 'none'
			},
			0
		);
		timeline.to('.chatOverlay', { opacity: 0.3, duration: 1 }, 0);
		timeline.to('.chat', { filter: 'blur(5px)', duration: 1 }, 0);
		timeline.to(
			'.heroContainer',
			{
				filter: 'opacity(1)',
				y: 0,
				duration: 1, // Animation duration
				ease: 'power2.out'
			},
			0
		);
	}
	function PlayAnimation() {
		let timeline = gsap.timeline();

		document.body.style.overflow = 'hidden';

		timeline.from(anim1, { opacity: 0, duration: 1, ease: 'power2.in', onStart: setNav });

		timeline.to(anim2, { text: text1, duration: 1, ease: 'none' });

		timeline.fromTo(
			anim3,
			{ scale: 0, opacity: 0 }, // Start state
			{ scale: 1, opacity: 1, duration: 0.7, ease: 'back.out(1.2)', delay: 1 }
		);
		timeline.from(anim4, { opacity: 0, duration: 1, ease: 'power2.in' });
		timeline.to(anim5, {
			text: {
				value: text2
			},
			delay: 1,
			duration: 6,
			ease: 'none'
		});
		timeline.to('.chatOverlay', { opacity: 0.3, duration: 1, delay: 4, onStart: triggerNav }, '<');
		timeline.to('.chat', { filter: 'blur(5px)', duration: 1 }, '<');
		timeline.to(
			'.heroContainer',
			{
				filter: 'opacity(1)',
				y: 0,
				duration: 1, // Animation duration
				ease: 'power2.out',
				delay: 0.2,
				onStart: enableScroll
			},
			'<'
		);

		function enableScroll() {
			document.body.style.overflow = '';
		}
		function handleInput(event) {
			console.log('event');
			if (timeline.time() < 8.5) {
				timeline.time(8.5);
			}
			inputEvents.forEach((event) => window.removeEventListener(event, handleInput));
		}

		inputEvents.forEach((event) => window.addEventListener(event, handleInput));
	}
</script>

<div class="overflowHidden">
	<div class="chatOverlay"></div>
	<div class="chat">
		<div class="botMessage">
			<img src={kiIcon} alt="" bind:this={anim1} class="messageIcon" />
			<div class="botTextContainer">
				<div class="botText" bind:this={anim2}></div>
			</div>
		</div>
		<div class="userMessage">
			<div class="userBubble" bind:this={anim3}>
				<div class="userText">Erstelle ein Konzept für Generationenmanagement im Betrieb!</div>
			</div>
		</div>
		<div class="botMessage">
			<img src={kiIcon} alt="" bind:this={anim4} class="messageIcon" />
			<div class="botTextContainer">
				<div class="botText" bind:this={anim5}></div>
			</div>
		</div>
	</div>
	<div class="heroLayer">
		<div class="heroContainer">
			<h1>Automatisierung der Arbeit</h1>
			<h3>2. Fachtagung am 10.3.2025</h3>
			<h2>Was bedeutet GenAI für<br />die Arbeitswelt?</h2>
			<img src={kiIcon} alt="" class="heroIcon" />
		</div>
	</div>
</div>

<style>
	.chatOverlay {
		opacity: 0;
		position: absolute;
		height: calc(100% - var(--bigGap));
		width: 100%;
		background: rgb(0, 0, 0);
		z-index: 1;
	}
	.chat {
		background-color: var(--cyan);
		padding: 5vh;
		height: calc(90vh - var(--bigGap));
		font-size: var(--fs-p);
		display: flex;
		flex-direction: column;
		gap: 3rem;
		word-wrap: break-word;
		overflow: hidden;
	}

	.botMessage {
		display: flex;
		gap: 1rem;
	}
	.messageIcon {
		padding: 2px;
		max-height: min(10vw, 65px);
	}
	.botTextContainer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		min-height: min(10vw, 65px);
		max-width: 70%;
	}
	.botText {
		height: fit-content;
		color: #fff;
		text-align: left;
	}

	.userMessage {
		display: flex;
		justify-content: flex-end;
	}
	.userBubble {
		min-height: 70px;
		width: fit-content;
		background-color: #fff;
		border-radius: 1rem;
		padding: 0.5rem 1rem;
		display: flex;
		align-items: center;
	}
	.userText {
		color: var(--cyan);
		text-align: right;
	}

	.heroLayer {
		position: absolute;
		top: 0;
		left: 0;
		height: 100vh;

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.heroContainer {
		position: relative;
		max-width: 70%;

		display: flex;
		gap: 2em;
		flex-direction: column;

		z-index: 2;
		filter: opacity(0);
		translate: 0px -600px;

		color: #fff;
	}

	h1 {
		order: 1;
		padding: 0;
		margin-top: -0.1em;
		margin-bottom: -0.1em;
		font-weight: 700;
		font-size: clamp(2rem, 8.5vw, 40rem); /* 10vw / 16px */
		line-height: 1.2;
	}
	h2 {
		order: 3;
		padding: 0;
		margin: 0;

		font-weight: 400;
		font-size: clamp(1.5rem, 2.75vw, 20rem); /* 0.5px, 5vw, 3.25rem */
		word-wrap: break-word;

		max-width: 66%;
	}
	h3 {
		order: 2;
		padding: 0;
		margin: 0;
		font-weight: 500;
		font-size: clamp(1.75rem, 3.5vw, 25rem); /* 0.5px, 5vw, 3.25rem */
		word-wrap: break-word;
		max-width: 80%;
	}
	.heroIcon {
		position: absolute;
		bottom: 0rem;
		right: 0;
		height: 17.5vw;
	}

	@media (max-width: 45rem) {
		.heroContainer {
			align-items: left;
			text-align: left;
		}
		.heroIcon {
			align-self: center;
			position: inherit;
			width: max(50%, 15rem);
			height: max(50%, 15rem);
			order: 0;
		}
		h2 {
			max-width: 100%;
		}
		h3 {
			max-width: 100%;
		}
		.heroContainer {
			max-width: min(90%, 25rem);
		}
	}
</style>
