import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [seconds, setSeconds] = useState(21000);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval = null;

    if (isRunning) {
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
    setSeconds(21000);
    setIsRunning(false);
  };
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
      {seconds === 0 && <p className="text-red-500 mt-4">¡El Proceso Ha Terminado!</p>}
    </div>
  );
};

export default Timer;
