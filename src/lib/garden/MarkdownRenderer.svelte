<script lang="ts">
	import { marked } from 'marked';
	import type { MarkedOptions } from 'marked';

	export let content: string;

	// Configure marked options
	const options: MarkedOptions = {
		breaks: true,
		gfm: true
	};

	// Apply the options
	marked.setOptions(options);

	$: htmlContent = marked(content);
</script>

<div class="markdown-content">
	{@html htmlContent}
</div>

<style lang="postcss">
	/* Base markdown styles */
	.markdown-content :global(h1) {
		@reference text-3xl font-bold mt-8 mb-4;
	}

	.markdown-content :global(h2) {
		@reference text-2xl font-bold mt-6 mb-3;
	}

	.markdown-content :global(h3) {
		@reference text-xl font-semibold mt-5 mb-2;
	}

	.markdown-content :global(p) {
		@reference my-4 leading-7;
	}

	.markdown-content :global(ul),
	.markdown-content :global(ol) {
		@reference my-4 ml-6;
	}

	.markdown-content :global(li) {
		@reference my-2 ml-4;
	}

	.markdown-content :global(ul > li) {
		@reference list-[inside];
	}

	.markdown-content :global(ol > li) {
		@reference list-decimal;
	}

	.markdown-content :global(a) {
		@reference text-[var(--color-accent)] hover:underline;
	}

	.markdown-content :global(blockquote) {
		@reference border-l-4 border-[var(--color-accent)] pl-4 my-4 italic bg-[#ffffff08] py-2 rounded-r;
	}

	/* Code block styles */
	.markdown-content :global(pre) {
		@reference my-6 rounded-xl overflow-x-auto;
		background-color: #1e1e1e !important; /* Override hljs background */
	}

	.markdown-content :global(pre code) {
		@reference block p-4 text-sm font-mono;
	}

	/* Inline code styles */
	.markdown-content :global(:not(pre) > code) {
		@reference px-1.5 py-0.5 rounded text-sm font-mono bg-[#1e1e1e] text-[#e6e6e6];
	}

	/* Image styles */
	.markdown-content :global(img) {
		@reference max-w-full h-auto rounded-lg my-4;
	}

	/* Horizontal rule */
	.markdown-content :global(hr) {
		@reference my-8 border-t border-[#ffffff15];
	}

	/* Table styles */
	.markdown-content :global(table) {
		@reference w-full my-6 border-collapse;
	}

	.markdown-content :global(th),
	.markdown-content :global(td) {
		@reference border border-[#ffffff15] p-2;
	}

	.markdown-content :global(th) {
		@reference bg-[#ffffff08] font-semibold;
	}

	/* Code syntax highlighting */
	.markdown-content :global(pre) {
		@reference my-6 rounded-xl overflow-x-auto bg-[#1e1e1e] p-4;
	}

	.markdown-content :global(pre code) {
		@reference block text-sm font-mono text-[#e6e6e6];
	}

	/* Syntax highlighting - Using One Dark Pro inspired colors */
	.markdown-content :global(.language-javascript),
	.markdown-content :global(.language-typescript),
	.markdown-content :global(.language-js),
	.markdown-content :global(.language-ts) {
		color: #abb2bf;
	}

	/* Keywords */
	.markdown-content :global(.language-javascript) :global(.keyword),
	.markdown-content :global(.language-typescript) :global(.keyword) {
		color: #c678dd;
	}

	/* Strings */
	.markdown-content :global(.language-javascript) :global(.string),
	.markdown-content :global(.language-typescript) :global(.string) {
		color: #98c379;
	}

	/* Numbers */
	.markdown-content :global(.language-javascript) :global(.number),
	.markdown-content :global(.language-typescript) :global(.number) {
		color: #d19a66;
	}

	/* Function names */
	.markdown-content :global(.language-javascript) :global(.function),
	.markdown-content :global(.language-typescript) :global(.function) {
		color: #61afef;
	}

	/* Comments */
	.markdown-content :global(.language-javascript) :global(.comment),
	.markdown-content :global(.language-typescript) :global(.comment) {
		color: #5c6370;
		font-style: italic;
	}

	/* Operators */
	.markdown-content :global(.language-javascript) :global(.operator),
	.markdown-content :global(.language-typescript) :global(.operator) {
		color: #56b6c2;
	}

	/* Class names */
	.markdown-content :global(.language-javascript) :global(.class-name),
	.markdown-content :global(.language-typescript) :global(.class-name) {
		color: #e5c07b;
	}
</style>
