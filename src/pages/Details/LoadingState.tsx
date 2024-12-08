export default function LoadingState() {
  return (
    <div className='my-auto animate-pulse'>
      <div className='w-full h-full'></div>
      <div className='bg-gradient-to-t w-full h-full'></div>
      <div className='relative flex flex-col justify-center gap-10 sm:gap-14'>
        <div className='flex flex-col gap-6 sm:gap-8'>
          <div className='w-3/5 h-16 bg-gray-200/50 rounded mt-4'></div>
          <div className='w-full h-32 bg-gray-200/50 rounded mt-4'></div>
          <div className='flex items-center gap-4 text-[#999]'>
            <div className='w-20 h-4 bg-gray-200/50 rounded'></div>
            <div className='w-20 h-4 bg-gray-200/50 rounded'></div>
            <div className='w-20 h-4 bg-gray-200/50 rounded'></div>
            <div className='w-20 h-4 bg-gray-200/50 rounded'></div>
          </div>
        </div>
        <div>
          <button className='w-24 h-8 bg-gray-200/50 rounded pointer-events-none'></button>
        </div>
      </div>
    </div>
  );
}
