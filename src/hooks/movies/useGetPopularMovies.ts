import { useEffect, useState } from 'react';
import { getPopularMovies } from '../../api/getPopularMovies';
import { Movie } from '../../types';

// custom hook to fetch all the popular movies
export function useGetPopularMovies() {
  const [popularMovies, setPopularMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    async function fetchPopularMovies() {
      try {
        const response = await getPopularMovies();
        setPopularMovies(response.results);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error('Error fetching popular movies:', error);
      }
    }

    fetchPopularMovies();
  }, []);

  return { popularMovies, isLoading: loading };
}
