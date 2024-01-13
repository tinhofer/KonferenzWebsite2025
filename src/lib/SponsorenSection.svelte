<script>
    import AKWienSvg from '$lib/images/Logo_AK Wien.svg';
    import FacultasSvg from '$lib/images/Logo_Facultas.svg';
    import LexisNexisSvg from '$lib/images/Logo_LexisNexis.svg';
    import ManzSvg from '$lib/images/Logo_Manz.svg';
    import WKOSvg from '$lib/images/Logo_WKO.svg';

</script>
<div class="inlineContainer">
    <div class="sponsorContainer">
        <img src={AKWienSvg} alt="Logo der Arbeiterkammer Wien">
        <p>
            Die <span>Arbeiterkammer (AK)</span> vertritt die Interessen von fast 4 Millionen arbeitenden Menschen in Österreich. Wir kämpfen für ihre Rechte in der Arbeit – und dafür, dass sie gehört, fair bezahlt und rechtlich abgesichert sind. Das Beste daran: Der AK muss man nicht extra beitreten – durch das Arbeiterkammergesetz sind alle Arbeitnehmer:innen automatisch AK Mitglieder. Das gilt auch für Lehrlinge, Arbeitslose und Menschen in Karenz – sie alle können die gesamten Leistungen der AK nutzen.
        </p>
    </div>
    <div class="sponsorContainer">
        <img src={FacultasSvg} alt="Logo des Verlages Facultas">
        <p>
            <span>facultas</span> unterstützt seit 40 Jahren Studierende, Lehrende und Praktiker:innen mit der Veröffentlichung und Bereitstellung von Studien- und Fachliteratur. Als Verlagshaus publiziert facultas pro Jahr rund 140 Neuerscheinungen, Neuauflagen und zahlreiche Fachzeitschriften. Mit den Filialen an großteils universitären Standorten in Wien, Niederösterreich und Salzburg gehört facultas zu den größten Fachbuchhändlern Österreichs mit einem breit aufgestellten Fachsortiment. Zuverlässige Bibliotheksbelieferung, Druckerei, Bindeservice und Kopierservice ergänzen das Angebot wissenschaftsnaher Dienstleistungen.
        </p>
    </div>
    <div class="sponsorContainer">
        <img src={LexisNexisSvg} alt="Logo des Unternehmens LexisNexis">
        <p>
            <span>LexisNexis Österreich</span> ist ein führender Anbieter intelligenter Rechtsinformation. Als Pionier bei neuen Technologien kombiniert LexisNexis hochwertige Information aus Recht, Steuern & Wirtschaft mit zukunftsweisenden digitalen Lösungen, um seinen Kund:innen mit schnelleren und relevanteren Antworten, zu besseren Entscheidungen und damit zu Vorsprung in ihrem beruflichen Alltag zu verhelfen. Die Produktpalette umfasst die Recherchelösung Lexis 360®, Legal Tech Produkte wie Lexis SmartScan und Lexis ContractMaster, Lexis WhistleComplete, Closd, Caselex, Compliance Praxis, Fachzeitschriften, Fachliteratur, Skripten und KODEX.
        </p>
    </div>
    <div class="sponsorContainer">
        <img src={ManzSvg} alt="Logo des Verlages Manz">
        <p>
            Die <span>MANZ’sche Verlags und Universitätsbuchhandlung</span> mit Sitz in Wien ist Österreichs Marktführer für Rechtsinformation. MANZ-Rot steht bei Rechtsanwender:innen für Rechtssicherheit, Qualität und Innovation. „Der MANZ“ bietet – ob online, gedruckt oder als Seminar – das umfassendste Angebot an Informationsdienstleistungen für Rechts- und Steuerberufe. Die seit 1849 bestehende MANZ’sche Verlags und Universitätsbuchhandlung befindet sich seit fünf Generationen im Familienbesitz und ist Teil der als Medienunternehmen des 21. Jahrhunderts geführten MANZ-Gruppe.
        </p>
    </div>
    <div class="sponsorContainer">
        <img src={WKOSvg} alt="Logo der Wirtschaftskammer Österreichs">
        <p>Die <span>Wirtschaftskammern Österreichs</span> vertreten mehr als 540.000 Mitgliedsbetriebe. Als starke Stimme der Unternehmen setzen wir uns für eine zukunftsorientierte und wirtschaftsfreundliche Politik ein, z.B. für Steuerentlastung, Bürokratie-Abbau, Förderungen.</p>
    </div>
</div>
<style>
    .inlineContainer{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 1rem;
    }
    .sponsorContainer {
        background-color: white;
        padding: 1rem;
        width: 100%;
    }
    @media (min-width: 30rem) {
        .sponsorContainer{
            max-width: calc(50% - 2.5rem);
        }
    }
    @media (min-width: 90rem) {
        .inlineContainer{
        gap: 1rem;
    }
        .sponsorContainer{
            max-width: calc(33.33% - 4.67rem);
            padding: 2rem;
        }
    }
    img{
        width: 100%;
    }
    p {
       font-size: var(--fs-400); 

    }
    span {
        font-weight: 700;
    }
</style>