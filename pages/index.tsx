import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import OnnOff from "../components/onoff";
import Card from "../components/card";
import Timer from "@/components/Timer";
import { useEffect, useRef, useState } from "react";
import mqtt from "mqtt";

import mqttClient from "@/helpers/mqttConnection";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const mqttConnection = useRef<mqtt.MqttClient | null>();

  // Tiempo del proceso
  const [seconds, setSeconds] = useState(15);
  // Valores de las mediciones de los IOT
  const [temperatura, setTemperatura] = useState(45);
  const [presion, setPresion] = useState(110);
  const [caudal, setCaudal] = useState(4);
  const [velocidad, setVelocidad] = useState(455);

  useEffect(() => {
    mqttConnection.current = mqttClient();
  }, []);

  useEffect(() => {
    console.log(
      `temperatura: ${temperatura}\npresion: ${presion}\ncaudal: ${caudal}\nvelocidad:${velocidad}`
    );
    const data = {
      temperatura: temperatura,
      presion: presion,
      caudal: caudal,
      velocidad: velocidad,
      cbd_estimado: 85
    };

    mqttConnection.current?.publish("mediciones", JSON.stringify(data));
  }, [seconds]);

  return (
    <div>
      <OnnOff></OnnOff>
      <Timer seconds={seconds} setSeconds={setSeconds}></Timer>
      <div className="grid grid-cols-2 gap-4">
        <Card
          titulo="Temperatura"
          value={temperatura}
          setValue={setTemperatura}
        />
        <Card titulo="Presion" value={presion} setValue={setPresion} />
        <Card titulo="Caudal" value={caudal} setValue={setCaudal} />
        <Card titulo="Velocidad" value={velocidad} setValue={setVelocidad} />
      </div>

      <div>
        <div className="bg-white text-black m-4 rounded-xl">
          <p className="text-center text-4xl">CBD Estimado: 85%</p>
        </div>
      </div>
    </div>
  );
}
