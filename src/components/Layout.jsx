import React from "react";

export const Layout = ({ children }) => {
  return (
    <div className="w-full h-screen bg-teal-300">
      <div className="w-full h-full">{children}</div>
    </div>
  );
};
