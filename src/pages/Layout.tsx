import { Outlet, useLocation } from 'react-router-dom';
import Navigation from '../components/Navigation';

export default function Layout() {
  const { pathname } = useLocation();

  return (
    <div className={pathname === '/' ? '' : 'bg-black'}>
      <Navigation pathname={pathname} />
      <main
        className={
          'flex min-h-screen flex-col container mx-auto py-24 sm:py-32 gap-6 sm:gap-10'
        }
      >
        <Outlet />
      </main>
    </div>
  );
}
