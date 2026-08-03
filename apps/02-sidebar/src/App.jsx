import MenuItem from "./components/MenuItem";
import { MdOutlineDashboard } from "react-icons/md";

function App() {
  return (
    <>
      <p>sidebar</p>
      <MenuItem
        icon={<MdOutlineDashboard />}
        label="Dashboard"
        isActive={true}
        Link={"/"}
      />
    </>
  );
}

export default App;
