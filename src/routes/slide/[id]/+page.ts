import { error } from '@sveltejs/kit';
import { TOTAL_SLIDES } from '$lib/slides';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
  const id = parseInt(params.id, 10);

  if (isNaN(id) || id < 1 || id > TOTAL_SLIDES) {
    error(404, `Slide ${params.id} not found`);
  }

  return { slideId: id };
};
