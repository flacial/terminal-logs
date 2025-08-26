import { json } from '@sveltejs/kit'
import type { Log } from '$lib/types'

async function getLogs() {
  let logs: Log[] = []

  const paths = import.meta.glob('/src/logs/*.md', { eager: true })

  for (const path in paths) {
    const file = paths[path]
    const slug = path.split('/').at(-1)?.replace('.md', '')

    if (file && typeof file === 'object' && 'metadata' in file && slug) {
      const metadata = file.metadata as Omit<Log, 'slug'>
      const log = { ...metadata, slug } satisfies Log

      if (log.published) logs.push(log)
    }
  }

  logs = logs.sort((first, second) =>
    new Date(second.date).getTime() - new Date(first.date).getTime()
  )

  return logs
}

export async function GET() {
  const logs = await getLogs()
  return json(logs)

}
