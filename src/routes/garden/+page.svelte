<script lang="ts">
	import Preview from '$lib/garden/preview.svelte';
	import { getAllPosts } from '$lib/garden/posts';
	import Nav from '$lib/garden/nav.svelte';

	const posts = getAllPosts();
</script>

<svelte:head>
	<title>Digital Garden | lmaos</title>
	<meta
		name="description"
		content="Welcome to my digital garden. Here I share my thoughts, learnings, and experiences."
	/>
</svelte:head>

<div class="min-h-screen w-full py-8">
	<div class="max-w-7xl lg:w-7xl px-4">
		<!-- Header Card -->
		<div class="bg-[var(--color-primary-container)] rounded-4xl overflow-hidden mb-8">
			<!-- Navigation Header -->
			<Nav />
			<!-- Garden Introduction -->
			<div class="p-6 pt-1.5 md:p-8 md:pt-1.5 w-full">
				<p class="text-lg opacity-80">
					Welcome to my digital garden. Here, I cultivate ideas, share learnings, and document my
					journey through technology, design, and personal growth.
				</p>
			</div>
		</div>

		<!-- Posts Section -->
		<section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
			{#each posts as post (post.slug)}
				<div class="bg-[var(--color-primary-container)] rounded-4xl overflow-hidden h-full">
					<Preview {...post} />
				</div>
			{/each}

			{#if posts.length === 0}
				<div
					class="bg-[var(--color-primary-container)] rounded-4xl p-6 pt-1.5 md:p-8 md:pt-1.5 col-span-full"
				>
					<p class="text-lg opacity-70 text-center">No posts yet. Check back soon!</p>
				</div>
			{/if}
		</section>
	</div>
</div>
