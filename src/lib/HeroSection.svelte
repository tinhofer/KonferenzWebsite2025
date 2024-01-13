<script>
	import AiWomanAvif from "$lib/images/AiWoman.avif";
	import AiWomanWebp from "$lib/images/AiWoman.webp";
	import AiWomanPng from "$lib/images/AiWoman.png";
</script>
<section class="heroSection">
	<div class="landingPage">
		<picture class="AiWoman">
			<source srcset={base + AiWomanAvif} type="image/avif" />
			<source srcset={base + AiWomanWebp} type="image/webp" />
			<img
				src={base + AiWomanPng}
				alt="Portrait von AuerMayerAvif"
				loading="lazy"
				decoding="async"
				width="1000px"
			/>
		</picture>
		<div class="MainHeadline">Automatisierung der Arbeit</div>
		<div class="MainSubHeadline">
			Chancen und Risiken des Einsatzes Künstlicher Intelligenz im Betrieb
		</div>
		<a class="registerButton" href="/anmeldung">Anmelden</a>
	</div>
	<svg class="heroSvgMobile" viewBox="0 0 755 848" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path
			d="M563.716 589.217C559.584 515.536 699.383 447.824 720.663 364.937L752.321 217.848C752.654 216.536 752.935 215.232 753.163 213.937C753.163 60.076 499.164 -16.5195 284.663 6.43713C135.163 22.4371 -11.8348 130.437 3.16446 130.437C18.1637 130.437 177.164 57.9371 284.663 57.9371C461.659 57.9371 632.298 157.671 696.907 291.335C669.583 315.444 637.551 337.245 613.057 351.742C235.964 574.922 482.394 657.576 585.311 748.044C598.183 759.358 605.64 769.344 609.884 778.184C577.766 811.202 519.275 845.049 519.645 846.045C520.163 847.437 599.438 838.469 614.579 812.806C629.224 787.984 630.504 774.393 630.345 744.362C630.42 743.306 630.415 742.269 630.324 741.252C627.044 704.541 567.008 647.923 563.716 589.217Z"
			fill="#F5E8EE"
		/>
		<path
			d="M720.663 364.937C699.383 447.824 559.584 515.536 563.716 589.217C567.008 647.923 627.044 704.541 630.324 741.252M720.663 364.937L753.163 213.937M720.663 364.937C692.35 195.994 492.906 57.9371 284.663 57.9371C177.164 57.9371 18.1637 130.437 3.16446 130.437C-11.8348 130.437 135.164 22.4371 284.663 6.43713C499.164 -16.5195 753.163 60.076 753.163 213.937M753.163 213.937C744.711 261.937 663.133 322.105 613.057 351.742C235.964 574.922 482.394 657.576 585.311 748.044C618.951 777.614 615.608 798.107 614.579 812.806M630.324 741.252C633.699 779.027 519.127 844.653 519.645 846.045C520.163 847.437 599.438 838.469 614.579 812.806M630.324 741.252C630.575 773.485 629.72 787.143 614.579 812.806"
		/>
	</svg>

	<svg class="heroSvgDesktop" viewBox="0 0 1212 704" xmlns="http://www.w3.org/2000/svg">
		<path
			class="heroSvg1Fill"
			d="M-246.492 667.896C-246.492 667.896 297.971 187.601 640.345 160.048C648.029 214.852 647.984 273.572 653.049 311.534C748.65 1027.96 1209.59 541.132 1209.59 541.132C1209.59 541.132 1074.04 571.316 929.81 511.817C833.094 471.917 841.781 243.901 747.445 169.353L596.431 44.2713C592.366 40.1355 587.959 36.4559 583.178 33.2941C312.95 -173.201 -246.492 667.896 -246.492 667.896Z"
		/>
		<path
			class="heroSvg1Stroke"
			d="M747.445 169.353C427.766 73.103 -246.492 667.896 -246.492 667.896C-246.492 667.896 312.95 -173.201 583.178 33.2941M747.445 169.353C841.781 243.901 833.094 471.917 929.81 511.817C1074.04 571.316 1209.59 541.132 1209.59 541.132C1209.59 541.132 748.65 1027.96 653.049 311.534C643.009 236.293 653.049 79.5 583.178 33.2941M747.445 169.353L583.178 33.2941"
		/>
	</svg>
</section>
<style>
	img {
		width: 100%; /* Set the desired width for the image */ /* Set the desired height for the image */
		object-fit: cover; /* Scale the image while maintaining aspect ratio to cover the container */
		display: block; /* Ensure the image is a block-level element */
		/* Add any other custom styles you want */
	}
	.registerButton {
	width: max-content;
	padding: 0.2em 0.4em; /* 1px 19px / 16px */

	border: 0px solid #ffffff;
	border-radius: 0.48em;
	box-shadow: 0.03em 0.1em 0.125em rgba(0, 0, 0, 0.4);

	background-color: var(--Color1);

	color: var(--Color2);
	font-weight: 600;
	font-size: clamp(2rem, 4vw, 30rem);
	text-decoration: none;
	}
	.registerButton:hover {
		transform: translateY(-2%);
		cursor: pointer;
	}
</style>