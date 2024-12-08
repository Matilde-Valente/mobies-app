import cn from 'classnames';
import { NavLink } from 'react-router-dom';
import { BaseResponse } from '../types';

interface Props {
  href: string;
  title: string;
  poster_path: BaseResponse['poster_path'];
  className?: string;
}

// This item is used as a preview of a movie or tv show
const Item = ({ href, title, poster_path, className }: Props) => {
  return (
    <div
      className={cn(
        className,
        'group flex relative rounded cursor-pointer hover:drop-shadow-[0_0px_5px_rgba(255,255,255,0.10)]'
      )}
    >
      {title ? (
        <NavLink to={href}>
          <img
            src={import.meta.env.VITE_IMG_URL + poster_path}
            alt={title}
            className='rounded'
          />
          <div className='bg-black/30 transition-opacity ease-in-out duration-300 opacity-0 group-hover:opacity-100 top-0 absolute z-50 h-full w-full p-3'>
            <h3 className='font-sans font-semibold break-words'>{title}</h3>
          </div>
        </NavLink>
      ) : (
        <div className='group flex relative rounded cursor-pointer animate-pulse'>
          <div className='h-full w-full bg-gray-200 rounded'></div>
          <div className='absolute top-0 bottom-0 h-full w-full p-3'>
            <div className='bg-gray-200 rounded mt-2'></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Item;
