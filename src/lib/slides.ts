export type SlideType = 'intro' | 'center-card' | 'content' | 'contact';

export interface Slide {
  id: number;
  type: SlideType;
  image: string;
  /** true = FAB button + card with swipe lock */
  hasCard: boolean;
}

export const slides: Slide[] = [
  { id: 1,  type: 'intro',       image: '/images/page1.png',  hasCard: false },
  { id: 2,  type: 'center-card', image: '/images/page2.png',  hasCard: false },
  { id: 3,  type: 'content',     image: '/images/page3.png',  hasCard: true  },
  { id: 4,  type: 'content',     image: '/images/page4.png',  hasCard: true  },
  { id: 5,  type: 'content',     image: '/images/page5.png',  hasCard: true  },
  { id: 6,  type: 'content',     image: '/images/page6.png',  hasCard: true  },
  { id: 7,  type: 'content',     image: '/images/page7.png',  hasCard: true  },
  { id: 8,  type: 'content',     image: '/images/page8.png',  hasCard: true  },
  { id: 9,  type: 'content',     image: '/images/page9.png',  hasCard: true  },
  { id: 10, type: 'content',     image: '/images/page10.png', hasCard: true  },
  { id: 11, type: 'content',     image: '/images/page11.png', hasCard: true  },
  { id: 12, type: 'content',     image: '/images/page12.png', hasCard: true  },
  { id: 13, type: 'content',     image: '/images/page13.png', hasCard: true  },
  { id: 14, type: 'content',     image: '/images/page14.png', hasCard: true  },
  { id: 15, type: 'content',     image: '/images/page15.png', hasCard: true  },
  { id: 16, type: 'contact',     image: '/images/page2.png',  hasCard: false },
];

export const TOTAL_SLIDES = slides.length;
