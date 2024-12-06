import { FC } from "react";
import { BaseLayoutProps } from ".";
import { Header } from "@/modules/Header";

export const BaseLayout: FC<BaseLayoutProps> = ({ children }) => {
  return (
    <div style={{ color: "blue" }}>
      <Header></Header>
      {children}
    </div>
  );
};
