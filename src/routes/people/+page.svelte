<script>
	import SubPageLayout from '$lib/SubPageLayout.svelte';
	import SprecherSection from '$lib/SprecherSection.svelte';
	const heading = 'People';
</script>

<svelte:head>
	<title>Tagung "Automatisierung der Arbeit": Speaker</title>
	<meta
		name="description"
		content="Hier findet man alle Experten, welche auf der Tagung Automatisierung der Arbeit sprechen werden."
	/>
</svelte:head>

<SubPageLayout Heading={heading}><SprecherSection /></SubPageLayout>
