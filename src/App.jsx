import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Onboarding from './pages/Onboarding';
import Home from './pages/Home';
import SearchPage from './pages/SearchPage';
import DetailPage from './pages/DetailPage';

import Loadingscreen from './pages/Loadingscreen';

//* UseContext für Darkmode und Loadingscreen
import { LoadingContext } from './context/Context';
import { ThemeContext } from './context/Context';
import { FavoriteContext } from './context/Context';
import NavBar from './components/NavBar';
import Favorites from './pages/Favorites';
import Profile from './pages/Profile';
import useLocalStorage from './functions/useLocalStorage';

function App() {
  const [theme, setTheme] = useState(false);
  const [loading, setLoading] = useState(false);
  const [favorite, setFavorite] = useState([]);
  const [localFavorite] = useLocalStorage('favorites');

  useEffect(() => {
    if (localFavorite) {
      setFavorite(localFavorite);
    }
  }, [localFavorite]);

  return (
    <section className={theme ? 'dark' : null}>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <LoadingContext.Provider value={{ loading, setLoading }}>
          <FavoriteContext.Provider value={{ favorite, setFavorite }}>
            {loading ? (
              <BrowserRouter>
                <Routes>
                  <Route path="/" element={<Onboarding />} />
                  <Route
                    path="/home"
                    element={
                      <Home>
                        <NavBar activeName="home" />
                      </Home>
                    }
                  />
                  <Route
                    path="/search/:type/:name"
                    element={
                      <SearchPage>
                        <NavBar activeName="search" />
                      </SearchPage>
                    }
                  />
                  <Route
                    path="/detail/:id"
                    element={
                      <DetailPage>
                        <NavBar />
                      </DetailPage>
                    }
                  />
                  <Route
                    path="/favorites"
                    element={
                      <Favorites>
                        <NavBar activeName="favorites" />
                      </Favorites>
                    }
                  />
                  <Route
                    path="/profile"
                    element={
                      <Profile>
                        <NavBar activeName="profile" />
                      </Profile>
                    }
                  />
                </Routes>
              </BrowserRouter>
            ) : (
              <Loadingscreen />
            )}
          </FavoriteContext.Provider>
        </LoadingContext.Provider>
      </ThemeContext.Provider>
    </section>
  );
}

export default App;
