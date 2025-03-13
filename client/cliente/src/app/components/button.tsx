import React, { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick: () => void;
}

export function Button({ children, onClick }: ButtonProps) {
  return (
    <button className="px-4 py-2 bg-blue-500 text-white rounded-lg" onClick={onClick}>
      {children}
    </button>
  );
}