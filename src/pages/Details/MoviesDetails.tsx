import { useParams } from 'react-router-dom';
import Details from '../../components/Details';
import { useGetMovieDetails } from '../../hooks/movies/useGetMovieDetails';
import LoadingState from './LoadingState';

export default function MoviesDetails() {
  const { id } = useParams();
  const { movieDetails: details, isLoading } = useGetMovieDetails({
    id,
  });

  return (
    <>
      {isLoading ? (
        <LoadingState />
      ) : details ? (
        <Details
          id={details.id}
          title={details.title}
          genres={details.genres}
          runtime={details.runtime}
          overview={details.overview}
          releaseDate={details.release_date}
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
