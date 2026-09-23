import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";

export const NAVBAR_LINKS = [
  {
    id: "home",
    label: "Accueil",
    link: "/",
  },
  {
    id: "favoris",
    label: "Favoris",
    link: "/favoris",
  },
  {
    id: "about",
    label: "À propos",
    link: "/about",
  },
] as const;

export const SOCIAL_LINKS = [
  {
    id: "instagram",
    href: "https://instagram.com",
    icon: <FaInstagram />,
    label: "Instagram",
  },
  {
    id: "facebook",
    href: "https://facebook.com",
    icon: <FaFacebookF />,
    label: "Facebook",
  },
  {
    id: "twitter",
    href: "https://twitter.com",
    icon: <FaTwitter />,
    label: "Twitter",
  },
] as const;
