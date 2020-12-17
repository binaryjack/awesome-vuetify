import React, { useState } from "react";

interface IButtonProps {
  name: string;
  onClicked?: (e: number) => void;
}

export const Button = ({ name, onClicked }: IButtonProps) => {
  const [count, setCount] = useState<number>(0);

  const handleClick = () => {
    const result = count + 1;
    setCount(result);
    onClicked && onClicked(result);
  };

  return (
    <button onClick={() => handleClick()} className="btn btn-primary">
      {name} - You clicked me {count} times
    </button>
  );
};
