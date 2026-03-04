<script lang="ts">
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';
  import { slides, TOTAL_SLIDES } from '$lib/slides';
  import SlideContent from './SlideContent.svelte';

  export let initialSlide: number = 1;

  let scrollContainer: HTMLElement;
  let currentSlide = initialSlide;

  // Per-slide card open state
  let cardOpen: boolean[] = Array(TOTAL_SLIDES + 1).fill(false);

  // Slides that require card-open before scrolling to next
  const LOCKED_SLIDES = new Set([3,4,5,6,7,8,9,10,11,12,13,14,15]);

  // Swipe is locked when on a locked slide AND card is not yet open
  $: swipeLocked = LOCKED_SLIDES.has(currentSlide) && !cardOpen[currentSlide];

  function openCard(slideId: number) {
    cardOpen[slideId] = true;
    cardOpen = [...cardOpen];
    // scroll lock is now released — no timing conflict!
  }

  onMount(() => {
    // Jump to initial slide without animation
    const slideEl = scrollContainer.children[initialSlide - 1] as HTMLElement;
    if (slideEl) {
      scrollContainer.scrollTop = slideEl.offsetTop;
    }

    // Detect settled slide AFTER scroll finishes — never interfere mid-scroll
    function onScrollSettled() {
      const slideHeight = scrollContainer.clientHeight;
      const idx = Math.round(scrollContainer.scrollTop / slideHeight) + 1;
      if (idx !== currentSlide) {
        currentSlide = idx;
        cardOpen[idx] = false;
        cardOpen = [...cardOpen];
        // Defer goto so it never touches layout during scroll
        requestAnimationFrame(() => {
          goto(`/slide/${idx}`, { replaceState: true, noScroll: true, keepFocus: true });
        });
      }
    }

    // Use scrollend (modern) with debounce fallback for older browsers
    let debounceTimer: ReturnType<typeof setTimeout>;
    const supportsScrollEnd = 'onscrollend' in scrollContainer;

    function onScroll() {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(onScrollSettled, 150);
    }

    if (supportsScrollEnd) {
      scrollContainer.addEventListener('scrollend', onScrollSettled, { passive: true });
    } else {
      scrollContainer.addEventListener('scroll', onScroll, { passive: true });
    }

    return () => {
      clearTimeout(debounceTimer);
      if (supportsScrollEnd) {
        scrollContainer.removeEventListener('scrollend', onScrollSettled);
      } else {
        scrollContainer.removeEventListener('scroll', onScroll);
      }
    };
  });

  function scrollToSlide(index: number) {
    const slideEl = scrollContainer.children[index] as HTMLElement;
    if (slideEl) {
      slideEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  // Background image map
  const bgMap: Record<number, string> = {
    1: '/images/page1.png',
    2: '/images/page2.png',
    3: '/images/page3.png',
    4: '/images/page4.png',
    5: '/images/page5.png',
    6: '/images/page6.png',
    7: '/images/page7.png',
    8: '/images/page8.png',
    9: '/images/page9.png',
    10: '/images/page10.png',
    11: '/images/page11.png',
    12: '/images/page12.png',
    13: '/images/page13.png',
    14: '/images/page14.png',
    15: '/images/page15.png',
    16: '/images/page2.png',
  };
</script>

<!-- Pagination dots -->
<nav class="pagination" aria-label="Slide navigation">
  {#each slides as slide}
    <button
      class="pagination-dot"
      class:active={currentSlide === slide.id}
      aria-label="Go to slide {slide.id}"
      on:click={() => scrollToSlide(slide.id - 1)}
    ></button>
  {/each}
</nav>

<!-- Scroll-snap container -->
<div
  class="scroll-container"
  class:scroll-locked={swipeLocked}
  bind:this={scrollContainer}
>
  {#each slides as slide}
    <div class="scroll-slide" data-idx={slide.id}>
      <section id="slide{slide.id}">
        <!-- Background image -->
        <div
          class="bg-layer"
          style="background-image: url('{bgMap[slide.id]}')"
        ></div>

        <!-- Slide content -->
        {#if slide.hasCard}
          <!-- FAB button (hidden once card opens) -->
          {#if !cardOpen[slide.id]}
            <button
              class="card-trigger-btn"
              aria-label="Read content"
              on:click={() => openCard(slide.id)}
            >
              📖
            </button>
          {/if}

          <!-- Card: expands from button position -->
          <div class="content-box" class:expanded={cardOpen[slide.id]}>
            <SlideContent slideId={slide.id} />
          </div>

        {:else}
          <!-- Slides 1, 2, 16: render content directly -->
          <SlideContent slideId={slide.id} />
        {/if}
      </section>
    </div>
  {/each}
</div>
