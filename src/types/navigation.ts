
export interface NavItem {
  label: string;
  path: string;
  hasDropdown?: boolean;
  external?: boolean;
  isCategory?: boolean;
  submenu?: NavItem[];
}
