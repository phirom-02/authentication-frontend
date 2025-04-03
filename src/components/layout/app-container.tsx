import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function AppContainer({ children }: Readonly<Props>) {
  return (
    <div className="h-screen relative flex flex-col bg-background">
      {children}
    </div>
  );
}
