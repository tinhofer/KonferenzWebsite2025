<script>
  import ExternalLink from "$lib/ExternalLink.svelte";
  import thumbnail3 from '$lib/images/blog3.webp';
  import audio from '$lib/Blog2Audio.wav';
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
    <img src="{thumbnail3}" alt="Illustration von einem Laptop auf dem ein Podcast erstellt wird">
    <h1>Ein Beispiel für generative KI: NotebookLM</h1>
    <p>Stellen Sie sich vor, Sie hätten einen KI-Assistenten, der von Ihnen ausgewählte Texte
        zusammenfassen, Diskussionen im Podcast-Stil generieren und Ihnen beim Brainstorming von Ideen
        helfen kann! Das ist das Versprechen von NotebookLM, mit dem Google im letzten Jahr ein
        Paukenschlag gelungen ist.</p>
  
    <p>Das KI-gestützte Tool ermöglicht das Hochladen verschiedener Dokumenttypen, die dann zur
        Beantwortung von Fragen und zur Generierung von Zusammenfassungen und Gliederungen
        verwendet werden können. Als besonders innovativ wurde von den Rezensent:innen die Möglichkeit
        zur Erstellung eines Podcasts („Audio-Overview“) hervorgehoben, in dem zwei KI-Hosts eine
        natürliche und lebendige Diskussion zu jedem erdenklichen Thema führen, das in den hochgeladenen
        Dokumenten behandelt wird. In der aktuellen Beta-Version können allerdings nur englischsprachige
        Podcasts erstellt werden. Auch die Quellenangaben, mit deren Hilfe man direkt zu den jenen Stellen
        in den Dokumenten springen kann, auf die für die Generierung der Antworten zurückgegriffen
        wurde, wurden positiv bewertet.</p>
  
    <p>Kritisch betrachtet werden hingegen datenschutzrechtliche Unsicherheiten sowie das Risiko von
        Ungenauigkeiten oder „Halluzinationen“, die auch bei diesem Ansatz nicht völlig ausgeschlossen
        werden können. Die Antworten des Chatbots bedürfen daher immer einer Überprüfung, so wie es für
        Ausgaben generativer KI-Tools generell zu empfehlen ist.</p>
  
    <p>Der unten angegebene Link führt zu einem Podcast, der von NotebookLM aus den Transkripten zu
        verschiedenen YouTube-Videos erstellt wurde. Diese dokumentieren unterschiedliche
        Gesprächsrunden beim Treffen des World Economic Forum in Davos im Jänner 2025. Diskutiert
        werden unter anderem die rasante Entwicklung der künstlichen Intelligenz (KI), insbesondere von
        AGI (Artificial General Intelligence), deren potenziellen Auswirkungen auf den Arbeitsmarkt und die
        Gesellschaft sowie notwendige Anpassungen im Bildungssystem und in der Arbeitswelt.</p>
  
    <p><strong>Hier kommen Sie zum KI-Podcast:</strong> <a href="{audio}" download="WEF_Davos2025.wav" target="_blank">NotebookLM Podcast<ExternalLink/></a></p>
  </div>
</div>