<script>
	import '../app.scss';
</script>

<div class="app">
	<main>
		<slot />
	</main>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
		background-color: var(--color-surface);
		background-image: var(--background-gradient);
		background-attachment: fixed;
	}
</style>
