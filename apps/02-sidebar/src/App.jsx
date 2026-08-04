import { useLocation } from "react-router";
import SideBar from "./components/SideBar";

function App() {
  const location = useLocation();
  const PageName =
    location.pathname != "/" ? location.pathname.slice(1) : "home";
  return (
    <>
      <SideBar />
      <p>sidebar</p>
      <h2>{PageName}</h2>
    </>
  );
}

export default App;
