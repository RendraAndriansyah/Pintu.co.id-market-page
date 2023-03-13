import React from "react";

export const Layout = ({ children }) => {
  return (
    <div className="w-[100%] overflow-hidden  ">
      <div className="w-full ">{children}</div>
    </div>
  );
};
