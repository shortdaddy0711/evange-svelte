<script lang="ts">
  import { t } from '$lib/i18n';

  export let slideId: number;
</script>

{#if slideId === 1}
  <p class="styled-text">{$t('slide1_text')}</p>

{:else if slideId === 2}
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

{:else if slideId === 3}
  <div class="card-inner">
    <h3>{$t('slide3_title')}</h3>
    <p>{$t('slide3_body')}</p>
  </div>

{:else if slideId === 4}
  <div class="card-inner">
    <h3>{$t('slide4_title')}</h3>
    <p>{$t('slide4_body')}</p>
  </div>

{:else if slideId === 5}
  <div class="card-inner">
    <p>
      <span class="normal-text">{$t('slide5_prefix')}</span>
      <span class="quote-text">{$t('slide5_quote')}</span>
    </p>
    <p class="normal-text">{$t('slide5_body')}</p>
  </div>

{:else if slideId === 6}
  <div class="card-inner">
    <h3>{$t('slide6_title')}</h3>
    <p class="normal-text">{$t('slide6_body')}</p>
  </div>

{:else if slideId === 7}
  <div class="card-inner">
    <h3>{$t('slide7_title')}</h3>
    <p>
      <span class="normal-text">{$t('slide7_prefix')}</span>
      <span class="quote-text">{$t('slide7_quote')}</span>
    </p>
    <br />
    <p class="normal-text">{$t('slide7_body')}</p>
  </div>

{:else if slideId === 8}
  <div class="card-inner">
    <h3>{$t('slide8_title')}</h3>
    <p class="quote-text">{$t('slide8_quote')}</p>
    <p class="normal-text">{$t('slide8_body')}</p>
    <br />
    <p class="question-text">{$t('slide8_question')}</p>
  </div>

{:else if slideId === 9}
  <div class="card-inner">
    <p>
      <span class="normal-text">{$t('slide9_prefix')}</span>
      <span class="quote-text">{$t('slide9_quote')}</span>
      <span class="citation">{$t('slide9_cite')}</span>
    </p>
    <br />
    <p class="normal-text">{$t('slide9_body1')}</p>
    <p class="quote-text">{$t('slide9_prayer')}</p>
    <p>
      <span class="normal-text">{$t('slide9_body2')}</span>
      <span class="quote-text">{$t('slide9_quote2')}</span>
      <span class="citation">{$t('slide9_cite2')}</span>
    </p>
  </div>

{:else if slideId === 10}
  <div class="card-inner">
    <p>
      <span class="five-thing-text">{$t('slide10_text1')}</span>
      <span class="citation">{$t('slide10_cite1')}</span>
    </p>
    <br />
    <p>
      <span class="five-thing-text">{$t('slide10_text2')}</span>
      <span class="citation">{$t('slide10_cite2')}</span>
    </p>
    <br />
    <p>
      <span class="five-thing-text">{$t('slide10_text3')}</span>
      <span class="citation">{$t('slide10_cite3')}</span>
    </p>
    <br />
    <p>
      <span class="five-thing-text">{$t('slide10_text4')}</span>
    </p>
  </div>

{:else if slideId === 11}
  <div class="card-inner">
    <p>
      <span class="five-thing-text">{$t('slide11_text1')}</span>
      <span class="citation">{$t('slide11_cite1')}</span>
    </p>
    <br />
    <p>
      <span class="five-thing-text">{$t('slide11_text2')}</span>
      <span class="citation">{$t('slide11_cite2')}</span>
    </p>
    <br />
    <p>
      <span class="five-thing-text">{$t('slide11_text3')}</span>
      <span class="citation">{$t('slide11_cite3')}</span>
    </p>
    <br />
    <p>
      <span class="five-thing-text">{$t('slide11_text4')}</span>
      <span class="citation">{$t('slide11_cite4')}</span>
    </p>
  </div>

{:else if slideId === 12}
  <div class="card-inner">
    <p>
      <span class="five-thing-text">{$t('slide12_text1')}</span>
      <span class="citation">{$t('slide12_cite1')}</span>
    </p>
    <br />
    <p>
      <span class="five-thing-text">{$t('slide12_text2')}</span>
      <span class="citation">{$t('slide12_cite2')}</span>
    </p>
    <br />
    <p>
      <span class="five-thing-text">{$t('slide12_text3')}</span>
      <span class="citation">{$t('slide12_cite3')}</span>
    </p>
  </div>

{:else if slideId === 13}
  <div class="card-inner">
    <p>
      <span class="five-thing-text">{$t('slide13_text1')}</span>
      <span class="citation">{$t('slide13_cite1')}</span>
    </p>
    <br />
    <p>
      <span class="five-thing-text">{$t('slide13_text2')}</span>
      <span class="citation">{$t('slide13_cite2')}</span>
    </p>
  </div>

{:else if slideId === 14}
  <div class="card-inner">
    <p>
      <span class="five-thing-text">{$t('slide14_text1')}</span>
      <span class="citation">{$t('slide14_cite1')}</span>
    </p>
    <br />
    <p>
      <span class="five-thing-text">{$t('slide14_text2')}</span>
    </p>
  </div>

{:else if slideId === 15}
  <div class="card-inner">
    <p>
      <span class="five-thing-text">{$t('slide15_text1')}</span>
      <span class="citation">{$t('slide15_cite1')}</span>
    </p>
    <br />
    <p>
      <span class="five-thing-text">{$t('slide15_text2')}</span>
    </p>
  </div>

{:else if slideId === 16}
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
