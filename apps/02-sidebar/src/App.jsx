import NavMenu from "./components/NavMenu";
import { useLocation } from "react-router";

function App() {
  const location = useLocation();
  const PageName =
    location.pathname != "/" ? location.pathname.slice(1) : "home";
  return (
    <>
      <NavMenu />
      <p>sidebar</p>
      <h2>{PageName}</h2>
    </>
  );
}

export default App;
