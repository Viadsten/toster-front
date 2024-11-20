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
import { getUserByIdAction, getUsersAction, signInAction } from '@/shared/api/user'
import { toast } from 'react-toastify'

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
  const onSubmit: SubmitHandler<any> = (data: {email: string, password: string}) => {
    console.log(data)
    
    signInAction(data).then(
      (response) => {
        toast.success(response.statusText)
      }
    ).catch((error) => toast.error(error))
  }
  
  // figd__cGb61DgifH6gp3bgzL_9QXvirfiHE3QYNPw-M1T
  // fetch('http://localhost:7777/users/1').then((response) => response.json()).then((e) => console.log(e))
  // fetch('https://api.figma.com/v1/files/IXVsc0mGkbKRHkHwwZTCgG').then((response) => console.log(response.json()))


  // const figmaToken = 'figd__cGb61DgifH6gp3bgzL_9QXvirfiHE3QYNPw-M1T';
  // const fileId = 'IXVsc0mGkbKRHkHwwZTCgG';  // Укажите здесь ID файла

  // fetch(`https://api.figma.com/v1/files/${fileId}`, {
  //   method: 'GET',
  //   headers: {
  //     'X-Figma-Token': figmaToken,
  //     'Content-Type': 'application/json'
  //   }
  // })
  //   .then(response => {
  //     if (!response.ok) {
  //       throw new Error('Network response was not ok');
  //     }
  //     return response.json();
  //   })
  //   .then(data => {
  //     console.log(data);
  //   })
  //   .catch(error => {
  //     console.error('There was a problem with the fetch operation:', error);
  //   });


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
          <Button type='button' onClick={() => {getUserByIdAction(1).then((res) => toast.success(res.data.email))}}>Получить пользователей</Button>
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










