export type SlideType = 'intro' | 'center-card' | 'content' | 'contact';

// 콘텐츠 블록 타입
export type Block =
  | { type: 'title'; key: string }
  | { type: 'body'; key: string }
  | { type: 'quote'; key: string; cite?: string }
  | { type: 'text-cite'; textKey: string; citeKey?: string }
  | { type: 'prayer'; key: string }
  | { type: 'question'; key: string }
  | { type: 'spacer' };

export interface Slide {
  id: number;
  type: SlideType;
  image: string;
  hasCard: boolean;
  blocks?: Block[];
}

export const slides: Slide[] = [
  {
    id: 1,
    type: 'intro',
    image: '/images/page1.png',
    hasCard: false,
  },
  {
    id: 2,
    type: 'center-card',
    image: '/images/page2.png',
    hasCard: false,
  },
  {
    id: 3,
    type: 'content',
    image: '/images/page3.png',
    hasCard: true,
    blocks: [
      { type: 'title', key: 'slide3_title' },
      { type: 'body', key: 'slide3_body' },
    ],
  },
  {
    id: 4,
    type: 'content',
    image: '/images/page4.png',
    hasCard: true,
    blocks: [
      { type: 'title', key: 'slide4_title' },
      { type: 'body', key: 'slide4_body' },
    ],
  },
  {
    id: 5,
    type: 'content',
    image: '/images/page5.png',
    hasCard: true,
    blocks: [
      { type: 'quote', key: 'slide5_quote', cite: undefined },
      { type: 'body', key: 'slide5_body' },
    ],
  },
  {
    id: 6,
    type: 'content',
    image: '/images/page6.png',
    hasCard: true,
    blocks: [
      { type: 'title', key: 'slide6_title' },
      { type: 'body', key: 'slide6_body' },
    ],
  },
  {
    id: 7,
    type: 'content',
    image: '/images/page7.png',
    hasCard: true,
    blocks: [
      { type: 'title', key: 'slide7_title' },
      { type: 'quote', key: 'slide7_quote' },
      { type: 'spacer' },
      { type: 'body', key: 'slide7_body' },
    ],
  },
  {
    id: 8,
    type: 'content',
    image: '/images/page8.png',
    hasCard: true,
    blocks: [
      { type: 'title', key: 'slide8_title' },
      { type: 'quote', key: 'slide8_quote' },
      { type: 'body', key: 'slide8_body' },
      { type: 'spacer' },
      { type: 'question', key: 'slide8_question' },
    ],
  },
  {
    id: 9,
    type: 'content',
    image: '/images/page9.png',
    hasCard: true,
    blocks: [
      { type: 'quote', key: 'slide9_quote', cite: 'slide9_cite' },
      { type: 'body', key: 'slide9_body1' },
      { type: 'prayer', key: 'slide9_prayer' },
      { type: 'body', key: 'slide9_body2' },
      { type: 'quote', key: 'slide9_quote2', cite: 'slide9_cite2' },
    ],
  },
  {
    id: 10,
    type: 'content',
    image: '/images/page10.png',
    hasCard: true,
    blocks: [
      { type: 'text-cite', textKey: 'slide10_text1', citeKey: 'slide10_cite1' },
      { type: 'spacer' },
      { type: 'text-cite', textKey: 'slide10_text2', citeKey: 'slide10_cite2' },
      { type: 'spacer' },
      { type: 'text-cite', textKey: 'slide10_text3', citeKey: 'slide10_cite3' },
      { type: 'spacer' },
      { type: 'text-cite', textKey: 'slide10_text4' },
    ],
  },
  {
    id: 11,
    type: 'content',
    image: '/images/page11.png',
    hasCard: true,
    blocks: [
      { type: 'text-cite', textKey: 'slide11_text1', citeKey: 'slide11_cite1' },
      { type: 'spacer' },
      { type: 'text-cite', textKey: 'slide11_text2', citeKey: 'slide11_cite2' },
      { type: 'spacer' },
      { type: 'text-cite', textKey: 'slide11_text3', citeKey: 'slide11_cite3' },
      { type: 'spacer' },
      { type: 'text-cite', textKey: 'slide11_text4', citeKey: 'slide11_cite4' },
    ],
  },
  {
    id: 12,
    type: 'content',
    image: '/images/page12.png',
    hasCard: true,
    blocks: [
      { type: 'text-cite', textKey: 'slide12_text1', citeKey: 'slide12_cite1' },
      { type: 'spacer' },
      { type: 'text-cite', textKey: 'slide12_text2', citeKey: 'slide12_cite2' },
      { type: 'spacer' },
      { type: 'text-cite', textKey: 'slide12_text3', citeKey: 'slide12_cite3' },
    ],
  },
  {
    id: 13,
    type: 'content',
    image: '/images/page13.png',
    hasCard: true,
    blocks: [
      { type: 'text-cite', textKey: 'slide13_text1', citeKey: 'slide13_cite1' },
      { type: 'spacer' },
      { type: 'text-cite', textKey: 'slide13_text2', citeKey: 'slide13_cite2' },
    ],
  },
  {
    id: 14,
    type: 'content',
    image: '/images/page14.png',
    hasCard: true,
    blocks: [
      { type: 'text-cite', textKey: 'slide14_text1', citeKey: 'slide14_cite1' },
      { type: 'spacer' },
      { type: 'text-cite', textKey: 'slide14_text2' },
    ],
  },
  {
    id: 15,
    type: 'content',
    image: '/images/page15.png',
    hasCard: true,
    blocks: [
      { type: 'text-cite', textKey: 'slide15_text1', citeKey: 'slide15_cite1' },
      { type: 'spacer' },
      { type: 'text-cite', textKey: 'slide15_text2' },
    ],
  },
  {
    id: 16,
    type: 'contact',
    image: '/images/page2.png',
    hasCard: false,
  },
];

export const TOTAL_SLIDES = slides.length;
