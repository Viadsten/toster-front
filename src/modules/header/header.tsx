'use client'
import { FC } from 'react'
import { Button, Wrapper } from '@/ui'
import classNames from 'classnames'

import config from '../../../package.json'
import styles from './header.module.scss'
import { HeaderProps } from './header.types'
import Logo from './logo'
import { Router } from 'next/router'
import { redirect } from 'next/navigation'
function deleteAllCookies() {
  document.cookie.split(';').forEach(cookie => {
      console.log(cookie)
      const eqPos = cookie.indexOf('=');
      const name = eqPos > -1 ? cookie.substring(0, eqPos) : cookie;
      document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT';
  });
}
const Header: FC<HeaderProps> = ({ className }) => {
  //@ts-ignore
  cookieStore.getAll().then(cookies => console.log(cookies))
  const signOut = () => {
    
    // deleteAllCookies()
    redirect(`/sign-in`) 
  }

  const headerClassName = classNames(styles.root, className)
  return (
    <header className={headerClassName}>
      <Wrapper className={styles.wrapper}>
        <Logo />
        <Button
          onClick={() => signOut()}
        >
          Logout
        </Button>
      </Wrapper>
    </header>
  )
}

export default Header
