import React, { useState, useEffect, Dispatch, SetStateAction, useRef } from "react";

interface CardProps {
  seconds: number;
  setSeconds: Dispatch<SetStateAction<number>>;
}

const Timer = ({ seconds, setSeconds }: CardProps) => {
  const secondRef = useRef(seconds)
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval: any;
    if (isRunning) {
      // console.log(seconds)
      interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);

      if (seconds === 0) {
        clearInterval(interval);
        setIsRunning(false);
      }
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isRunning, seconds]);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setSeconds(secondRef.current);
    setIsRunning(false);
  };

  console.log("render timer");
  return (
    <div className="text-center pt-2">
      <h1 className="text-3xl mb-4">Tiempo Restante: {seconds}s</h1>
      {!isRunning ? (
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleStart}
        >
          Start
        </button>
      ) : (
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleStop}
        >
          Stop
        </button>
      )}
      <button
        className="bg-gray-500 hover:bg-gray-700 text- font-bold py-2 px-4 rounded ml-4"
        onClick={handleReset}
      >
        Reset
      </button>
      {seconds === 0 && (
        <p className="text-red-500 mt-4">¡El Proceso Ha Terminado!</p>
      )}
    </div>
  );
};

export default Timer;
