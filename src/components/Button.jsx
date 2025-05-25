import React from 'react';

const Button = ({ 
  children, 
  onClick, 
  type = 'button', 
  variant = 'primary', 
  size = 'md', 
  disabled = false, 
  className = '' 
}) => {
  // Define button styles based on props
  const baseStyles = 'w-[150px] h-[45px] rounded-2xl  font-semibold focus:outline-none focus:ring transition duration-200';
  const sizeStyles = {
    sm: 'px-3 py-1 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };
  const variantStyles = {
    primary: 'bg-[#FF7F49] text-white shadow-md hover:bg-[#FFFFFF] hover:text-[#FF7F49] border border-[#FF7F49] focus:ring-orange-300',
    secondary: 'bg-[#FFFFFF] text-[#0A1128] shadow-md border border-[#FF7F49] focus:ring-orange-300 hover:bg-[#FF7F49] hover:text-[#FFFFFF] ',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${
        disabled ? 'opacity-50 cursor-not-allowed' : ''
      } ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
