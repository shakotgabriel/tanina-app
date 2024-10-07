// components/Modal.tsx
"use client";
import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg shadow-2xl p-4 w-1/2"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
        <button className="absolute top-4 right-4" onClick={onClose}>
          X
        </button>
      </div>
    </div>
  );
};

export default Modal;