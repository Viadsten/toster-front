import { FC } from "react";
import { UiInputProps } from ".";
import { Input, InputProps } from "@nextui-org/react";
import { useController, UseControllerProps } from "react-hook-form";

export const UiInput: FC<
  UiInputProps & InputProps & UseControllerProps<any>
> = (props) => {
  const { field, fieldState } = useController(props);

  return (
    <Input
      {...props}
      {...field}
      isInvalid={props.isInvalid || fieldState.invalid}
    ></Input>
  );
};
