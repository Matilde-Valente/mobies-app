import { useState } from 'react';
import Item from '../components/Item';
import SearchInput from '../components/SearchInput';
import { useGetSearch } from '../hooks/search/useGetSearch';

export default function Search() {
  const [search, setSearch] = useState('');
  const { searchResults, isLoading } = useGetSearch({ search });

  return (
    <div className='flex flex-col gap-8 items-center justify-center'>
      <SearchInput setSearch={(value) => setSearch(value)} />
      <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 w-full flex-wrap justify-center'>
        {isLoading
          ? Array(12)
              .fill(null)
              .map((_) => (
                <div className='animate-pulse max-w-48 w-full aspect-[4/6] bg-gray-200/50 rounded'></div>
              ))
          : searchResults.map(
              (item: {
                id: string;
                poster_path: string;
                title: string;
                original_name: string;
                type: 'movie' | 'tv';
              }) => (
                <Item
                  href={
                    item.type === 'tv'
                      ? `/series/details/${item.id}`
                      : `/movies/details/${item.id}`
                  }
                  poster_path={item.poster_path}
                  title={item.original_name ?? item.title}
                />
              )
            )}
      </div>
    </div>
  );
}
