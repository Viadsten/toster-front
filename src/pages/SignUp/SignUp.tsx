import { FC } from "react";
import { SignUpProps } from ".";
import { UiButton } from "@/shared/ui/UiButton";
import { AuthLayout } from "@/layouts/AuthLayout";
import { UiInput } from "@/shared/ui/UiInput";
import { userActions } from "@/slices/user/user-slice";
import { useAppDispatch, useAppSelector } from "@/shared/store/hooks";
import { useForm } from "react-hook-form";
import { UiLink } from "@/shared/ui/UiLink";
import { useNavigate } from "react-router-dom";

export const SignUp: FC<SignUpProps> = (props) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { handleSubmit, control } = useForm<any>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
    mode: "onChange",
  });

  const registerUser = (data: {
    email: string;
    password: string;
    name: string;
  }) => {
    dispatch(userActions.register(data)).then((res) => navigate("/sign-in"));
  };

  return (
    <AuthLayout>
      <div {...props}>
        <form
          onSubmit={handleSubmit(registerUser)}
          className="mx-auto grid w-80 grid-cols-1 gap-5"
        >
          <h1 className="text-center">Регистрация</h1>
          <UiInput
            label="Имя"
            name="name"
            control={control}
            variant="bordered"
            size="sm"
            rules={{
              required: true,
            }}
          ></UiInput>
          <UiInput
            label="Почта"
            name="email"
            control={control}
            variant="bordered"
            size="sm"
            rules={{
              required: true,
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Некорректный E-mail адрес",
              },
            }}
          ></UiInput>
          <UiInput
            control={control}
            label="Пароль"
            name="password"
            variant="bordered"
            size="sm"
            rules={{
              required: true,
            }}
          ></UiInput>
          <UiButton type="submit">Зарегестрироваться</UiButton>
          <UiLink href="/sign-in">Авторизация</UiLink>
        </form>
      </div>
    </AuthLayout>
  );
};
