import { Route, Routes, useLocation } from 'react-router-dom';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import HomePage from 'pages/HomePage';
import TeachersPage from './pages/TeachersPage';
import FavoritesPage from './pages/FavoritesPage';

// const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
// const ErrorPage = lazy(() => import('./pages/ErrorPage/ErrorPage'));
// const FavoritesPage = lazy(() => import('./pages/FavoritesPage/FavoritesPage'));
// const AddDrinkPage = lazy(() => import('./pages/AddDrinkPage/AddDrinkPage'));

function App() {
  const location = useLocation();

  if(location.pathname === "/") {
    location.pathname = "/home";
  }

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route path="/home" element={<HomePage />} />
        <Route path="/teachers" element={<TeachersPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="*" redirectTo="/home" element={<HomePage />} />
      </Route>
    </Routes>
  );
}

export default App;
