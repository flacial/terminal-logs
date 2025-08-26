<script lang="ts">
	import * as config from '$lib/config';
</script>

<nav>
	<a href="/" class="title">
		<b>{config.title}</b>
	</a>
	<div class="square"></div>
</nav>

<style>
	nav {
		padding: var(--size-1);
		background-color: var(--surface-2);
			display: flex;
			justify-content: space-between;
	}

	.title {
		text-transform: uppercase;
		color: var(--background);
	}

	.square {
			aspect-ratio: 1/1;
			height: 100%;
			background-color: var(--background);
	}
</style>
