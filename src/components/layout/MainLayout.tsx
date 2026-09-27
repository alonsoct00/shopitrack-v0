import { useEffect, useLayoutEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { PageError } from '@/components/PageError';

export function MainLayout() {
  const { pathname, hash } = useLocation();

  useLayoutEffect(() => {
    if (hash) return;
    // 'instant' evita la animación de scroll-behavior: smooth del html.
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname, hash]);

  useEffect(() => {
    document.documentElement.classList.add('reveal-ready');

    const elements = document.querySelectorAll<HTMLElement>('[data-reveal]');
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [pathname]);

  return (
    <div data-theme="shopitrack" className="site-shell">
      <ErrorBoundary name="Header">
        <Header />
      </ErrorBoundary>
      <main>
        <ErrorBoundary key={pathname} name={`Página ${pathname}`} fallback={<PageError />}>
          <Outlet />
        </ErrorBoundary>
      </main>
      <ErrorBoundary name="Footer">
        <Footer />
      </ErrorBoundary>
    </div>
  );
}
