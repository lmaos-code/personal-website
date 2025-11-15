interface Post {
	title: string;
	slug: string;
	excerpt: string;
	date: string;
	content: string;
	pinned: boolean;
}

// This will be filled by Vite's glob imports
const posts: Post[] = [];

const postFiles = import.meta.glob('/src/content/garden/*.md', {
	eager: true,
	query: '?raw' // contains raw import
});

// Process each module and add it to the posts array
for (const [path, content] of Object.entries(postFiles)) {
	// Extract frontmatter using a simple regex
	const fullMarkdown = (content as file).default;
	const frontmatterMatch = fullMarkdown.match(/^---\n([\s\S]*?)\n---/);
	const frontmatterRaw = frontmatterMatch ? frontmatterMatch[1] : '';

	// Parse frontmatter
	const metadata: Record<string, string> = {};
	frontmatterRaw.split('\n').forEach((line) => {
		const [key, ...valueParts] = line.split(':');
		if (key && valueParts.length) {
			metadata[key.trim()] = valueParts.join(':').trim();
		}
	});

	// Extract content (everything after frontmatter)
	const markdownContent = fullMarkdown.replace(/^---\n[\s\S]*?\n---/, '').trim();

	// Extract slug from filepath
	const slug = path.split('/').pop()?.replace('.md', '');

	if (slug) {
		posts.push({
			title: metadata.title || 'Untitled',
			slug,
			excerpt: metadata.excerpt || '',
			date: metadata.date || new Date().toISOString().split('T')[0],
			content: markdownContent,
			pinned: metadata.pinned ? true : false
		});
	}
}

// Sort posts by date, most recent first
posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
// if a post is supposed to be pinned, move it to the front
posts.sort((a, b) => (b.pinned === a.pinned ? 0 : b.pinned ? 1 : -1));

export function getAllPosts(): Post[] {
	return posts;
}

export function getPostBySlug(slug: string): Post | undefined {
	return posts.find((post) => post.slug === slug);
}
interface file {
	default: string;
}
