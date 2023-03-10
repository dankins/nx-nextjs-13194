import React from "react";
import { ClientComponent } from "./ClientComponent";

function loadData(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Hello, World"), 2000);
  });
}

export function ServerComponent() {
  return (
    <React.Suspense fallback={<Loading />}>
      {/* @ts-expect-error ServerComponent */}
      <Loaded />
    </React.Suspense>
  );
}

function Loading() {
  return <div>loading...</div>;
}

async function Loaded() {
  const result = await loadData();
  return (
    <div>
      <div>loaded</div>
      <ClientComponent />
    </div>
  );
}
