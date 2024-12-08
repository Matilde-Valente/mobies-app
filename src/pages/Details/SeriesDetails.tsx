import { useParams } from 'react-router-dom';
import Details from '../../components/Details';
import { useGetSeriesDetails } from '../../hooks/series/useGetSeriesDetails';
import LoadingState from './LoadingState';

export default function SeriesDetails() {
  const { id } = useParams();
  const { seriesDetails: details, isLoading } = useGetSeriesDetails({
    id,
  });

  return (
    <>
      {isLoading ? (
        <LoadingState />
      ) : details ? (
        <Details
          id={details.id}
          title={details.original_name}
          genres={details.genres}
          overview={details.overview}
          voteAverage={details.vote_average}
          backdropPath={details.backdrop_path}
          originalLanguage={details.original_language}
        />
      ) : (
        <p>Something went wrong</p>
      )}
    </>
  );
}
