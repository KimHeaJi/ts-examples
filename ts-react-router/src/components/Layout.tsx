import React, { FC } from "react";
import Navigation from "./Navigation";

interface ILayout {
  children: React.ReactNode;
}
export const Layout: FC<ILayout> = ({ children }) => {
  return (
    <div>
      <Navigation />
      {children}
    </div>
  );
};
