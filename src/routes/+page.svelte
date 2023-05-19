<script>
	import BusinessCard from '../lib/BusinessCard/BusinessCard.svelte';
</script>

<svelte:head>
	<title>LMAOS</title>
	<meta name="description" content="LMAOS e-business card" />
</svelte:head>

<section>
	<BusinessCard />
</section>

<style>
	section {
		min-height: 100vh;
		background-size: 100vw 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
