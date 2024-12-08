/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { Navigation } from 'swiper/modules';
import { Swiper } from 'swiper/react';

import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';

import cn from 'classnames';
import { useRef } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';

interface Props {
  children: React.ReactNode;
  index: number;
  isLoading?: boolean;
}

const arrowStyles =
  'z-10 absolute top-0 h-full rounded bg-white/15 hover:bg-white/20 duration-300 flex items-center justify-center w-5 ease-in-out transition-colors';

const Carousel = ({ children, index, isLoading }: Props) => {
  const swiperRef = useRef<Swiper | null>(null);
  const swiper = swiperRef.current?.swiper;
  // slider breakpoints
  const breakpoints = {
    0: { slidesPerView: 3, spaceBetween: 10 },
    768: { slidesPerView: 5, spaceBetween: 20 },
    1024: { slidesPerView: 6, spaceBetween: 20 },
    1280: { slidesPerView: 6, spaceBetween: 40 },
  };

  return (
    <div className='relative'>
      <div className='w-full h-auto px-6'>
        <Swiper
          id={`carousel-${index}`}
          ref={swiperRef}
          modules={[Navigation]}
          slidesPerView={6}
          spaceBetween={30}
          navigation={{
            nextEl: `.arrow-right-${index}`,
            prevEl: `.arrow-left-${index}`,
          }}
          breakpoints={breakpoints}
          loop
        >
          {isLoading ? (
            // Loading skeletons
            <div
              className='flex'
              style={{
                gap: swiper.params.breakpoints[swiper.currentBreakpoint]
                  .spaceBetween,
              }}
            >
              {/* Get the slidesPerView value for the current breakpoint */}
              {Array.from({
                length: breakpoints[swiper.currentBreakpoint]?.slidesPerView,
              }).map((_, i) => (
                <div
                  key={i}
                  className='animate-pulse w-full aspect-[4/6] bg-gray-200/50 rounded'
                ></div>
              ))}
            </div>
          ) : (
            children
          )}
        </Swiper>
      </div>

      {/* Previous Arrow */}
      <button className={cn(arrowStyles, `left-0 arrow-left-${index}`)}>
        <IoChevronBackOutline />
      </button>

      {/* Next Arrow */}
      <button className={cn(arrowStyles, `right-0 arrow-right-${index}`)}>
        <IoChevronForwardOutline />
      </button>
    </div>
  );
};

export default Carousel;
