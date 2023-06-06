import React, { useState } from 'react'
import { Thermometer, Gauge, Waves } from 'lucide-react';
interface CardProps {
  titulo:string
  valor:number
  icono:string
}
const renderIcon = (icono: string) => {
  switch(icono){
    case 'temp':
        return  <Thermometer color="green" size={60}/>;
    
    case 'presion':
        return  <Gauge color="green" size={60}/>;
      
    case 'caudal':
        return  <Waves color="green" size={60}/>;

    case 'velocidad':
        return  <Gauge color="green" size={60}/>;
   
    default:
        return null;
}
};

export default function CardProceso({titulo, valor, icono}:CardProps) {
  return (
    <div className=''>
        <div className='text-xl'>{titulo}</div>
        <div className='bg-white w-40 h-420 rounded-lg flex justify-center items-center'>
                <div>{renderIcon(icono)}</div>
                <div><p className='text-black text-4xl'>{valor}</p></div>
        </div>
    </div>
  )
}
