import { useEffect, useState } from 'react';
import { getSeriesDetails } from '../../api/getPopularSeries';
import { SeriesDetails } from '../../types';

// custom hook to fetch series details based on the provided ID
export function useGetSeriesDetails({ id }: { id: string | undefined }) {
  const [seriesDetails, setSeriesDetails] = useState<SeriesDetails>();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    async function fetchSeriesDetails() {
      try {
        if (!id) {
          return;
        }
        const response = await getSeriesDetails({ id });
        setSeriesDetails(response);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error('Error fetching series details:', error);
      }
    }

    fetchSeriesDetails();
  }, [id]);

  return { seriesDetails, isLoading: loading };
}
