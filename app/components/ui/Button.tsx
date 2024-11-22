'use client';

import React from 'react';

type ButtonProps = {
  text: string; // Text to display on the button
  onClick?: () => void; // Optional click handler
  variant?: 'PRIMARY' | 'SECONDARY';
};

const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 max-w-max bg-secondary text-white rounded hover:bg-white hover:text-[black] hover:font-bold`}
    >
      {text}
    </button>
  );
};

export default Button;
