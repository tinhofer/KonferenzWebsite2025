<script>
	import SubPageLayout from '$lib/SubPageLayout.svelte';
	import PresentationsSection from "$lib/FolienSection.svelte";
	const heading = 'Unterlagen';
</script>
<svelte:head>
	<title>Tagung "Automatisierung der Arbeit": Präsentationen</title>
	<meta name="description" content='Hier kann man sich für die Präsentationen der Tagung "Automatisierung der Arbeit" herunterladen.' />
</svelte:head>
<SubPageLayout Heading={heading}><PresentationsSection/></SubPageLayout>