type GetLogMarkdownInput = string


export async function getLogMarkdown(logSlug: GetLogMarkdownInput) {
		const logMd = await import(`../logs/${logSlug}.md`)

		return {
			content: logMd.default,
			meta: logMd.metadata
		}
}
