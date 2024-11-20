'use client'

import { FC, useEffect } from 'react'
import classNames from 'classnames'

import styles from './signUp.module.scss'
import { SignUpProps } from './signUp.types'
import { Button, Input, Wrapper } from '@/ui'
import Link from 'next/link'
import Social from '@/modules/footer/social'
import { ISocialItem } from '@/modules/footer/social/social.types'
import IconGithub from '@/shared/assets/icons/github-mark.svg'
import { SubmitHandler, useForm } from 'react-hook-form'
import { signUpAction } from '@/shared/api/user'
import { toast } from 'react-toastify'

const SignUpComponent: FC<SignUpProps> = ({
  className
}) => {
  const rootClassName = classNames(styles.root, className)
  const { handleSubmit, control } = useForm<any>({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onChange",
  })

  const onSubmit: SubmitHandler<any> = (data: {email: string, password: string}) => {
    signUpAction(data).then(
      (response) => {
        toast.success(response.statusText)
      }
    ).catch((error) => toast.error(error))
  }

  return (
    <main className={rootClassName} onSubmit={handleSubmit(onSubmit)}>
      <Wrapper>
        <form>
          {/* <Input 
            name='Name'
            placeholder="Имя"
            type='text'
            control={control}
            rules={{ required: true }} 
          /> */}
          <Input 
            control={control}
            name="email" 
            rules={{ 
              required: true,
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Некорректный E-mail адрес"
              }
            }} 
            placeholder='E-mail'
          />
          <Input 
            type='password'
            name='password'
            required={true}
            control={control}
            rules={{ required: true }} 
            placeholder='Пароль'
          />
          {/* <Input
            name='rules'
            placeholder='На обработку данных'
            label="На обработку данных"
            type='checkbox'
            control={control}
            rules={{required: true}}
          /> */}
          <Button type='submit'>Отправить</Button>
          <Button 
            as='a'
            isRouteLink={true}
            href='/sign-in'
          >Авторизоваться</Button>        

        </form>
      </Wrapper>
    </main>
  )
}

export default SignUpComponent
