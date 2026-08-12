import { useState } from "react";
import Main from "./components/Main";
import SideBar from "./components/SideBar/SideBar";
import { SideBarContext } from "./context/SideBarContext";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const sideBarContextValue = {
    isOpen,
    setIsOpen,
  };

  return (
    <>
      <SideBarContext.Provider value={sideBarContextValue}>
        <SideBar />
        <Main />
      </SideBarContext.Provider>
    </>
  );
}

export default App;
