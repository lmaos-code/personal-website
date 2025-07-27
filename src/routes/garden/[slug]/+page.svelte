<script lang="ts">
	import { page } from '$app/state';
	import { getPostBySlug } from '$lib/garden/posts';
	import MarkdownRenderer from '$lib/garden/MarkdownRenderer.svelte';
	import Nav from '$lib/garden/nav.svelte';
	import { afterNavigate } from '$app/navigation';

	const postPath = page.url.pathname.split('/')[2];
	const post = getPostBySlug(postPath);

	if (!post) {
		throw new Error('Post not found');
	}
	let backURL: string = '/garden';

	afterNavigate(({ from }) => {
		if (from != null && from.url != null) backURL = from?.url.pathname || backURL;
	});
</script>

<svelte:head>
	<title>{post.title} | LMAOS Digital Garden</title>
	<meta name="description" content={post.excerpt} />
</svelte:head>

<div class="min-h-screen w-full py-8">
	<div class="w-[95%] max-w-4xl mx-auto px-4 pb-12">
		<!-- Post Content Card -->
		<article class="bg-[var(--color-primary-container)] rounded-4xl overflow-hidden">
			<!-- Navigation Header -->
			<Nav title="" backUrl={backURL} />
			<div class="p-6 md:p-8">
				<header class="mb-12">
					<time class="text-sm opacity-70 block mb-4"
						>{new Date(post.date).toLocaleDateString('en-US', {
							year: 'numeric',
							month: 'long',
							day: 'numeric'
						})}</time
					>
					<h1 class="text-4xl font-bold mb-4">{post.title}</h1>
					<p class="text-lg opacity-80">{post.excerpt}</p>
				</header>

				<div class="min-w-0">
					<MarkdownRenderer content={post.content} />
				</div>
			</div>
		</article>
	</div>
</div>
