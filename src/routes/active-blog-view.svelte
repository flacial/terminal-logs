<script lang="ts">
	let { children } = $props();
</script>

<section class="view">
	{@render children()}
</section>

<style>
    .view {
        border-inline: 3px solid var(--surface-2);
        border-top: 40px solid var(--surface-2);
        padding: var(--size-5);
        border-bottom: 3px solid var(--surface-2);

        p {
            color: var(--text-body);
        }

        p:not(:last-child) {
            margin-bottom: var(--size-2);
        }
    }
</style>

