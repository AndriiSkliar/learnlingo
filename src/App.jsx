import { Route, Routes } from 'react-router-dom';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import FirstPage from 'pages/FirstPage/FirstPage';
import SecondPage from 'pages/SecondPage/SecondPage';
import HalfPage from 'pages/HalfPage/HalfPage';
import ErrorPage from 'pages/ErrorPage/ErrorPage';

// const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
// const ErrorPage = lazy(() => import('./pages/ErrorPage/ErrorPage'));
// const FavoritesPage = lazy(() => import('./pages/FavoritesPage/FavoritesPage'));
// const AddDrinkPage = lazy(() => import('./pages/AddDrinkPage/AddDrinkPage'));

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route path="/first" element={<FirstPage />} />
        <Route path="/second" element={<SecondPage />}>
          <Route path=":half" element={<HalfPage />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
}

export default App;
