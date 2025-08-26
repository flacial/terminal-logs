<script lang="ts">
	import Header from './header.svelte';
	import Footer from './footer.svelte';

	import 'open-props/style';
	import 'open-props/normalize';
	import 'open-props/buttons';
	import '../app.css';

	let { children } = $props();
</script>

<div class="layout">
	<Header />

	<main>
		{@render children?.()}
	</main>

	<Footer />


<!--	<div id="key-actions">-->
<!--		<div class="key-actions-wrapper">-->
<!--			<div class="key-action">-->
<!--				<div>-->
<!--					<span>UP</span>-->
<!--					<span>/</span>-->
<!--					<span>DOWN</span>-->
<!--				</div>-->
<!--				<span>HIGHLIGHT</span>-->
<!--			</div>-->
<!--		</div>-->
<!--	</div>-->
</div>

<style>

    /*#key-actions {*/
    /*    position: fixed;*/
    /*    bottom: 10px;*/
    /*    inset-inline-start: 50%;*/
    /*    transform: translateX(-50%);*/

    /*    .key-actions-wrapper {*/
    /*        background: hsla(0, 0%, 0%, 0.7);*/
    /*        padding: var(--size-1);*/
    /*        width: 800px;*/

    /*        .key-action {*/
    /*            display: flex;*/
    /*            align-items: center;*/
    /*            gap: var(--size-3);*/
    /*        }*/
    /*    }*/

    /*    .action {}*/
    /*    .action-label {}*/
    /*    .action-dots {}*/
    /*}*/

	.layout {
			position: relative;
			max-width: 1200px;
		min-height: 100dvh;
		height: 100%;
		display: grid;
		grid-template-rows: auto 1fr auto;
		margin-inline: auto;
		padding-inline: var(--size-7);
		padding-block: var(--size-7);
	}

	main {
		padding-block: var(--size-9);
	}
</style>
