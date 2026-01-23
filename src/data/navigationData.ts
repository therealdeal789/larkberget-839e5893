
import { NavItem } from "@/types/navigation";

export const navItems: NavItem[] = [
  { label: "Hem", path: "/" },
  { label: "Om Lärkberget", path: "/om-larkberget" },
  { label: "Pressmeddelanden", path: "/pressmeddelanden" },
  { 
    label: "Investerare", 
    path: "/investerare",
    hasDropdown: true,
    submenu: [
      { label: "Kalendarium", path: "/investerare/kalendarium" },
      { label: "Finansiella rapporter", path: "/investerare/finansiella-rapporter" },
      { label: "Bolags- och aktieinformation", path: "/investerare/aktieagare" },
      { label: "NAV", path: "/investerare/nav" },
      { label: "Prospekt/IM", path: "/investerare/prospekt-im" },
      { 
        label: "Bolagsstyrning", 
        path: "#", 
        isCategory: true,
        submenu: [
          { label: "Ledning & Styrelse", path: "/kontakt" },
          { label: "Bolagsstämmor", path: "/investerare/bolagsstyrning/bolagsstammor" },
          { label: "Bolagsordning", path: "/investerare/bolagsstyrning/bolagsordning" },
          { label: "Bolagsbeskrivning", path: "/investerare/bolagsstyrning/bolagsbeskrivning" }
        ]
      }
    ]
  },
  { label: "Kontakt", path: "/kontakt" }
];
