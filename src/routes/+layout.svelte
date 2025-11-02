<script lang="ts">
  import "../app.css";
  import favicon from "$lib/assets/favicon.svg";
  import { Button } from "$lib/components/ui/button";
  import { page } from "$app/stores";
  import {
    SITE_NAME,
    SITE_TITLE,
    SITE_DESCRIPTION,
    SITE_TWITTER,
    DEFAULT_OG_IMAGE,
    SITE_URL
  } from "$lib/site";

  let count = $state<number>(0);
  let { children } = $props();

  const canonical: string = $derived(`${SITE_URL.replace(/\/$/, '')}${$page.url.pathname}`);
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
  <link rel="canonical" href={canonical} />

  <title>{SITE_TITLE}</title>
  <meta name="description" content={SITE_DESCRIPTION} />

  <meta property="og:type" content="website" />
  <meta property="og:site_name" content={SITE_NAME} />
  <meta property="og:title" content={SITE_TITLE} />
  <meta property="og:description" content={SITE_DESCRIPTION} />
  <meta property="og:url" content={canonical} />
  <meta property="og:image" content={DEFAULT_OG_IMAGE} />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content={SITE_TWITTER} />
  <meta name="twitter:creator" content={SITE_TWITTER} />
  <meta name="twitter:title" content={SITE_TITLE} />
  <meta name="twitter:description" content={SITE_DESCRIPTION} />
  <meta name="twitter:image" content={DEFAULT_OG_IMAGE} />
</svelte:head>

<div class="p-4">
  <Button onclick={() => count++}>Click me</Button>
  <p>Count: {count}</p>
  {@render children()}
</div>
