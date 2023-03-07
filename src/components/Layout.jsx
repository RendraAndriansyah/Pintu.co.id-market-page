import React from "react";

export const Layout = ({ children }) => {
  return (
    <div className="w-full h-screen ">
      <div className="w-full h-full">{children}</div>
    </div>
  );
};
