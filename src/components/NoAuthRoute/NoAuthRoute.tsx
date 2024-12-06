import { FC } from "react";
import { NoAuthRouteProps } from ".";
import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "@/shared/store/hooks";

export const NoAuthRoute: FC<NoAuthRouteProps> = ({ children }) => {
  const user = useAppSelector((state) => state.USER);

  if (user.currentUser) {
    return <Navigate to={"/"} />;
  }

  return children ?? <Outlet />;
};
