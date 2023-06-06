import React, { useState, useEffect } from 'react';

import CardProceso from '@/components/cardProceso'
import Link from 'next/link';
import { Thermometer, Gauge, Waves, Pipette } from 'lucide-react';
import mqtt from 'mqtt';

export default function Proceso() {

  const brokerUrl = 'ws://localhost:8083/mqtt';
  const clientId = 'lccontroler';
  

  const [temperatura, setTemperatura] = useState(50);
  const [presion, setPresion] = useState(50);
  const [caudal, setCaudal] = useState(50);
  const [velocidad, setVelocidad] = useState(50);
  const [client, setClient] = useState(null);



  useEffect(() => {
    const newClient = mqtt.connect(brokerUrl, { clientId });
    console.log(clientId)

    newClient.on('connect', () => {
      console.log('Conexión MQTT establecida');
      // Suscribirse a los temas correspondientes
      newClient.subscribe(['titulo']);
    
    });

  

    setClient(newClient);

    return () => {
      newClient.end(); // Cierra la conexión MQTT al desmontar el componente
    };
  }, []);

  
  return (
    <>
    <div className='grid grid-cols-2 gap-8 m-8'>
       <div><CardProceso titulo='Temperatura' valor={temperatura} icono='temp'/></div>
       <div><CardProceso titulo='Presion' valor={presion} icono='presion'/></div>
       <div><CardProceso titulo='Caudal' valor={caudal} icono='caudal'/></div>
       <div><CardProceso titulo='Velocidad' valor={velocidad} icono='velocidad'/></div>
    </div>


    <div>
      <h3 className='text-xl pb-6'>Otros Procesos</h3>
      <div>
        <div className='flex flex-row m-2'>
          <div className='pr-4'>
            <div><Thermometer color="green" size={40}/></div>
            <div><p>{temperatura}</p></div>
            <div><p>50</p></div>
          </div>

          <div className='pr-4'>
            <div><Gauge color="green" size={40}/></div>
            <div><p>Temperatura</p></div>
            <div><p>50</p></div>
          </div>

          <div className='pr-4'>
            <div><Waves color="green" size={40}/></div>
            <div><p>Temperatura</p></div>
            <div><p>50</p></div>
          </div>

          <div className='pr-4'>
            <div><Gauge color="green" size={40}/></div>
            <div><p>Temperatura</p></div>
            <div><p>50</p></div>
          </div>

          <div className='pr-4'>
            <div><Pipette color="green" size={40}/></div>
            <div><p>Temperatura</p></div>
            <div><p>50</p></div>
          </div>
        </div>
        <div className="border border-white border-2"></div>
      </div>


      <div>
      <div className='flex flex-row m-2'>
          <div className='pr-4'>
            <div><Thermometer color="green" size={40}/></div>
            <div><p>Temperatura</p></div>
            <div><p>50</p></div>
          </div>

          <div className='pr-4'>
            <div><Gauge color="green" size={40}/></div>
            <div><p>Presion</p></div>
            <div><p>60</p></div>
          </div>

          <div className='pr-4'>
            <div><Waves color="green" size={40}/></div>
            <div><p>Caudal</p></div>
            <div><p>50</p></div>
          </div>

          <div className='pr-4'>
            <div><Gauge color="green" size={40}/></div>
            <div><p>Velocidad</p></div>
            <div><p>50</p></div>
          </div>

          <div className='pr-4'>
            <div><Pipette color="green" size={40}/></div>
            <div><p>Temperatura</p></div>
            <div><p>50</p></div>
          </div>
        </div>
        <div className="border border-white border-2"></div>
      </div>

    
    
    </div>
    </>
  )
}
