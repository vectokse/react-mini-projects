import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";

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
