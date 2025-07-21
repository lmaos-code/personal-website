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

<a href="/garden/{slug}" class="block hover:no-underline">
	<article class="p-8 transition-all hover:bg-[#5f895d15] group">
		<div class="flex flex-col gap-3">
			<time class="text-sm opacity-70">{formattedDate}</time>
			<h2 class="text-2xl font-bold group-hover:text-[var(--color-accent)] transition-colors">
				{title}
			</h2>
			<p class="opacity-90 line-clamp-3">{excerpt}</p>
			<div class="flex items-center gap-2 text-[var(--color-accent)] font-medium mt-2">
				Read post
				<img src="svg/forward_arrow.svg" class="size-3" alt="arrow" />
			</div>
		</div>
	</article>
</a>
