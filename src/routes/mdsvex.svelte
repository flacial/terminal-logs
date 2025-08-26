<script context="module">
  import H1Custom from '$lib/components/h1.custom.svelte';
  import H2Custom from '$lib/components/h2.custom.svelte';
  import H3Custom from '$lib/components/h3.custom.svelte';
  import PCustom from '$lib/components/p.custom.svelte';
  import BlockquoteCustom from '$lib/components/blockquote.custom.svelte';
  import CodeCustom from '$lib/components/code.custom.svelte';
	import HrCustom from '$lib/components/hr.custom.svelte';
  
  export {
    H1Custom as h1,
    H2Custom as h2,
    H3Custom as h3,
    PCustom as p,
    BlockquoteCustom as blockquote,
    CodeCustom as code,
		HrCustom as hr,
  };
</script>

<slot />