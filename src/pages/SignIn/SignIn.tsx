import { FC } from "react";
import { SignInProps } from ".";
import { UiButton } from "@/shared/ui/UiButton";
import { useAppDispatch, useAppSelector } from "@/shared/store/hooks";
import { userActions } from "@/slices/user/user-slice";
import { UiInput } from "@/shared/ui/UiInput";
import { useForm } from "react-hook-form";
import { AuthLayout } from "@/layouts/AuthLayout";
import { UiLink } from "@/shared/ui/UiLink";

export const SignIn: FC<SignInProps> = (props) => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.USER);

  const { handleSubmit, control } = useForm<any>({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onChange",
  });

  const loginUser = (data: { email: string; password: string }) => {
    dispatch(userActions.login(data));
  };

  return (
    <AuthLayout>
      <div {...props}>
        <form
          onSubmit={handleSubmit(loginUser)}
          className="mx-auto grid w-80 grid-cols-1 gap-5"
        >
          <h1 className="text-center">Авторизация</h1>
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
          <UiButton type="submit">Войти</UiButton>
          <UiLink href="/sign-up">Зарегестрироваться</UiLink>
        </form>
      </div>
    </AuthLayout>
  );
};
