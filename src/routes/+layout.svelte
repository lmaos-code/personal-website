<script lang="ts">
	import '../app.css';
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
</script>

<main>
	{@render children?.()}
</main>

<style lang="postcss">
	@reference "tailwindcss";

	:global(body) {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		min-height: 100vh;
		background-image: linear-gradient(120deg, var(--color-primary) 20%, var(--color-secondary) 80%);
		background-attachment: fixed;
		width: 100vw;
	}
</style>
