import { useEffect, useState } from 'react';
import { getSearch } from '../../api/getSearch';
import { Movie, Series } from '../../types';

// custom hook to fetch tv series and movies based on a search query
export function useGetSearch({ search }: { search: string } = { search: '' }) {
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    async function fetchSearch() {
      try {
        // fetch movies based on the search query
        const moviesResponse = await getSearch({ type: 'movie', search });
        // fetch tv series based on the search query
        const seriesResponse = await getSearch({ type: 'tv', search });

        // add type property to each result to differentiate between movies and tv series
        const movies = moviesResponse.results.map((movie: Movie) => ({
          ...movie,
          type: 'movie',
        }));
        const series = seriesResponse.results.map((series: Series) => ({
          ...series,
          type: 'tv',
        }));

        // combine both results
        setSearchResults(movies.concat(series));
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error('Error fetching popular series:', error);
      }
    }

    fetchSearch();
  }, [search]);

  return { searchResults, isLoading: loading };
}
