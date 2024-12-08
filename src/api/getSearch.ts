import { getOptions } from './constants';

// Get items by type and search query
export async function getSearch({
  type,
  search,
}: {
  type: 'movie' | 'tv';
  search: string;
}) {
  return await fetch(
    `/api/search/${type}?query=${search}&include_adult=false`,
    getOptions
  )
    .then((res) => res.json())
    .catch((err) => console.error(err));
}
