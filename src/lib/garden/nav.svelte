<script lang="ts">
	import back_arrow from '$lib/assets/svg/back_arrow.svg';
	import garden from '$lib/assets/svg/garden_white.svg';
	export let title: string = "Manu's Digital Garden";
	export let backUrl: string = '/';
	export let backText: string = 'Home';
</script>

<nav class="bg-[var(--color-nav)] w-full px-4 py-3 sticky top-0 z-10">
	<div class="max-w-7xl mx-auto grid grid-cols-[auto_1fr_auto] items-center gap-4">
		<!-- Back button - fixed width -->
		<a
			href={backUrl}
			class="inline-flex items-center text-[var(--color-accent)] hover:opacity-80 transition-opacity whitespace-nowrap"
		>
			<img src={back_arrow} class="size-3 mr-2" alt="Back Arrow" />
			<span class="font-medium">{backText}</span>
		</a>

		<!-- Title - truncates if needed -->
		<h2 class="text-xl font-bold !my-0 truncate text-right">{title}</h2>

		<!-- Icon - fixed width -->
		<div
			class="size-8 bg-[theme(--color-accent)] rounded-full flex items-center justify-center shrink-0"
		>
			<img src={garden} alt="Garden icon" class="size-5" />
		</div>
	</div>
</nav>
