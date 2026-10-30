import { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter, Navigate, useLocation, useRoutes } from 'react-router-dom';
import Home from './Pages/Home';
import Industry from './Pages/Industry';
import Prompts from './Pages/Prompts';
import PromptPack from './Pages/PromptPack';
import SiteHeader from './Components/SiteHeader';
import './styles/site.css';

// Client order page with a signature pad; loaded on demand so the main site stays light.
const OrderLink = lazy(() => import('./Pages/Link/index.jsx'));

// Scrolls to the top on page changes, or to the #section in the URL once the page has rendered it.
const ScrollManager = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      return undefined;
    }
    let frame;
    let tries = 0;
    const scrollToHash = () => {
      const target = document.getElementById(decodeURIComponent(hash.slice(1)));
      if (target) target.scrollIntoView();
      else if (tries++ < 60) frame = requestAnimationFrame(scrollToHash);
    };
    scrollToHash();
    return () => cancelAnimationFrame(frame);
  }, [pathname, hash]);

  return null;
};

const AppRoutes = () =>
  useRoutes([
    { path: '/', element: <Home /> },
    { path: '/industrias/:slug', element: <Industry /> },
    { path: '/prompts', element: <Prompts /> },
    { path: '/prompts/:slug', element: <PromptPack /> },
    { path: '/ai', element: <Navigate to="/" replace /> },
    { path: '/ia', element: <Navigate to="/" replace /> },
    {
      path: '/link/278',
      element: (
        <div className="ai-page">
          <SiteHeader />
          <div className="ai-container">
            <Suspense fallback={null}>
              <OrderLink />
            </Suspense>
          </div>
        </div>
      ),
    },
    { path: '*', element: <Navigate to="/" replace /> },
  ]);

function App() {
  return (
    <BrowserRouter>
      <ScrollManager />
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
