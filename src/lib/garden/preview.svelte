<script lang="ts">
	import fwd_arrow from '$lib/assets/svg/forward_arrow.svg';
	import pin from '$lib/assets/svg/pin.svg';
	export let title: string;
	export let slug: string;
	export let excerpt: string;
	export let date: string;
	export let pinned: boolean;

	const formattedDate = new Date(date).toLocaleDateString('en-UK', {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	});
</script>

<a href="/garden/{slug}" class="block hover:no-underline h-full">
	<article class="p-6 md:p-8 transition-all hover:bg-[#5f895d15] group h-full">
		<div class="flex flex-col h-full">
			<div class="flex items-center justify-between">
				<time class="text-sm opacity-70">{formattedDate}</time>
				{#if pinned}
					<div class="flex items-center gap-2 text-accent text-sm">
						<img src={pin} alt="Pin" class="size-5" />
					</div>
				{/if}
			</div>
			<h2
				class="text-xl md:text-2xl font-bold group-hover:text-[var(--color-accent)] transition-colors mb-3"
			>
				{title}
			</h2>
			<p class="opacity-90 line-clamp-3 mb-4">{excerpt}</p>
			<div class="flex items-center gap-2 text-[var(--color-accent)] font-medium mt-auto pt-4">
				Read post
				<img
					src={fwd_arrow}
					class="size-3 group-hover:translate-x-0.5 transition-transform"
					alt="arrow"
				/>
			</div>
		</div>
	</article>
</a>
