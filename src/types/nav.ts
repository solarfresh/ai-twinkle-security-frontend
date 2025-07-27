export interface NavMenuItem {
  label: string;
  iconName?: string; // Optional: The Heroicons name string (e.g., 'Play', 'ChevronDown')
  path?: string;     // Optional: The route path for navigation (e.g., '/execute-test')
}