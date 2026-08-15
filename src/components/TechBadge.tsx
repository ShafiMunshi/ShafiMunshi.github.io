import React from 'react';

interface TechBadgeProps {
  name: string;
  highlight?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export const TechBadge: React.FC<TechBadgeProps> = ({
  name,
  highlight = false,
  size = 'md',
}) => {
  const sizeClasses = {
    sm: 'text-xs px-2.5 py-0.5',
    md: 'text-xs sm:text-sm px-3.5 py-1.5',
    lg: 'text-sm sm:text-base px-4 py-2 font-medium',
  };

  return (
    <span
      className={`inline-flex items-center rounded-lg font-mono transition-all duration-200 border ${
        sizeClasses[size]
      } ${
        highlight
          ? 'bg-blue-600 dark:bg-blue-600 text-white border-blue-500 shadow-sm shadow-blue-500/20 font-semibold'
          : 'bg-card text-muted-foreground hover:text-foreground border-border hover:border-muted-foreground/40'
      }`}
    >
      {name}
    </span>
  );
};
