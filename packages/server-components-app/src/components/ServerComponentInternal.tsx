import React from "react";

function loadData(message: string): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(`Success! Result: ${message}`), 2000);
  });
}

export function ServerComponentInternal({ message }: { message: string }) {
  return (
    <React.Suspense fallback={<Loading />}>
      {/* @ts-expect-error ServerComponent */}
      <Loaded message={message} />
    </React.Suspense>
  );
}

function Loading() {
  return <div>loading...</div>;
}

async function Loaded({ message }: { message: string }) {
  const result = await loadData(message);
  return (
    <div>
      <div>{result}</div>
    </div>
  );
}
