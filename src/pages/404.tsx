import { useNavigate } from 'react-router';

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className='flex-col gap-y-8 flex items-center my-auto justify-center'>
      <div className='text-center flex flex-col gap-y-4'>
        <div>
          <h1 className='font-bold text-6xl sm:text-9xl font-sans'>404</h1>
          <h2 className='font-bold text-2xl sm:text-4xl'>Page not found</h2>
        </div>
        <p className='font-body'>Sorry, we can't find this page</p>
      </div>
      <button
        className='border-[1.5px] border-white rounded px-4 py-1 hover:bg-white/10 ease-in-out transition-colors duration-150'
        onClick={() => navigate('/')}
      >
        Go Home
      </button>
    </div>
  );
}
