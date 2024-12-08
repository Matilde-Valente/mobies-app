import { getOptions } from './constants';

// Get all popular movies
export async function getPopularMovies() {
  return await fetch(`/api/movie/popular`, getOptions)
    .then((res) => res.json())
    .catch((err) => console.error(err));
}

// Get details of a movie by its ID
export async function getMovieDetails({ id }: { id: string | undefined }) {
  return await fetch(`/api/movie/${id}`, getOptions)
    .then((res) => res.json())
    .catch((err) => console.error(err));
}

// Get movies by genre
export async function getMoviesByGenre({ genreId }: { genreId: string }) {
  return await fetch(
    `/api/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${genreId}`,
    getOptions
  )
    .then((res) => res.json())
    .catch((err) => console.error(err));
}
