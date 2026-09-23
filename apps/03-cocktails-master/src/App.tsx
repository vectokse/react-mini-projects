import { Route, Routes } from "react-router";
import MainLayout from "./Layouts/MainLayout/MainLayout";
import HomePage from "./components/pages/HomePage/HomePage";
import CocktailDetailsPage from "./components/pages/CocktailDetailsPage/CocktailDetailsPage";
import AboutPage from "./components/pages/AboutPage/AboutPage";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/cocktail/:id" element={<CocktailDetailsPage />} />
        <Route path="about" element={<AboutPage />} />

      </Route>
    </Routes>
  );
}

export default App;
