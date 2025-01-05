import React from "react";

type ButtonProps = {
  onClick: () => void;
  label: string;
};

const Button: React.FC<ButtonProps> = ({ onClick, label }) => {
  return <button onClick={onClick} className="px-6 py-2 bg-blue-500 font-semibold text-white rounded-md">{label}</button>;
};

export default Button;
