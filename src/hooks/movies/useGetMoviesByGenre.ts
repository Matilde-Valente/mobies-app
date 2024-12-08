import { useEffect, useState } from 'react';
import { getMoviesByGenre } from '../../api/getPopularMovies';
import { Movie } from '../../types';

// custom hook to fetch movies by genre
export function useGetMoviesByGenre({ genreId }: { genreId: string }) {
  const [moviesByGenre, setMoviesByGenre] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  // useEffect hook to trigger the fetch operation when the `genreId` changes
  useEffect(() => {
    setLoading(true);
    async function fetchMoviesByGenre() {
      try {
        const response = await getMoviesByGenre({ genreId });
        setMoviesByGenre(response.results);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error('Error fetching popular movies:', error);
      }
    }

    fetchMoviesByGenre();
  }, [genreId]);

  return { moviesByGenre, isLoading: loading };
}
