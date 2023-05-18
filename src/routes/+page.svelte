<script>
	import BusinessCard from './BusinessCard.svelte';
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
		background-attachment: fixed;
		/*background-color: var(--color-bg-0);background-image: linear-gradient(120deg, #a6c0fe 0%, #f68084 100%);*/
		background-size: 100vw 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
