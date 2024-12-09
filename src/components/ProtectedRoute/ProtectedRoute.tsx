import { FC, useEffect } from "react";
import { ProtectedRouteProps } from ".";
import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "@/shared/store/hooks";
import { AuthorizationStatus } from "@/shared/types/enums";

export const ProtectedRoute: FC<ProtectedRouteProps> = ({ children }) => {
  const user = useAppSelector((state) => state.USER);

  // if (user.authStatus === AuthorizationStatus.NoAuth) {
  //   return <Navigate to={'sign-in'} />
  // }

  // if (user.authStatus === AuthorizationStatus.Unknown) {
  //   return <div>loadyding...</div>
  // }

  if (!user.currentUser) {
    return <Navigate to={"sign-in"} />;
  }

  // if (!user.currentUser.hasAccess) {
  //   return <Navigate to={"mail-verification"} />
  // }

  return children ?? <Outlet />;
};
