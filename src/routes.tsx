import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import { MainPage } from './pages/MainPage/MainPage';
import { PlacePage } from './pages/PlacePage/PlacePage';
import { AboutPage } from './pages/AboutPage/AboutPage';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path="/place/:id" element={<PlacePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};
