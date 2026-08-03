import { BiHomeAlt2 } from "react-icons/bi";
import { FaRegFolderOpen } from "react-icons/fa";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { MdOutlineDashboard } from "react-icons/md";

const configMenu = [
  {
    icon: BiHomeAlt2,
    label: "Home",
    link: "/home",
  },
  {
    icon: HiOutlineUserGroup,
    label: "Team",
    link: "/team",
  },
  {
    icon: MdOutlineDashboard,
    label: "Projects",
    link: "/projects",
  },
  {
    icon: FaRegFolderOpen,
    label: "Documents",
    link: "/documents",
  },
];

export default configMenu;
