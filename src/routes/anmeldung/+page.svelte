<script>
	import SubPageLayout from '$lib/SubPageLayout.svelte';
	import AnmeldungsSection from "$lib/AnmeldungsSection.svelte";
	const heading = 'Anmeldung';
</script>
<svelte:head>
	<title>Tagung "Automatisierung der Arbeit": Anmeldung</title>
	<meta name="description" content='Hier kann man sich für die Tagung "Automatisierung der Arbeit" anmelden.' />
</svelte:head>
<SubPageLayout Heading={heading}><AnmeldungsSection/></SubPageLayout>