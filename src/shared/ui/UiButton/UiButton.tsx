import { FC } from "react";
import { UiButtonProps } from ".";
import { Button, ButtonProps } from "@nextui-org/button";

export const UiButton: FC<UiButtonProps & ButtonProps> = (props) => {
  return (
    <Button color="primary" {...props}>
      {props.children}
    </Button>
  );
};
