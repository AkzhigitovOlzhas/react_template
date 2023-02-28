import { appRoutes } from '@pages/routes';
import { Route, Routes } from 'react-router-dom';

export const AppRouter = () => (
    <Routes>
        {Object.values(appRoutes).map(({ element, path }) => (
            <Route key={path} path={path} element={element} />
        ))}
    </Routes>
);
