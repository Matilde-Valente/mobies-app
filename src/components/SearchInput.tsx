import { IoSearchOutline } from 'react-icons/io5';

const SearchInput = ({ setSearch }: { setSearch: (value: string) => void }) => {
  return (
    <div className='relative flex w-full'>
      <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
        <IoSearchOutline className='text-gray-400' />
        <span className='sr-only'>Search icon</span>
      </div>
      <input
        type='text'
        id='search-navbar'
        className='block w-full p-2 pl-10 text-sm h-12 text-white border border-gray-300 rounded-lg bg-gray-50/10 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700/10 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
        placeholder='Find movies and TV shows...'
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchInput;
