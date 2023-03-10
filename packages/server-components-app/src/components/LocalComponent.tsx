"use client";
import { useState } from "react";
export const LocalComponent = () => {
  const [state, setState] = useState("world");
  return <div>hello {state}</div>;
};
