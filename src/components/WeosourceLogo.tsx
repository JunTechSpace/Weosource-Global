import React from 'react';

interface WeosourceLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'custom';
}

export const WeosourceLogo: React.FC<WeosourceLogoProps> = ({ 
  className = "h-[88px] w-auto", 
  size = 'md'
}) => {
  const sizeClasses = {
    sm: "h-16 w-auto",
    md: "h-[88px] w-auto",
    lg: "h-32 w-auto",
    custom: className
  };

  const selectedClass = size === 'custom' ? className : sizeClasses[size];

  return (
    <img 
      src="https://lh3.googleusercontent.com/d/1FyhZZxioUSe2W9kA-89UHUafDEeS5JNc" 
      alt="Weosource Logo" 
      className={`${selectedClass} object-contain`}
      referrerPolicy="no-referrer"
    />
  );
};
