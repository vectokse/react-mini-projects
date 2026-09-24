import { Route, Routes } from "react-router";
import MainLayout from "./Layouts/MainLayout/MainLayout";
import HomePage from "./components/pages/HomePage/HomePage";
import CocktailDetailsPage from "./components/pages/CocktailDetailsPage/CocktailDetailsPage";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/cocktail/:id" element={<CocktailDetailsPage />} />
      </Route>
    </Routes>
  );
}

export default App;
