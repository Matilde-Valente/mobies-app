import cn from 'classnames';
import { useEffect, useState } from 'react';
import { IoChevronBackOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

export default function Player() {
  const navigate = useNavigate();
  const [showArrow, setShowArrow] = useState(true);
  let timer: string | number | NodeJS.Timeout | undefined;

  useEffect(() => {
    // after the component mounts, set a timer to hide the arrow after 3 seconds
    setTimeout(() => setShowArrow(false), 3000);
  }, []);

  // on mouse move display the arrow, and clear the timer and show the arrow again after 3 seconds
  function handleMouseMove() {
    setShowArrow(true);
    clearTimeout(timer);
    setTimeout(() => setShowArrow(false), 3000);
  }

  return (
    <div className='relative'>
      <button
        onClick={() => navigate(-1)}
        className={cn(
          'absolute top-5 left-2 sm:top-5 sm:left-5 z-50 rounded-full hover:bg-white/20 p-2 duration-300 transition-all ease-in-out items-center',
          showArrow ? 'opacity-100' : 'sm:opacity-0 sm:pointer-events-none'
        )}
      >
        <IoChevronBackOutline size='24px' />
      </button>
      <video
        controls
        autoPlay
        playsInline
        className='h-screen w-screen'
        onMouseMove={handleMouseMove}
      >
        <source src={import.meta.env.VITE_VIDEO_URL} type='video/mp4' />
      </video>
    </div>
  );
}
