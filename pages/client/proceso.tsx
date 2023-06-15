import React, { useState, useEffect, useRef } from "react";

import CardProceso from "@/components/cardProceso";
import Link from "next/link";
import { Thermometer, Gauge, Waves, Pipette } from "lucide-react";

import mqtt from "mqtt";

import mqttClient from "@/pages/client/mqttConnection";

export default function Proceso() {
  const mqttConnection = useRef<mqtt.MqttClient | null>();
  const [temperatura, setTemperatura] = useState(0);
  const [presion, setPresion] = useState(0);
  const [caudal, setCaudal] = useState(0);
  const [velocidad, setVelocidad] = useState(0);

  useEffect(() => {
    mqttConnection.current = mqttClient();

    mqttConnection.current.subscribe("mediciones", (error) => {
      if (error) {
        console.log("Error al subscribirse al topico: ", error);
      } else {
        console.log(`subscrito al topicco: mediciones`);
      }
    });
  }, []);

  useEffect(() => {
    if (mqttConnection.current) {
      mqttConnection.current.on("message", (topicOfMessage, message) => {
        if (topicOfMessage == "mediciones") {
          const data = JSON.parse(message.toString());
          setTemperatura(data.temperatura);
          setPresion(data.presion);
          setCaudal(data.caudal);
          setVelocidad(data.velocidad);
        }
      });
    }
  });

  return (
    <>
      <div className="grid grid-cols-2 gap-8 m-8">
        <div>
          <CardProceso
            titulo="Temperatura"
            icono="temperatura"
            value={temperatura}
          />
        </div>
        <div>
          <CardProceso titulo="Presion" icono="presion" value={presion} />
        </div>
        <div>
          <CardProceso titulo="Caudal" icono="caudal" value={caudal} />
        </div>
        <div>
          <CardProceso titulo="Velocidad" icono="velocidad" value={velocidad} />
        </div>
      </div>

      <div>
        <h3 className="text-xl pb-6">Otros Procesos</h3>

        <div>
          <div className="flex flex-row m-2">
            <div className="pr-4">
              <div>
                <Thermometer color="green" size={40} />
              </div>
              <div>
                <p>temperatura</p>
              </div>
              <div>
                <p>50</p>
              </div>
            </div>

            <div className="pr-4">
              <div>
                <Gauge color="green" size={40} />
              </div>
              <div>
                <p>Temperatura</p>
              </div>
              <div>
                <p>50</p>
              </div>
            </div>

            <div className="pr-4">
              <div>
                <Waves color="green" size={40} />
              </div>
              <div>
                <p>Temperatura</p>
              </div>
              <div>
                <p>50</p>
              </div>
            </div>

            <div className="pr-4">
              <div>
                <Gauge color="green" size={40} />
              </div>
              <div>
                <p>Temperatura</p>
              </div>
              <div>
                <p>50</p>
              </div>
            </div>

            <div className="pr-4">
              <div>
                <Pipette color="green" size={40} />
              </div>
              <div>
                <p>Temperatura</p>
              </div>
              <div>
                <p>50</p>
              </div>
            </div>
          </div>
          <div className="border border-white border-2"></div>
        </div>

        <div>
          <div className="flex flex-row m-2">
            <div className="pr-4">
              <div>
                <Thermometer color="green" size={40} />
              </div>
              <div>
                <p>Temperatura</p>
              </div>
              <div>
                <p>50</p>
              </div>
            </div>

            <div className="pr-4">
              <div>
                <Gauge color="green" size={40} />
              </div>
              <div>
                <p>Presion</p>
              </div>
              <div>
                <p>60</p>
              </div>
            </div>

            <div className="pr-4">
              <div>
                <Waves color="green" size={40} />
              </div>
              <div>
                <p>Caudal</p>
              </div>
              <div>
                <p>50</p>
              </div>
            </div>

            <div className="pr-4">
              <div>
                <Gauge color="green" size={40} />
              </div>
              <div>
                <p>Velocidad</p>
              </div>
              <div>
                <p>50</p>
              </div>
            </div>

            <div className="pr-4">
              <div>
                <Pipette color="green" size={40} />
              </div>
              <div>
                <p>Temperatura</p>
              </div>
              <div>
                <p>50</p>
              </div>
            </div>
          </div>
          <div className="border border-white border-2"></div>
        </div>
      </div>
    </>
  );
}
