<script lang="ts">
	import "../app.css";
	import favicon from "$lib/assets/favicon.svg";
	import { Button } from "$lib/components/ui/button";

	let { children } = $props();
	let count = $state(0);

	function handleClick() {
		count++;
	}
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<Button onclick={handleClick}>Click me</Button>
	<p>Count: {count}</p>
</svelte:head>

{@render children()}
