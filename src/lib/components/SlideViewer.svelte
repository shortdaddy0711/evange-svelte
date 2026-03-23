<script lang="ts">
  import { onMount } from "svelte";
  import { goto } from "$app/navigation";
  import { slides, TOTAL_SLIDES } from "$lib/slides";
  import SlideContent from "./SlideContent.svelte";

  export let initialSlide: number = 1;

  // initialSlide prop이 바뀌면 (페이지 이동 시) 반응
  $: currentSlide = initialSlide;

  let cardOpen = false;
  let direction: "up" | "down" = "down";
  let animating = false;

  // initialSlide가 바뀔 때마다 카드 닫기
  $: if (initialSlide) cardOpen = false;

  // Slides that require card-open before navigating to next
  const LOCKED_SLIDES = new Set([3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);

  $: swipeLocked = LOCKED_SLIDES.has(currentSlide) && !cardOpen;
  $: slide = slides.find((s) => s.id === currentSlide)!;

  function openCard() {
    cardOpen = true;
  }

  function goToSlide(id: number) {
    if (id < 1 || id > TOTAL_SLIDES) return;
    if (animating) return;
    direction = id > currentSlide ? "up" : "down";
    animating = true;
    setTimeout(() => {
      animating = false;
    }, 400);
    goto(`/slide/${id}`, {
      replaceState: false,
      noScroll: true,
      keepFocus: true,
    });
  }

  // Touch / swipe handling
  let touchStartY = 0;
  let touchStartX = 0;

  function onTouchStart(e: TouchEvent) {
    touchStartY = e.touches[0].clientY;
    touchStartX = e.touches[0].clientX;
  }

  function onTouchEnd(e: TouchEvent) {
    if (swipeLocked) return;
    const dy = touchStartY - e.changedTouches[0].clientY;
    const dx = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(dy) < 50 || Math.abs(dy) < Math.abs(dx)) return;
    if (dy > 0) {
      goToSlide(currentSlide + 1);
    } else {
      goToSlide(currentSlide - 1);
    }
  }

  // Keyboard arrow navigation
  function onKeyDown(e: KeyboardEvent) {
    if (e.key === "ArrowDown" || e.key === "ArrowRight") {
      if (!swipeLocked) goToSlide(currentSlide + 1);
    } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
      goToSlide(currentSlide - 1);
    }
  }

  onMount(() => {
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  });

  // Background image map
  const bgMap: Record<number, string> = {
    1: "/images/page1.png",
    2: "/images/page2.png",
    3: "/images/page3.png",
    4: "/images/page4.png",
    5: "/images/page5.png",
    6: "/images/page6.png",
    7: "/images/page7.png",
    8: "/images/page8.png",
    9: "/images/page9.png",
    10: "/images/page10.png",
    11: "/images/page11.png",
    12: "/images/page12.png",
    13: "/images/page13.png",
    14: "/images/page14.png",
    15: "/images/page15.png",
    16: "/images/page2.png",
  };
</script>

<!-- Home button (첫 페이지로) -->
{#if currentSlide > 1}
  <button
    class="home-btn"
    aria-label="Go to first slide"
    on:click={() => goToSlide(1)}
  >
    Top
  </button>
{/if}

<!-- Pagination dots -->
<nav class="pagination" aria-label="Slide navigation">
  {#each slides as s}
    <button
      class="pagination-dot"
      class:active={currentSlide === s.id}
      aria-label="Go to slide {s.id}"
      on:click={() => goToSlide(s.id)}
    ></button>
  {/each}
</nav>

<!-- Single slide view -->
<div
  class="slide-wrapper"
  role="presentation"
  on:touchstart={onTouchStart}
  on:touchend={onTouchEnd}
>
  <!-- key로 슬라이드 바뀔 때마다 애니메이션 트리거 -->
  {#key currentSlide}
    <section id="slide{currentSlide}" class="slide-enter-{direction}">
      <!-- Background image -->
      <div class="bg-container">
        <img class="bg-img" src={bgMap[currentSlide]} alt="" />
      </div>

      <!-- Slide content -->
      {#if slide.hasCard}
        {#if !cardOpen}
          <button
            class="card-trigger-btn"
            aria-label="Read content"
            on:click={openCard}
          >
            📖
          </button>
        {:else if currentSlide < TOTAL_SLIDES}
          <button
            class="swipe-hint-btn"
            aria-label="Go to next slide"
            on:click={() => goToSlide(currentSlide + 1)}
          >
            ➔
          </button>
        {/if}

        <div class="content-box" class:expanded={cardOpen}>
          {#if cardOpen}
            <button class="card-close-btn" aria-label="Close card" on:click={() => { cardOpen = false; }}>✕</button>
          {/if}
          <SlideContent slideId={currentSlide} />
        </div>
      {:else}
        <SlideContent slideId={currentSlide} />
        {#if currentSlide < TOTAL_SLIDES}
          <button
            class="swipe-hint-btn"
            aria-label="Go to next slide"
            on:click={() => goToSlide(currentSlide + 1)}
          >
            ➔
          </button>
        {/if}
      {/if}
    </section>
  {/key}
</div>
