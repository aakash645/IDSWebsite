/**
 * Menu Types
 * Types for navigation menu items and mega menu categories
 */

export interface MenuCategory {
  title: string;
  items: MenuSubItem[];
}

export interface MenuSubItem {
  label: string;
  path?: string;
}

export interface MenuItem {
  name: string;
  path: string;
  description?: string;
  icon?: string;
  subItems?: MenuItem[];
  megaMenu?: MenuCategory[];
}
