/**
 * Component Types
 * Shared types for UI components
 */

import { ReactNode } from 'react';

export interface ServiceCardProps {
  title: string;
  description: string;
  color: 'blue' | 'yellow' | 'orange';
  icon?: ReactNode;
}

export interface FadeInProps {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  className?: string;
}

export interface TeamMemberProps {
  name: string;
  role: string;
  img: string;
  bio: string;
}

export interface FeatureCardProps {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  title: string;
  description: string;
  iconColor: string;
  iconBg: string;
}

export interface PriorityListItemProps {
  title: string;
  description: string;
  isActive?: boolean;
}

export interface FAQItemProps {
  question: string;
  answer: string;
}
