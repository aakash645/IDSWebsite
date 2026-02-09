
import React from 'react';
import * as LucideIcons from 'lucide-react';
import type { LucideIcon as LucideIconType } from 'lucide-react';

interface IconProps {
  name: string;
  className?: string;
  size?: number;
}

const Icon: React.FC<IconProps> = ({ name, className, size = 24 }) => {
  const icons = LucideIcons as unknown as Record<string, LucideIconType>;
  const LucideIcon = icons[name];
  if (!LucideIcon) return null;
  return <LucideIcon className={className} size={size} />;
};

export default Icon;
