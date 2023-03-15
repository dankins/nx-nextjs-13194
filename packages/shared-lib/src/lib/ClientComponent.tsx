"use client";

import { useEffect, useState } from "react";

export const ClientComponent = () => {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    const i = setInterval(() => setCounter(counter + 1), 1000);
    return () => clearInterval(i);
  }, [counter, setCounter]);
  return <div>Counter: {counter}</div>;
};
