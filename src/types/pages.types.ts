/**
 * Page Types
 * Types specific to page components and data
 */

export interface OfficeLocation {
  city: string;
  type: string;
  address: string;
  phone: string;
}

export interface TimelineEvent {
  year: string;
  title: string;
  desc: string;
}

export interface Advisor {
  name: string;
  role: string;
  desc: string;
}

export interface Partner {
  name: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  category: string;
}

export interface CoreValue {
  title: string;
  icon: React.ComponentType<{ size?: number }>;
  desc: string;
}

export interface ProcessPhase {
  step: string;
  title: string;
  icon: React.ComponentType<{ size?: number }>;
  desc: string;
}

export interface SolutionGridItem {
  title: string;
  icon: React.ComponentType<{ size?: number }>;
  desc: string;
  path: string;
}

export interface ServiceItem {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  icon: string;
  color?: string;
  link?: string;
}