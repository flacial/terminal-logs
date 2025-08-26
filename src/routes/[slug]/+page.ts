import { error } from '@sveltejs/kit';
import { getLogMarkdown } from '$lib/log.service';

export async function load({ params }) {
  try {
    return await getLogMarkdown(params.slug);
  } catch {
    error(404, `Could not find ${params.slug}`)
  }
}
