
import { NavItem } from "@/types/navigation";

export const navItems: NavItem[] = [
  { label: "Hem", path: "/" },
  { label: "Om Lärkberget", path: "/om-larkberget" },
  { 
    label: "Investerare", 
    path: "/investerare",
    hasDropdown: true,
    submenu: [
      { label: "Kalendarium", path: "/investerare/kalendarium" },
      { label: "Finansiella rapporter", path: "/investerare/finansiella-rapporter" },
      { label: "Bolags- och aktieinformation", path: "/investerare/aktieagare" },
      { label: "Prospekt/IM", path: "/investerare/prospekt-im" },
      { label: "Nasdaq First North Growth Market", path: "https://www.nasdaq.com/european-market-activity/shares/combi?id=SSE165139", external: true },
      { 
        label: "Bolagsstyrning", 
        path: "#", 
        isCategory: true,
        submenu: [
          { label: "Bolagsstämmor", path: "/investerare/bolagsstyrning/bolagsstammor" },
          { label: "Bolagsordning", path: "/investerare/bolagsstyrning/bolagsordning" },
          { label: "Bolagsbeskrivning", path: "/investerare/bolagsstyrning/bolagsbeskrivning" }
        ]
      }
    ]
  },
  { label: "Pressmeddelanden", path: "/pressmeddelanden" },
  { label: "Kontakt", path: "/kontakt" }
];
