import { useEffect, useState } from 'react';
import { getPopularSeries } from '../../api/getPopularSeries';
import { Series } from '../../types';

// custom hook to fetch all the popular tv series
export function useGetPopularSeries() {
  const [popularSeries, setPopularSeries] = useState<Series[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    async function fetchPopularSeries() {
      try {
        const response = await getPopularSeries();
        setPopularSeries(response.results);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error('Error fetching popular series:', error);
      }
    }

    fetchPopularSeries();
  }, []);

  return { popularSeries, isLoading: loading };
}
