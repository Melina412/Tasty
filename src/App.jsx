import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Onboarding from "./pages/Onboarding";
import Home from "./pages/Home";
import SearchPage from "./pages/SearchPage";
import DetailPage from "./pages/DetailPage";
import Loadingscreen from "./pages/Loadingscreen";

//* UseContext für Darkmode und Loadingscreen
import { LoadingContext } from "./context/Context";
import { ThemeContext } from "./context/Context";

function App() {
  const [theme, setTheme] = useState(false);
  const [loading, setLoading] = useState(false);

  return (
    <section className={theme ? "dark" : null}>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <LoadingContext.Provider value={{ loading, setLoading }}>
          {loading ? (
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Onboarding />} />
                <Route path="/home" element={<Home />} />
                <Route path="/search" element={<SearchPage />} />
                <Route path="/detail" element={<DetailPage />} />
              </Routes>
            </BrowserRouter>
          ) : (
            <Loadingscreen />
          )}
        </LoadingContext.Provider>
      </ThemeContext.Provider>
    </section>
  );
}

export default App;
