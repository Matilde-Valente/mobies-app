import { IoPlay } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import { Genre } from '../types';

interface Props {
  id: string;
  title: string;
  voteAverage: number;
  releaseDate?: string;
  runtime?: number;
  originalLanguage: string;
  genres: Array<Genre>;
  overview: string;
  backdropPath: string;
}

export default function Details(props: Props) {
  const navigate = useNavigate();

  return (
    <div className='bg-black my-auto'>
      <img
        src={import.meta.env.VITE_IMG_URL + props?.backdropPath}
        alt={props?.title}
        className='absolute top-0 w-full h-full left-0 object-cover aspect-video'
      />
      <div className='bg-gradient-to-t absolute w-full h-full left-0 top-0 from-black to-transparent'></div>
      <div className='relative flex flex-col gap-10 sm:gap-14 justify-center'>
        <div className='text-white flex flex-col gap-y-6 sm:gap-y-8'>
          <h1 className='font-semibold text-4xl sm:text-6xl leading-tight sm:max-w-2xl'>
            {props?.title}
          </h1>
          <p className='max-w-4xl font-medium'>{props?.overview}</p>
          <div className='flex items-center gap-4 font-medium text-sm text-[#999]'>
            {props?.voteAverage && (
              <div className='flex'>
                <span>Rating: {props.voteAverage.toFixed(2)}</span>
              </div>
            )}
            {props?.releaseDate && (
              <span>{new Date(props.releaseDate).getFullYear()}</span>
            )}
            {props?.runtime && <span>{props.runtime} min</span>}
            {props?.originalLanguage && (
              <span>{props.originalLanguage.toUpperCase()}</span>
            )}
          </div>
          <div className='flex gap-4 flex-wrap'>
            {props?.genres &&
              props.genres.map((genre: { id: number; name: string }) => (
                <div className='bg-white/20 sm:text-base text-sm rounded px-2 py-1'>
                  <span>{genre.name}</span>
                </div>
              ))}
          </div>
        </div>
        <div>
          <button
            onClick={() => navigate(`/watch/${props.id}`)}
            className='flex gap-2 items-center font-semibold hover:bg-white/20 ease-in-out duration-300 transition-colors border-2 rounded border-white px-4 py-2 text-base'
          >
            <IoPlay size='20px' /> Watch
          </button>
        </div>
      </div>

      {}
    </div>
  );
}
