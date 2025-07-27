<script lang="ts">
	export let title: string;
	export let slug: string;
	export let excerpt: string;
	export let date: string;

	// Format the date nicely
	const formattedDate = new Date(date).toLocaleDateString('en-US', {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	});
</script>

<a href="/garden/{slug}" class="block hover:no-underline h-full">
	<article class="p-6 md:p-8 transition-all hover:bg-[#5f895d15] group h-full">
		<div class="flex flex-col h-full">
			<time class="text-sm opacity-70 mb-3">{formattedDate}</time>
			<h2
				class="text-xl md:text-2xl font-bold group-hover:text-[var(--color-accent)] transition-colors mb-3"
			>
				{title}
			</h2>
			<p class="opacity-90 line-clamp-3 mb-4">{excerpt}</p>
			<div class="flex items-center gap-2 text-[var(--color-accent)] font-medium mt-auto pt-4">
				Read post
				<img
					src="svg/forward_arrow.svg"
					class="size-3 group-hover:translate-x-0.5 transition-transform"
					alt="arrow"
				/>
			</div>
		</div>
	</article>
</a>
