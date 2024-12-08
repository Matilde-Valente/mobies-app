import cn from 'classnames';
import { useState } from 'react';
import { IoClose, IoMenuOutline, IoSearch } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

const Navigation = ({ pathname }: { pathname: string }) => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState<boolean>(false);

  return (
    <header
      className={cn(
        'flex flex-col py-4 fixed z-50 sm:backdrop-blur w-full',
        pathname === '/' || pathname === '/search'
          ? 'sm:bg-[#00050d]/10 bg-[#00050d]'
          : 'sm:bg-[#00050d]/80 bg-[#00050d]'
      )}
    >
      <div className='container flex mx-auto justify-between'>
        <div className='gap-20 flex items-center justify-between'>
          <a href='/'>
            <h1 className='sm:text-4xl text-2xl font-bold tracking-[0.2em]'>
              <span className='text-[#006aff]'>MOBI</span>ES
            </h1>
          </a>
          <nav className='hidden sm:flex justify-between items-center gap-4'>
            <a
              href='/'
              className=' duration-300 transition-colors ease-in-out hover:text-gray-500'
            >
              Home
            </a>
          </nav>
        </div>
        <div className='flex gap-4'>
          <button
            className='hover:bg-white/20 rounded py-1 px-2 ease-in-out transition-colors'
            onClick={() => navigate('/search')}
          >
            <IoSearch size='24px' />
          </button>
          {/* mobile burger menu */}
          <nav className='sm:hidden flex self-center flex-col items-end gap-1 font-semibold'>
            <button
              onClick={() => setShowMenu(!showMenu)}
              className='sm:hidden size-6 text-xl hover:text-gray-500'
            >
              {showMenu ? <IoClose /> : <IoMenuOutline size='24px' />}
            </button>
          </nav>
        </div>
      </div>
      {/* mobile menu */}
      {showMenu && (
        <div className='h-screen container mx-auto pt-10'>
          <a href='/' className='hover:text-gray-500'>
            Home
          </a>
        </div>
      )}
    </header>
  );
};

export default Navigation;
