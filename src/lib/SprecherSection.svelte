<script>
	import AngerlerAvif from '$lib/images/Angerler.avif';
	import AngerlerWebp from '$lib/images/Angerler.webp';
	import AngerlerJpg from '$lib/images/Angerler.jpg';
	import AuerMayerAvif from '$lib/images/Auer-Mayer.avif';
	import AuerMayerWebp from '$lib/images/Auer-Mayer.webp';
	import AuerMayerJpg from '$lib/images/Auer-Mayer.jpg';
	import EisenbergerAvif from '$lib/images/Eisenberger.avif';
	import EisenbergerWebp from '$lib/images/Eisenberger.webp';
	import EisenbergerJpg from '$lib/images/Eisenberger.jpg';
	import GogolaAvif from "$lib/images/Gogola.avif";
	import GogolaWebp from "$lib/images/Gogola.webp";
	import GogolaJpg from "$lib/images/Gogola.jpg";
	import GreinerAvif from '$lib/images/Greiner.avif';
	import GreinerWebp from '$lib/images/Greiner.webp';
	import GreinerJpg from '$lib/images/Greiner.jpg';
	import HeitzingerAvif from '$lib/images/Heitzinger.avif';
	import HeitzingerWebp from '$lib/images/Heitzinger.webp';
	import HeitzingerJpg from '$lib/images/Heitzinger.jpg';
	import LeimüllerAvif from '$lib/images/Leimüller.avif';
	import LeimüllerWebp from '$lib/images/Leimüller.webp';
	import LeimüllerJpg from '$lib/images/Leimüller.jpg';
	import LudwigAvif from '$lib/images/Ludwig.avif';
	import LudwigWebp from '$lib/images/Ludwig.webp';
	import LudwigJpg from '$lib/images/Ludwig.jpg';
	import MaderAvif from '$lib/images/Mader.avif';
	import MaderWebp from '$lib/images/Mader.webp';
	import MaderJpg from '$lib/images/Mader.jpg';
	import RitzbergerMoserAvif from "$lib/images/Ritzberger-Moser.avif"
	import RitzbergerMoserWebp from "$lib/images/Ritzberger-Moser.webp"
	import RitzbergerMoserJpg from "$lib/images/Ritzberger-Moser.jpg"
	import ReichelAvif from '$lib/images/Reichel.avif';
	import ReichelWebp from '$lib/images/Reichel.webp';
	import ReichelJpg from '$lib/images/Reichel.jpg';
	import SommerAvif from '$lib/images/Sommer.avif';
	import SommerWebp from '$lib/images/Sommer.webp';
	import SommerJpg from '$lib/images/Sommer.jpg';
	import TinhoferAvif from '$lib/images/Tinhofer.avif';
	import TinhoferWebp from '$lib/images/Tinhofer.webp';
	import TinhoferJpg from '$lib/images/Tinhofer.jpg';
	import WarterAvif from '$lib/images/Warter.avif';
	import WarterWebp from '$lib/images/Warter.webp';
	import WarterJpg from '$lib/images/Warter.jpg';
	import ExternalLink from '$lib/ExternalLink.svelte';
	import InternalLink from './InternalLink.svelte';
</script>


	<div class="inlineContainer">
		<div class="sprecherContainer" id="Angerler">
			<picture>
				<source srcset={AngerlerAvif} type="image/avif" />
				<source srcset={AngerlerWebp} type="image/webp" /> 
				<img
					src={AngerlerJpg}
					alt="Portrait von Mag. Dr. Eva Angerler"
					loading="lazy"
					decoding="async"
					width="1000px"
				/>
			</picture>
			<div class="textContainer">
				<h1>Mag. Dr. Eva Angerler</h1>
				<p>
					ist Expertin für Arbeit und Technik in der Gewerkschaft GPA. Sie berät und schult Betriebsräte zu Technikgestaltung und Datenschutz am Arbeitsplatz und ist Autorin zahlreicher Beratungsunterlagen, Musterbetriebsvereinbarungen und Artikel für Betriebsräte.
				</p>
			</div>
		</div>
		<div class="sprecherContainer imgRight" id="Auer-Mayer">
			<div class="textContainer">
				<h1>Univ.-Prof. Dr. Susanne Auer-Mayer</h1>
				<p>
					ist Vorständin des Instituts für Österreichisches und
					Europäisches Arbeitsrecht und Sozialrecht an der Wirtschaftsuniversität Wien. Sie hat zahlreiche
					Publikationen zu verschiedenen Bereichen des Arbeits- und Sozialrechts verfasst und hält regelmäßig
					Vorträge und Seminare zu arbeits- und sozialrechtlichen Themen. Ihr Forschungsschwerpunkt liegt
					unter anderem auf den rechtlichen Auswirkungen der Digitalisierung auf die Arbeitswelt.
				</p>
			</div>
			<picture>
				<source srcset={AuerMayerAvif} type="image/avif" />
				<source srcset={AuerMayerWebp} type="image/webp" /> 
				<img
					src={AuerMayerJpg}
					alt="Portrait von Univ.-Prof. Dr. Susanne Auer-Mayer"
					loading="lazy"
					decoding="async"
					width="1000px"
				/>
			</picture>
			
		</div>
		<div class="sprecherContainer" id="Eisenberger">
			<picture>
				<source srcset={EisenbergerAvif} type="image/avif" />
				<source srcset={EisenbergerWebp} type="image/webp" /> 
				<img
					src={EisenbergerJpg}
					alt="Portrait von Univ.-Prof. Dr. Iris Eisenberger"
					loading="lazy"
					decoding="async"
					width="1000px"
				/>
			</picture>
			<div class="textContainer">
				<h1>Univ.-Prof. Dr. Iris Eisenberger</h1>
				<p>
					ist Professorin für Innovation und Öffentliches Recht am Institut für
					Innovation und Digitalisierung im Recht der Universität Wien. Ihre Forschungsschwerpunkte liegen
					im Innovations- und Technologierecht, Grund- und Menschenrechtsschutz sowie an der Schnittstelle
					von Recht, Innovation und Gesellschaft.
				</p>
			</div>
		</div>
		<div class="sprecherContainer imgRight" id="Gogola">
			<div class="textContainer">
				<h1>Dr. Michael Gogola</h1>
				<p>
					ist Jurist und arbeitet in der Grundlagenabteilung sowie der Abteilung Arbeit & Technik der Gewerkschaft GPA. Er beschäftigt sich mit arbeitsrechtlichen und sozialpolitischen Fragestellungen, insbesondere zu den Themen Arbeitszeit, Digitalisierung und Datenschutz, sowie mit Rechtsfragen der modernen Arbeitswelt.
				</p>
			</div>
			<picture>
				<source srcset={GogolaAvif} type="image/avif" />
				<source srcset={GogolaWebp} type="image/webp" /> 
				<img
					src={GogolaJpg}
					alt="Dr. Michael Gogola"
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
					alt="Portrait von Conrad Greiner, LL.M. (WU)"
					loading="lazy"
					decoding="async"
					width="1000px"
				/>
			</picture>
			<div class="textContainer">
				<h1>Conrad Greiner, LL.M. (WU)</h1>
				<p>
					ist Universitätsassistent (prae doc) am Institut für Österreichisches und Europäisches Arbeitsrecht und Sozialrecht der Wirtschaftsuniversität Wien. 
					Daneben ist er Of Counsel in einer renommierten Arbeitsrechtskanzlei. 
					Er hat bereits mehrfach zu Algorithmen im Arbeitsrecht vorgetragen und publiziert.
				</p>
			</div>
		</div>
		<div class="sprecherContainer imgRight" id="Heitzinger">
			<div class="textContainer">
				<h1>Assoz. Prof. DI Dr. Clemens Heitzinger</h1>
				<p>
					ist Co-Director des Center for Artificial Intelligence an
					Machine Learning (CAIML) und des Forschungsbereichs Machine Learning an der TU Wien.
				</p>
			</div>
			<picture>
				<source srcset={HeitzingerAvif} type="image/avif" />
				<source srcset={HeitzingerWebp} type="image/webp" /> 
				<img
					src={HeitzingerJpg}
					alt="Portrait von Assoz. Prof. DI Dr. Clemens Heitzinger"
					loading="lazy"
					decoding="async"
					width="1000px"
				/>
			</picture>
			
		</div>
		<div class="sprecherContainer" id="Leimüller">
			<picture>
				<source srcset={LeimüllerAvif} type="image/avif" />
				<source srcset={LeimüllerWebp} type="image/webp" /> 
				<img
					src={LeimüllerJpg}
					alt="Portrait von Dr. Gertraud Leimüller, MPA (Harvard)"
					loading="lazy"
					decoding="async"
					width="1000px"
				/>
			</picture>
			<div class="textContainer">
				<h1>Dr. Gertraud Leimüller, MPA (Harvard)</h1>
				<p>
					ist zusammen mit Data Scientist Rania Wazir PhD Gründerin von leiwand.ai, einem Deep-Tech-Startup, das Datenwissenschaft mit sozialwissenschaftlicher Expertise verbindet, um algorithmischen Bias frühzeitig erkennen und verhindern zu können. Die Open-Innovation-Expertin initiierte das dreijährige Forschungsprojekt <a href="https://www.fairbydesign.eu">fAIr by design<ExternalLink/></a> zu algorithmischer Fairness.
				</p>
			</div>
		</div>
		<div class="sprecherContainer imgRight" id="Ludwig">
			<div class="textContainer">
				<h1>Mag. Emanuel Ludwig MBA</h1>
				<p>
					ist Referent für Arbeitsrecht und New Work in der Wirtschaftskammer Österreich (WKÖ). Er verhandelt mit den Sozialpartnern Gesetze, ua die Umsetzung von EU-Richtlinien in nationales Recht. Weiters vertritt er die Unternehmensinteressen in den Bereichen der Gleichbehandlung, Familienpolitik, Vereinbarkeit Familie & Beruf und war Delegierter bei den EU-Sozialpartnerverhandlungen für das „Recht auf Nichterreichbarkeit“.
				</p>
			</div>
			<picture>
				<source srcset={LudwigAvif} type="image/avif" />
				<source srcset={LudwigWebp} type="image/webp" /> 
				<img
					src={LudwigJpg}
					alt="Portrait von Mag. Emanuel Ludwig MBA"
					loading="lazy"
					decoding="async"
					width="1000px"
				/>
			</picture>
			
		</div>
		<div class="sprecherContainer" id="Mader">
			<picture>
				<source srcset={MaderAvif} type="image/avif" />
				<source srcset={MaderWebp} type="image/webp" /> 
				<img
					src={MaderJpg}
					alt="Portrait von Thomas Mader, BA"
					loading="lazy"
					decoding="async"
					width="1000px"
				/>
			</picture>
			<div class="textContainer">
				<h1>Thomas Mader, BA</h1>
				<p>
					ist Fachsbereichsleiter in der Bundesgeschäftsstelle des Arbeitsmarktservice Österreich (AMS). Er ist in der Abteilung Arbeitsmarktforschung und Berufsinformation (ABI) tätig und leitet dort den Fachbereich Berufsinfo und Forschung.
					Darüber hinaus ist er für das KI-Tool <a href="https://www.ams.at/arbeitsuchende/aus-und-weiterbildung/berufsinformationen/berufsinformation/berufsinfomat?open=berufsinfomat" target="_blank">Berufsinformat<InternalLink/></a> verantwortlich, das seit Jänner 2024 auf der Homepage des AMS zur Verfügung steht. 
				</p>
			</div>
		</div>
		<div class="sprecherContainer imgRight" id="Reichel">
			<div class="textContainer">
				<h1>Univ.-Prof. Dr. Astrid Reichel</h1>
				<p>
					ist Universitätsprofessorin und stv. Leiterin des Fachbereichs Betriebswirtschaftslehre sowie Leiterin des Teams Human Ressource Management an der Paris Lodron Universität Salzburg. 
				</p>
			</div>
			<picture>
				<source srcset={ReichelAvif} type="image/avif" />
				<source srcset={ReichelWebp} type="image/webp" /> 
				<img
					src={ReichelJpg}
					alt="Portrait von Univ.-Prof. Dr. Astrid Reichel"
					loading="lazy"
					decoding="async"
					width="1000px"
				/>
			</picture>
			
		</div>
		<div class="sprecherContainer" id="Ritzberger-Moser">
			<picture>
				<source srcset={RitzbergerMoserAvif} type="image/avif" />
				<source srcset={RitzbergerMoserWebp} type="image/webp" /> 
				<img
					src={RitzbergerMoserJpg}
					alt="Portrait von SC Dr. Anna Ritzberger-Moser"
					loading="lazy"
					decoding="async"
					width="1000px"
				/>
			</picture>
			<div class="textContainer">
				<h1>SC Dr Anna Ritzberger-Moser</h1>
				<p>
					leitet die Sektion Arbeitsrecht und Zentral-Arbeitsinspektorat im Bundesministerium für Arbeit und Wirtschaft, die für die Legistik im Bereich Arbeitsrecht zuständig ist.
				</p>
			</div>
		</div>
		<div class="sprecherContainer imgRight" id="Sommer">
			<div class="textContainer">
				<h1>DI Roland Sommer, MBA</h1>
				<p>
					ist Geschäftsführer der Plattform Industrie 4.0 Österreich und beschäftigt sich mit vielen Themen rund um die Digitalisierung (in) der Produktion. Zudem ist er Lektor an mehreren Fachhochschulen.
				</p>
			</div>
			<picture>
				<source srcset={SommerAvif} type="image/avif" />
				<source srcset={SommerWebp} type="image/webp" /> 
				<img
					src={SommerJpg}
					alt="Portrait von AuerMayerAvif"
					loading="lazy"
					decoding="async"
					width="1000px"
				/>
			</picture>
			
		</div>
		<div class="sprecherContainer" id="Tinhofer">
			<picture>
				<source srcset={TinhoferAvif} type="image/avif" />
				<source srcset={TinhoferWebp} type="image/webp" /> 
				<img
					src={TinhoferJpg}
					alt="Portrait von Dr. Andreas Tinhofer, LL.M."
					loading="lazy"
					decoding="async"
					width="1000px"
				/>
			</picture>
			<div class="textContainer">
				<h1>Dr. Andreas Tinhofer, LL.M.</h1>
				<p>
					ist Rechtsanwalt in Wien und Lektor an der FH des BFI Wien. Er berät
					seit über 20 Jahren Unternehmen und Führungskräfte in allen arbeitsrechtlichen Angelegenheiten,
					einschließlich Arbeitnehmerdatenschutz. Sein besonderes Interesse gilt dem Einsatz von KI in der
					Arbeitswelt.
				</p>
			</div>
		</div>
		<div class="sprecherContainer imgRight" id="Warter">
			<div class="textContainer">
				<h1>Univ.-Ass. Mag. Dr. Johannes Warter</h1>
				<p>
					ist Universitätsassistent (post-doc) am Fachbereich Arbeits-
					und Wirtschaftsrecht der Universität Salzburg sowie am dortigen WissensNetzwerk Recht, Wirtschaft
					und Arbeitswelt. Er lehrt und forscht zu verschiedenen Bereichen des Arbeits-, Sozial- und
					Datenschutzrechts.
				</p>
			</div>
			<picture>
				<source srcset={WarterAvif} type="image/avif" />
				<source srcset={WarterWebp} type="image/webp" /> 
				<img
					src={WarterJpg}
					alt="Portrait von Univ.-Ass. Mag. Dr. Johannes Warter"
					loading="lazy"
					decoding="async"
					width="1000px"
				/>
			</picture>
			
		</div>	
	</div>

<style>
	.inlineContainer{
		display: flex;
        flex-direction: row;
        flex-wrap: wrap;
		gap: 1rem;
		margin-bottom: 1rem;
	}
	.sprecherContainer {
		background-color: white;
		display: flex;
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
		z-index: 2;
	}
	picture {
		position: relative;
		margin: 1rem;
		width: min(30%, 30rem);
		padding-top: min(30%, 30rem);
		height: 0; /* Set the desired width for the container */ /* Set the desired height for the container */
		position: relative;
  		overflow: hidden;
		background-color: var(--Color2);
	}
	img {
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		width: 100%;
		height: 100%;
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
		}
		picture {
			order: 1;
			width: calc(100% - 2rem);
			padding-top: calc(100% - 2rem);
		}
		.textContainer {
			order: 2;
			padding: 1rem;
			word-wrap: normal;
		}
	}
	a {
		white-space: nowrap;
		color: var(--Color1);
		text-decoration: none;
	}
	a:hover {
		background-image: linear-gradient(to bottom, currentcolor, 75%, transparent 75%);
		background-position: 0 1.1em;
		background-repeat: repeat-x;
		background-size: 5em 0.15em;
	}
</style>
