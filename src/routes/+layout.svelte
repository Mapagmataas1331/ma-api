<script lang="ts">
	import Header from '$shared/components/Header.svelte';
	import { Toaster } from '$shared/components/ui/sonner/index.js';
	import '@/app.scss';

	let { children } = $props();
</script>

<Header profile={false} />

<Toaster />

{@render children?.()}
