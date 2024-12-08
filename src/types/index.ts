export interface BaseResponse {
  id: string;
  backdrop_path: string;
  poster_path: string;
  genre_ids: Array<number>;
  original_language: string;
  overview: string;
  popularity: number;
  vote_average: number;
  vote_count: number;
}

interface DetailsBaseResponse {
  first_air_date: string;
  origin_country: Array<string>;
  production_companies: Array<{
    id: number;
    logo_path: string;
    name: string;
    origin_country: string;
  }>;
  genres: Array<Genre>;
  production_countries: Array<{ iso_3166_1: string; name: string }>;
  spoken_languages: Array<string>;
  status: string;
  tagline: string;
}

export interface Genre {
  id: number;
  name: string;
}

export interface Movie extends BaseResponse {
  adult: boolean;
  original_title: string;
  release_date: string;
  title: string;
  video: boolean;
}

export interface MovieDetails extends Movie, DetailsBaseResponse {
  original_name: string;
  belongs_to_collection: {
    id: number;
    name: string;
    poster_path: string;
    backdrop_path: string;
  };
  budget: number;
  imdb_id: string;
  release_date: string;
  revenue: number;
  runtime: number;
}

export interface Series extends BaseResponse {
  first_air_date: string;
  origin_country: Array<string>;
  original_name: string;
}

export interface SeriesDetails extends Series, DetailsBaseResponse {
  in_production: boolean;
  episodes_runtime: Array<number>;
  number_of_episodes: number;
  number_of_seasons: number;
  seasons: Array<{
    air_date: string;
    episode_count: number;
    id: number;
    name: string;
    overview: string;
    poster_path: string;
    season_number: number;
    vote_average: number;
  }>;
}
