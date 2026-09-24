import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { PageError } from '@/components/PageError';
import './index.css';
import './styles/design-system.scss';
import './styles/custom.scss';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary name="App" fallback={<PageError />}>
      <App />
    </ErrorBoundary>
  </StrictMode>
);
