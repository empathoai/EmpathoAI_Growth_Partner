import { Outlet } from 'react-router-dom';
import Header from '../components/organisms/Header';
import Footer from '../components/organisms/Footer';

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-canvas selection:bg-accent selection:text-on-accent">
      {/* Skip to content link for accessibility */}
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:p-md focus:bg-accent focus:text-on-accent">
        Skip to content
      </a>

      <Header />

      {/* PAGE CONTENT */}
      <main id="main-content" className="flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
