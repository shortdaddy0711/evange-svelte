<script lang="ts">
  import SlideViewer from '$lib/components/SlideViewer.svelte';
  import type { PageServerData } from './$types';

  export let data: PageServerData;
</script>

<svelte:head>
  <title>God's Wonderful Plan — Slide {data.slideId}</title>
</svelte:head>

<SlideViewer initialSlide={data.slideId} />
