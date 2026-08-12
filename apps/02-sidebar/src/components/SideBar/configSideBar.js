import { BiHomeAlt2 } from "react-icons/bi";
import { FaRegFolderOpen } from "react-icons/fa";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { MdOutlineDashboard } from "react-icons/md";

import { FiGithub } from "react-icons/fi";
import { TbBrandLinkedin } from "react-icons/tb";
import { FaXTwitter } from "react-icons/fa6";

export const configMenu = [
  { icon: BiHomeAlt2, label: "Home", link: "/home" },
  { icon: HiOutlineUserGroup, label: "Team", link: "/team" },
  { icon: MdOutlineDashboard, label: "Projects", link: "/projects" },
  { icon: FaRegFolderOpen, label: "Documents", link: "/documents" },
];

export const configSocials = [
  {
    link: "https://github.com/",
    icon: FiGithub,
    ariaLabel: "Visiter notre profil GitHub (s'ouvre dans un nouvel onglet)",
  },
  {
    link: "https://www.linkedin.com/",
    icon: TbBrandLinkedin,
    ariaLabel: "Visiter notre profil LinkedIn (s'ouvre dans un nouvel onglet)",
  },
  {
    link: "https://x.com",
    icon: FaXTwitter,
    ariaLabel: "Visiter notre profil X (s'ouvre dans un nouvel onglet)",
  },
];
