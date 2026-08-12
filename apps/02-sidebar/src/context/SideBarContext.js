import { createContext } from "react";

export const SideBarContext = createContext({
  isOpen: false,
  setIsOpen: () => {},
});
