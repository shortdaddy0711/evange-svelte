<script lang="ts">
  import { t } from '$lib/i18n';
  import { slides } from '$lib/slides';

  export let slideId: number;

  $: slide = slides.find(s => s.id === slideId)!;
</script>

{#if slide.type === 'intro'}
  <p class="styled-text">{$t('slide1_text')}</p>

{:else if slide.type === 'center-card'}
  <div class="card">
    <div class="card-content">
      <p class="normal-text">{$t('slide2_body1')}</p>
      <p>
        <span class="quote-text">{$t('slide2_quote1')}</span>
        <span class="citation">{$t('slide2_cite1')}</span>
      </p>
      <br />
      <p class="normal-text">{$t('slide2_body2')}</p>
      <p>
        <span class="quote-text" style="margin-bottom:0">{$t('slide2_quote2')}</span>
        <span class="citation">{$t('slide2_cite2')}</span>
      </p>
    </div>
  </div>

{:else if slide.type === 'content' && slide.blocks}
  <div class="card-inner">
    {#each slide.blocks as block}
      {#if block.type === 'title'}
        <h3>{$t(block.key)}</h3>

      {:else if block.type === 'body'}
        <p class="normal-text">{$t(block.key)}</p>

      {:else if block.type === 'quote'}
        <p>
          <span class="quote-text">{$t(block.key)}</span>
          {#if block.cite}<span class="citation">{$t(block.cite)}</span>{/if}
        </p>

      {:else if block.type === 'prayer'}
        <p class="quote-text">{$t(block.key)}</p>

      {:else if block.type === 'question'}
        <p class="question-text">{$t(block.key)}</p>

      {:else if block.type === 'text-cite'}
        <p>
          <span class="five-thing-text">{$t(block.textKey)}</span>
          {#if block.citeKey}<span class="citation">{$t(block.citeKey)}</span>{/if}
        </p>

      {:else if block.type === 'spacer'}
        <br />
      {/if}
    {/each}
  </div>

{:else if slide.type === 'contact'}
  <div class="card">
    <div class="card-content">
      <p class="normal-text">{$t('slide16_body')}</p>
      <br />
      <div style="display:flex; flex-direction:column; align-items:center; justify-content:center;">
        <div style="display:flex; align-items:center; gap:10px;">
          <img src="/images/phone.png" alt="Phone" />
          <span>{$t('slide16_phone')}</span>
        </div>
        <br />
        <div style="display:flex; align-items:center; gap:10px;">
          <img src="/images/house.png" alt="House" />
          <div>
            <p style="margin:0">{$t('slide16_address1')}</p>
            <p style="margin:0">{$t('slide16_address2')}</p>
          </div>
        </div>
      </div>
      <br />
      <div style="display:flex; justify-content:center; align-items:center;">
        <img src="/images/logo.png" alt="Maranatha Vision Church" style="width:200px;" />
      </div>
    </div>
  </div>
{/if}
