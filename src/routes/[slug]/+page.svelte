<script lang="ts">
	import { formatDate } from '$lib/utils';

	let { data } = $props();
</script>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<article>
	<div class="heading">
		<a class="back-link" href="/">[back]</a>
		<hgroup>
			<h1>{data.meta.title}</h1>
			<p>Published at {formatDate(data.meta.date)}</p>
		</hgroup>
	</div>

	<div class="prose">
		<data.content />
	</div>
</article>

<style>
		.heading {
				display: flex;
				flex-direction: column;
				gap: var(--size-4);
		}

		.back-link {
				color: var(--purple-5);
		}

    article {
        max-inline-size: var(--size-content-3);
        margin-inline: auto;
    }

		.prose {
				margin-top: var(--size-8)
		}

		hgroup {
				display: flex;
				flex-direction: column;
				gap: var(--size-3);
		}

		hgroup p {
				color: var(--green-6)
		}
</style>
