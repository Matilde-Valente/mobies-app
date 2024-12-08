import { SwiperSlide } from 'swiper/react';
import Carousel from '../components/Carousel';
import Item from '../components/Item';
import { useGetMoviesByGenre } from '../hooks/movies/useGetMoviesByGenre';
import { useGetPopularMovies } from '../hooks/movies/useGetPopularMovies';
import { useGetPopularSeries } from '../hooks/series/useGetPopularSeries';

export default function Homepage() {
  const { popularMovies: movies, isLoading: isLoadingMovies } =
    useGetPopularMovies();
  const { popularSeries: series, isLoading: isLoadingSeries } =
    useGetPopularSeries();
  const { moviesByGenre: romanceMovies, isLoading: isLoadingRomance } =
    useGetMoviesByGenre({ genreId: '10749' });
  const { moviesByGenre: comedyMovies, isLoading: isLoadingComedy } =
    useGetMoviesByGenre({ genreId: '35' });

  return (
    <>
      {/* Popular movies carousel */}
      <div className='flex flex-col sm:gap-y-4 gap-y-2'>
        <h2 className='font-sans font-semibold text-2xl sm:text-4xl'>
          Popular Movies
        </h2>
        <Carousel index={1} isLoading={isLoadingMovies}>
          {movies?.map((movie) => (
            <SwiperSlide key={movie.id}>
              <Item href={`/movies/details/${movie.id}`} {...movie} />
            </SwiperSlide>
          ))}
        </Carousel>
      </div>
      {/* Popular series carousel */}
      <div className='flex flex-col sm:gap-y-4 gap-y-2'>
        <h2 className='font-sans font-semibold text-2xl sm:text-4xl'>
          Popular TV Series
        </h2>
        <Carousel index={2} isLoading={isLoadingSeries}>
          {series?.map((series) => (
            <SwiperSlide key={series.id}>
              <Item
                href={`/series/details/${series.id}`}
                poster_path={series.poster_path}
                title={series.original_name}
              />
            </SwiperSlide>
          ))}
        </Carousel>
      </div>
      {/* Romance movies carousel */}
      <div className='flex flex-col sm:gap-y-4 gap-y-2'>
        <h2 className='font-sans font-semibold text-2xl sm:text-4xl'>
          Romance
        </h2>
        <Carousel index={3} isLoading={isLoadingRomance}>
          {romanceMovies?.map((movie) => (
            <SwiperSlide key={movie.id}>
              <Item href={`/movies/details/${movie.id}`} {...movie} />
            </SwiperSlide>
          ))}
        </Carousel>
      </div>
      {/* Comedy movies carousel */}
      <div className='flex flex-col sm:gap-y-4 gap-y-2'>
        <h2 className='font-sans font-semibold text-2xl sm:text-4xl'>Comedy</h2>
        <Carousel index={1} isLoading={isLoadingComedy}>
          {comedyMovies?.map((movie) => (
            <SwiperSlide key={movie.id}>
              <Item href={`/movies/details/${movie.id}`} {...movie} />
            </SwiperSlide>
          ))}
        </Carousel>
      </div>
    </>
  );
}
