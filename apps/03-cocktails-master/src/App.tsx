import { Route, Routes } from "react-router";
import MainLayout from "./Layouts/MainLayout/MainLayout";
import HomePage from "./components/pages/HomePage/HomePage";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  );
}

export default App;
