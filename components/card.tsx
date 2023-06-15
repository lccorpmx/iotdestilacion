import React, { Dispatch, SetStateAction } from "react";

interface CardProps {
  titulo: string;
  value: number;
  setValue: Dispatch<SetStateAction<number>>;
}

export default function Card({ titulo, value, setValue }: CardProps) {
  const handleIncrement = () => {
    setValue((prevValue) => prevValue + 1);
  };

  const handleDecrement = () => {
    setValue((prevValue) => prevValue - 1);
  };

  console.log("render card");
  return (
    <div className="flex flex-col w-50 h-50 bg-green-600 items-center justify-center gap-10 p-4 outline outline-offset-2 outline-white m-4 rounded-2xl">
      <div className="flex flex-col items-center">
        <div className="pb-4 text-2xl">{titulo}</div>
        <div className="outline outline-offset-2 outline-white p-2 rounded-xl">
          {value}
        </div>
      </div>

      <div className="flex justify-between w-full">
        <button
          className="bg-white hover:bg-black text-black hover:text-white w-10 h-10 flex items-center justify-center rounded-full"
          onClick={handleDecrement}
        >
          -
        </button>
        <button
          className="bg-white hover:bg-black text-black hover:text-white w-10 h-10 flex items-center justify-center rounded-full"
          onClick={handleIncrement}
        >
          +
        </button>
      </div>
    </div>
  );
}
