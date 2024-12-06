import { FC, useEffect } from "react";
import { ProtectedRouteProps } from ".";
import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "@/shared/store/hooks";
import { AuthorizationStatus } from "@/shared/types/enums";

export const ProtectedRoute: FC<ProtectedRouteProps> = ({ children }) => {
  const user = useAppSelector((state) => state.USER);
  console.log("DISPATCH", user);

  useEffect(() => {
    console.log("DISPATCH", user);
  }, [user]);
  // if (user.authStatus === AuthorizationStatus.NoAuth) {
  //   return <Navigate to={'sign-in'} />
  // }

  // if (user.authStatus === AuthorizationStatus.Unknown) {
  //   return <div>loadyding...</div>
  // }

  if (!user.currentUser) {
    return <Navigate to={"sign-in"} />;
  }

  return children ?? <Outlet />;
};
