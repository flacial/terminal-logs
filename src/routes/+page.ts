import type { Log } from '$lib/types'
import { getLogMarkdown } from '$lib/log.service';

export const load = async ({ fetch }) => {
  const response = await fetch('/api/logs')
  const logs: Log[] = await response.json()

  return { logs, latestLogMd: await getLogMarkdown(logs[0].slug) }
}
