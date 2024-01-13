<script>
	import AuerMayerAvif from '$lib/images/Auer-Mayer.avif';
	import AuerMayerWebp from '$lib/images/Auer-Mayer.webp';
	import AuerMayerJpg from '$lib/images/Auer-Mayer.jpg';
	import EisenbergerAvif from '$lib/images/Eisenberger.avif';
	import EisenbergerWebp from '$lib/images/Eisenberger.webp';
	import EisenbergerJpg from '$lib/images/Eisenberger.jpg';
	import GreinerAvif from '$lib/images/Greiner.avif';
	import GreinerWebp from '$lib/images/Greiner.webp';
	import GreinerJpg from '$lib/images/Greiner.jpg';
	import HeitzingerAvif from '$lib/images/Heitzinger.avif';
	import HeitzingerWebp from '$lib/images/Heitzinger.webp';
	import HeitzingerJpg from '$lib/images/Heitzinger.jpg';
	import ReichelAvif from '$lib/images/Reichel.avif';
	import ReichelWebp from '$lib/images/Reichel.webp';
	import ReichelJpg from '$lib/images/Reichel.jpg';
	import TinhoferAvif from '$lib/images/Tinhofer.avif';
	import TinhoferWebp from '$lib/images/Tinhofer.webp';
	import TinhoferJpg from '$lib/images/Tinhofer.jpg';
	import WarterAvif from '$lib/images/Warter.avif';
	import WarterWebp from '$lib/images/Warter.webp';
	import WarterJpg from '$lib/images/Warter.jpg';
</script>


	<div class="inlineContainer">
		<div class="sprecherContainer" id="Auer-Mayer">
			<picture>
				<source srcset={AuerMayerAvif} type="image/avif" />
				<source srcset={AuerMayerWebp} type="image/webp" />
				<img
					src={AuerMayerJpg}
					alt="Portrait von AuerMayerAvif"
					loading="lazy"
					decoding="async"
					width="1000px"
				/>
			</picture>
			<div class="textContainer">
				<h1>Univ.-Prof. Dr. Susanne Auer-Mayer</h1>
				<p>
					ist Vorständin des Instituts für Österreichisches und Europäisches Arbeitsrecht und
					Sozialrecht an der Wirtschaftsuniversität Wien. Sie hat zahlreiche Publikationen zu
					verschiedenen Bereichen des Arbeits- und Sozialrechts verfasst und hält regelmäßig Vorträge
					und Seminare zu arbeits- und sozialrechtlichen Themen. Ihr Forschungsschwerpunkt liegt unter
					anderem auf den rechtlichen Auswirkungen der Digitalisierung auf die Arbeitswelt.
				</p>
			</div>
		</div>
		<div class="sprecherContainer imgRight" id="Eisenberger">
			<div class="textContainer">
				<h1>Univ.-Prof. Dr. Iris Eisenberger</h1>
				<p>
					ist Professorin für Innovation und Öffentliches Recht am Institut für Innovation und
					Digitalisierung im Recht der Universität Wien. Ihre Forschungsschwerpunkte liegen im
					Innovations- und Technologierecht, Grund- und Menschenrechtsschutz sowie an der
					Schnittstelle von Recht, Innovation und Gesellschaft.
				</p>
			</div>
			<picture>
				<source srcset={EisenbergerAvif} type="image/avif" />
				<source srcset={EisenbergerWebp} type="image/webp" />
				<img
					src={EisenbergerJpg}
					alt="Portrait von AuerMayerAvif"
					loading="lazy"
					decoding="async"
					width="1000px"
				/>
			</picture>
		</div>
		<div class="sprecherContainer" id="Greiner">
			<picture>
				<source srcset={GreinerAvif} type="image/avif" />
				<source srcset={GreinerWebp} type="image/webp" />
				<img
					src={GreinerJpg}
					alt="Portrait von AuerMayerAvif"
					loading="lazy"
					decoding="async"
					width="1000px"
				/>
			</picture>
			<div class="textContainer">
				<h1>Univ.-Ass. Conrad Greiner, LL.M. (WU)</h1>
				<p>
					ist Universitätsassistent (prae doc) am Institut für Österreichisches und Europäisches
					Arbeitsrecht und Sozialrecht der Wirtschaftsuniversität Wien. Daneben ist er Of Counsel in
					einer renommierten Arbeitsrechtskanzlei. Er hat bereits mehrfach zu Algorithmen im
					Arbeitsrecht vorgetragen und publiziert.
				</p>
			</div>
		</div>
		<div class="sprecherContainer imgRight" id="Heitzinger">
			<div class="textContainer">
				<h1>Assoz. Prof. DI Dr. Clemens Heitzinger</h1>
				<p>
					ist Co-Director des Center for Artificial Intelligence and Machine Learning (CAIML) und des
					Forschungsbereichs Machine Learning an der TU Wien
				</p>
			</div>
			<picture>
				<source srcset={HeitzingerAvif} type="image/avif" />
				<source srcset={HeitzingerWebp} type="image/webp" />
				<img
					src={HeitzingerJpg}
					alt="Portrait von AuerMayerAvif"
					loading="lazy"
					decoding="async"
					width="1000px"
				/>
			</picture>
		</div>
		<div class="sprecherContainer" id="Reichel">
			<picture>
				<source srcset={ReichelAvif} type="image/avif" />
				<source srcset={ReichelWebp} type="image/webp" />
				<img
					src={ReichelJpg}
					alt="Portrait von AuerMayerAvif"
					loading="lazy"
					decoding="async"
					width="1000px"
				/>
			</picture>
			<div class="textContainer">
				<h1>Univ.-Prof. Dr. Astrid Reichel</h1>
				<p>
					ist Universitätsprofessorin und stv. Leiterin des Fachbereichs Betriebswirtschaftslehre
					sowie Leiterin des Teams Human Ressource Management an der Paris Lodron Universität
					Salzburg.
				</p>
			</div>
		</div>
		<div class="sprecherContainer imgRight" id="Tinhofer">
			<div class="textContainer">
				<h1>Dr. Andreas Tinhofer, LL.M.</h1>
				<p>
					ist Rechtsanwalt in Wien und Lektor an der FH des BFI Wien. Er berät seit über 20 Jahren
					Unternehmen und Führungskräfte in allen arbeitsrechtlichen Angelegenheiten, einschließlich
					Arbeitnehmerdatenschutz. Sein besonderes Interesse gilt dem Einsatz von KI in der
					Arbeitswelt.
				</p>
			</div>
			<picture>
				<source srcset={TinhoferAvif} type="image/avif" />
				<source srcset={TinhoferWebp} type="image/webp" />
				<img
					src={TinhoferJpg}
					alt="Portrait von AuerMayerAvif"
					loading="lazy"
					decoding="async"
					width="1000px"
				/>
			</picture>
		</div>
		<div class="sprecherContainer" id="Warter">
			<picture>
				<source srcset={WarterAvif} type="image/avif" />
				<source srcset={WarterWebp} type="image/webp" />
				<img
					src={WarterJpg}
					alt="Portrait von AuerMayerAvif"
					loading="lazy"
					decoding="async"
					width="1000px"
				/>
			</picture>
			<div class="textContainer">
				<h1>Univ.-Ass. Mag. Dr. Johannes Warter</h1>
				<p>
					ist Universitätsprofessorin und stv. Leiterin des Fachbereichs Betriebswirtschaftslehre
					sowie Leiterin des Teams Human Ressource Management an der Paris Lodron Universität
					Salzburg.
				</p>
			</div>
		</div>
	</div>

<style>
	.inlineContainer{
		display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 1rem;
	}
	.sprecherContainer {
		background-color: white;
		display: flex;
		margin-bottom: 1rem;
		width: 100%;
	}
	@media (min-width: 120rem) {
		.sprecherContainer {
			width: calc(50% - 1rem);
		}
		picture {
			order: 1;
		}
		.textContainer {
			order: 2;
		}
	}
	.imgRight{
		justify-content: space-between;
	}
	.sprecherContainer {
		display: flex;
		flex-direction: row;
		background-color: var(--Color5);
	}
	picture {
		width: 30%; /* Set the desired width for the container */ /* Set the desired height for the container */
		display: flex; /* Ensure the container behaves like a regular div */
		padding: 1rem;
	}
	img {
		width: 100%; /* Set the desired width for the image */ /* Set the desired height for the image */
		object-fit: cover; /* Scale the image while maintaining aspect ratio to cover the container */
		display: block; /* Ensure the image is a block-level element */
		/* Add any other custom styles you want */
	}
	.textContainer {
		padding: 1rem;
		flex-shrink: 20;
		word-wrap: normal;
	}
	h1 {
		font-size: /* clamp(3rem, 3.5vw, 6rem) */ var(--fs-600);
		font-weight: 700;
		line-height: 1;
		margin: 0;
	}
	p {
/* 		padding-left: 0.4rem;
		padding-right: 10%; */
		font-size: /* clamp(1rem, 1.5vw, 2rem) */ var(--fs-400);
		max-width: 45ch;
	}

	@media (max-width: 45rem) {
		.sprecherContainer {
			flex-direction: column;
			margin-bottom: 2rem;
		}
		picture {
			order: 1;
			width: calc(100% - 2rem); /* Set the desired width for the container */ /* Set the desired height for the container */
			display: flex; /* Ensure the container behaves like a regular div */
			padding: 1rem;
		}
		.textContainer {
			order: 2;
			padding: 1rem;
			word-wrap: normal;
		}
	}
</style>
