<script>
	// @ts-nocheck
	import kiIcon from '$lib/images/KIIcon.png';
	let anim1;
	let anim2;
	let anim3;
	let anim4;
	let anim5;
	let anim6;

	let text1 = 'Wie kann ich Ihnen helfen?';
	let text2 =
		'Ich werde einen umfassenden Trainingsplan für Führungskräfte entwickeln, der verschiedene wichtige Kompetenzbereiche abdeckt.<br /><br />Trainingsplan für Führungskräfte: Ganzheitliche Entwicklung von Führungskompetenzen <br /><br />1. Selbstführung und Persönlichkeitsentwicklung <br />Modul A: Emotionale Intelligenz <br />Selbstwahrnehmung und Emotionsmanagement <br />Entwicklung von Resilienz und Stressresistenz <br />Reflexion der eigenen Führungspersönlichkeit';

	import { gsap } from 'gsap';
	import { TextPlugin } from 'gsap/TextPlugin';
	gsap.registerPlugin(TextPlugin); // Register the TextPlugin

	import { onMount } from 'svelte';
	import { blur } from 'svelte/transition';
	import { navbarAnimation } from './AnimationStore';

	onMount(() => {
		Start();
	});
	function Start() {
		let timeline = gsap.timeline();

		document.addEventListener('click', (event) => {
			let time = timeline.time();
			time += 2;
			timeline.time(time);
		});

		timeline.from(anim1, { opacity: 0, duration: 1, ease: 'power2.in', onStart: callFunction });

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
			duration: 4,
			ease: 'none'
		});
		timeline.to('.chatOverlay', { opacity: 0.3, duration: 1, delay: 3 }, '<');
		timeline.to('.chat', { filter: 'blur(5px)', duration: 1 }, '<');
		timeline.to(
			'.heroContainer',
			{
				filter: 'opacity(1)',
				y: 0,
				duration: 1, // Animation duration
				ease: 'power2.out',
				delay: 0.2
			},
			'<'
		);

		let triggerFunction;

		// Subscribe to get the latest function
		navbarAnimation.subscribe((fn) => {
			triggerFunction = fn;
		});

		function callFunction() {
			triggerFunction();
		}
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
				<div class="userText">Erstellen mir einen Personalmanagmentplan!</div>
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
			<h2>Was kann generative KI, was kann sie nicht?</h2>
			<button>Anmelden</button>
			<img src={kiIcon} alt="" class="heroIcon" />
		</div>
	</div>
</div>

<style>
	.chatOverlay {
		opacity: 0;
		position: absolute;
		width: 100%;
		height: 100%;
		background: rgb(0, 0, 0);
		z-index: 1;
	}
	.chat {
		background-color: var(--cyan);
		padding: 5vh;
		height: 90vh;
		font-size: 2.25rem;
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
		order: 2;
		padding: 0;
		margin: 0;

		font-weight: 400;
		font-size: clamp(1.75rem, 3.5vw, 25rem); /* 0.5px, 5vw, 3.25rem */
		word-wrap: break-word;

		max-width: 66%;
	}
	button {
		order: 3;
		padding: 0.2em 0.9em;
		border-radius: 0.5em;
		width: fit-content;
		font-size: 3rem;
		font-weight: 600;
		background-color: rgba(0, 0, 0, 0);
		border: solid 0.1em #fff;
		color: #fff;
		font-size: clamp(1.75rem, 3.5vw, 25rem);
		text-decoration: none;
	}
	button:hover {
		transform: translateY(-2%);
		cursor: pointer;
	}
	.heroIcon {
		position: absolute;
		bottom: 0rem;
		right: 0;
		height: 17.5vw;
	}

	@media (max-width: 48rem) {
		.heroContainer {
			align-items: center;
			text-align: center;
		}
		.heroIcon {
			position: inherit;
			width: 50%;
			height: 50%;
			order: 0;
		}
		h2 {
			max-width: 100%;
		}
		.heroContainer {
			max-width: 90%;
		}
	}
</style>
