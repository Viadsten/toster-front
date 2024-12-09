import { FC } from "react";
import { HeaderProps } from ".";
import { UiButton } from "@/shared/ui/UiButton";
import { useAppDispatch, useAppSelector } from "@/shared/store/hooks";
import { userActions } from "@/slices/user/user-slice";

export const Header: FC<HeaderProps> = (props) => {
  const user = useAppSelector((state) => state.USER);
  const dispatch = useAppDispatch();

  const handleLogout = () => dispatch(userActions.logout());

  return (
    <div {...props}>
      {user.currentUser && (
        <UiButton onClick={() => handleLogout()}>Выйти</UiButton>
      )}
    </div>
  );
};
