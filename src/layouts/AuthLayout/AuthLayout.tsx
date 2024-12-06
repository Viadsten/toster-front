import { FC } from "react";
import { AuthLayoutProps } from ".";
import styles from "./AuthLayout.module.scss";

export const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {
  return <div className={styles.el}>{children}</div>;
};
