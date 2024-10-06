"use client";

import React from 'react';

interface GreenButtonProps {
  onClick: () => void; // Function to handle button click
  children: React.ReactNode; // Content inside the button
  disabled?: boolean; // Optional prop to disable the button
}

const GreenButton: React.FC<GreenButtonProps> = ({ onClick, children, disabled = false }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`bg-green-500 text-white font-semibold py-2 px-4 rounded shadow-md 
                 hover:bg-green-600 disabled:bg-green-300 transition duration-200 ease-in-out`}
    >
      {children}
    </button>
  );
};

export default GreenButton;
