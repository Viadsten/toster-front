'use client'
import { FC } from 'react'
import { Button, Wrapper } from '@/ui'
import classNames from 'classnames'

import config from '../../../package.json'
import styles from './header.module.scss'
import { HeaderProps } from './header.types'
import Logo from './logo'
import { Router } from 'next/router'
import { redirect, useRouter } from 'next/navigation'
import { logoutAction } from '@/shared/api/user'
import { useDispatch, useSelector } from 'react-redux'
import { getModelFromLocalStorage, userActions } from '@/shared/store/user/user.slice'
import { AppDispatch } from '@/shared/store'
import { useAppDispatch, useAppSelector } from '@/shared/store/hooks'

const Header: FC<HeaderProps> = ({ className }) => {
  const dispatch = useAppDispatch()

  // const user = useAppSelector((state) => state.user.currentUser)
  const token = getModelFromLocalStorage('token')

  const signOut = () => {
    dispatch(userActions.logout())
  }

  const headerClassName = classNames(styles.root, className)
  return (
    <header className={headerClassName}>
      <Wrapper className={styles.wrapper}>
        {/* {user && <span>Привет: {user?.token}</span>} */}
        <Logo />
        { token &&
          <Button
            onClick={() => signOut()}
          >
            Logout
          </Button>
        }
      </Wrapper>
    </header>
  )
}

export default Header
