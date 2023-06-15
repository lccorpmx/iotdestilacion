import React, { useState } from "react";

import Icon from "./icon";

interface CardProps {
  titulo: string;
  icono: string;
  value: number;
}

export default function CardProceso({ titulo, icono, value }: CardProps) {

  console.log("render process");
  return (
    <div className="">
      <div className="text-xl">{titulo}</div>
      <div className="bg-white w-40 h-420 rounded-lg flex justify-center items-center">
        <div>
          <Icon iconName={icono} iconSize={60}></Icon>
        </div>
        <div>
          <p className="text-black text-4xl">{value}</p>
        </div>
      </div>
    </div>
  );
}
