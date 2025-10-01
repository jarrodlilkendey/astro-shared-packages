export type NavLink = {
  label: string;
  href: string;
  external?: boolean;
  icon?: unknown;
  children?: NavLink[];
};
