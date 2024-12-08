import { useEffect, useState } from 'react';
import { getMovieDetails } from '../../api/getPopularMovies';
import { MovieDetails } from '../../types';

// custom hook to fetch movie details based on the provided ID
export function useGetMovieDetails({ id }: { id: string | undefined }) {
  const [movieDetails, setMovieDetails] = useState<MovieDetails>();
  const [loading, setLoading] = useState<boolean>(false);

  // useEffect hook to trigger the fetch operation when the `id` changes
  useEffect(() => {
    setLoading(true);
    async function fetchMovieDetails() {
      try {
        const response = await getMovieDetails({ id });
        setMovieDetails(response);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error('Error fetching movie details:', error);
      }
    }

    fetchMovieDetails();
  }, [id]);

  return { movieDetails, isLoading: loading };
}
