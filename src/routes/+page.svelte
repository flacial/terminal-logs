<script lang="ts">
	import ActiveBlogView from './active-blog-view.svelte';
	import * as config from '$lib/config';

	let { data } = $props();
</script>

<svelte:head>
	<title>{config.title}</title>
</svelte:head>

<section class="wrapper">
	<ul class="logs">
		{#each data.logs as log (log.title)}
			<li class="log">
				<a href={log.slug} class="title">{log.title}</a>
			</li>
		{/each}
	</ul>
	<section>
		<ActiveBlogView>
			<data.latestLogMd.content />
		</ActiveBlogView>
	</section>

</section>

<style>


    .wrapper {
        display: grid;
        grid-template-columns: 1fr 2fr;
        gap: var(--size-10);
    }

    .logs {
        display: grid;
        gap: var(--size-7);
        list-style: none;
        padding: 0;

        .log {
            max-inline-size: 400px;
            block-size: 200px;
            border: 3px solid var(--surface-2);
            padding: var(--size-4);

            .title {
                font-size: var(--font-size-fluid-1);
                text-transform: uppercase;
                color: var(--text-heading);
            }
        }
    }
</style>
