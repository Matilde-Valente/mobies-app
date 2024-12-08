import { getOptions } from './constants';

// Get all popular series
export async function getPopularSeries() {
  return await fetch(`/api/tv/popular`, getOptions)
    .then((res) => res.json())
    .catch((err) => console.error(err));
}

// Get series details by ID
export async function getSeriesDetails({ id }: { id: string | undefined }) {
  return await fetch(`/api/tv/${id}`, getOptions)
    .then((res) => res.json())
    .catch((err) => console.error(err));
}
