import { appUrls } from '@routes/appUrls';
import { AppRoute } from '@routes/types';
import { About } from './About';
import { Home } from './Home';

export const appRoutes: AppRoute[] = [
  {
    path: appUrls.home,
    element: <Home />,
  },
  {
    path: appUrls.about,
    element: <About />,
  },
  {
    path: appUrls.notFound,
    element: <div>NOT FOUND</div>,
  },
];
