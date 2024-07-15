'use client'

import { FC, useEffect } from 'react'
import classNames from 'classnames'

import styles from './signIn.module.scss'
import { SignInProps } from './signIn.types'
import { Button, Input, Typography, Wrapper } from '@/ui'
import Link from 'next/link'
import Social from '@/modules/footer/social'
import { ISocialItem } from '@/modules/footer/social/social.types'
import IconGithub from '@/shared/assets/icons/github-mark.svg'
import { SubmitHandler, useForm } from 'react-hook-form'

const socialList: ISocialItem[] = [
  {
    label: 'github repo',
    href: 'https://github.com/htmlonelove/liga-nextjs-template',
    icon: <IconGithub />
  }
]

const SignInComponent: FC<SignInProps> = ({
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
  const onSubmit: SubmitHandler<any> = (date) => console.log(date)
  
  return (
    <main className={rootClassName}>
      <Wrapper>
        <Typography as='h1'>Авторизация</Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
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
          <Button type='submit'>Авторизоваться</Button>
          <Button 
            as='a'
            isRouteLink={true}
            href='/sign-up'
          >Зарегистрироваться</Button>   
          <Button 
            as='a'
            isRouteLink={true}
            href='/recovery'
          >Восстановить пароль</Button>         
          <Social items={socialList} />

        </form>
      </Wrapper>
    </main>
  )
}

export default SignInComponent
