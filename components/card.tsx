import React, { useState, useEffect } from 'react';
import mqtt from 'mqtt';

interface CardProps {
  titulo: string;
  valor: number;
}

export default function Card({ titulo, valor }: CardProps) {
  const brokerUrl = 'ws://localhost:8083/mqtt';
  const clientId = 'lccontroler';

  const [value, setValue] = useState(valor);
  const [client, setClient] = useState<mqtt.MqttClient | null>(null);

  
  const sendParameters = (titulo: string, valor: number) => {
    
  };

  const handleIncrement = () => {
    setValue((prevValue) => prevValue + 1);
  };

  const handleDecrement = () => {
    setValue((prevValue) => prevValue - 1);
  };

  useEffect(() => {
    const newClient = mqtt.connect(brokerUrl, { clientId });

    newClient.on('connect', () => {
      console.log('Conexión MQTT establecida');


      newClient.subscribe('tituloooo', (error) => {
        if (error) {
          console.error('Error al suscribirse al tópico:', error);
        } else {
          console.log('Suscrito al tópico tituloooo');
        }
      });
    });

    newClient.on('error', (error) => {
      console.error('Error en la conexión MQTT:', error);
    });


    newClient.subscribe('tituloooo', (topic, message) => {
      console.log(`Mensaje recibido en el tópico ${topic}: ${message.toString()}`);
    });


    const titulooo = newClient.subscribe(['tituloooo']);


    console.log(titulooo);

    setClient(newClient);

    return () => {
      newClient.end(); // Cierra la conexión MQTT al desmontar el componente
    };
  }, []);

  useEffect(() => {
    sendParameters(titulo, value);
  }, [titulo, value]);

  return (
    <div className='flex flex-col w-50 h-50 bg-green-600 items-center justify-center gap-10 p-4 outline outline-offset-2 outline-white m-4 rounded-2xl'>
      <div className='flex flex-col items-center'>
        <div className='pb-4 text-2xl'>{titulo}</div>
        <div className='outline outline-offset-2 outline-white p-2 rounded-xl'>
          {value}
        </div>
      </div>

      <div className='flex justify-between w-full'>
        <button
          className='bg-white hover:bg-black text-black hover:text-white w-10 h-10 flex items-center justify-center rounded-full'
          onClick={handleDecrement}
        >
          -
        </button>
        <button
          className='bg-white hover:bg-black text-black hover:text-white w-10 h-10 flex items-center justify-center rounded-full'
          onClick={handleIncrement}
        >
          +
        </button>
      </div>
    </div>
  );
}
