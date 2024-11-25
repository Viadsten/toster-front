'use client'

import { FC, useEffect } from 'react'
import Image from 'next/image'
import { Button, Heading, Wrapper } from '@/ui'
import classNames from 'classnames'

import styles from './home.module.scss'
import { HomeProps } from './home.types'
import { FigmaCreateCard } from '@/components/tests/cards/figma/figmaCreateCard'
import { useAppDispatch, useAppSelector } from '@/shared/store/hooks'
import { userActions } from '@/shared/store/user/user.slice'
import { toast } from 'react-toastify'


const Home: FC<HomeProps> = ({ className }) => {
  const rootClassName = classNames(styles.root, className)
  const dispatch = useAppDispatch()
  const currentUser = useAppSelector(state => state.user.currentUser)

  useEffect(() => {
    toast.info(currentUser?.email)
  }, [currentUser])

  const getCurrentUser = () => {
    dispatch(userActions.currentUser())
  }

  return (
    <main className={rootClassName}>
      <Wrapper>
        <Heading tagName="h1" className={styles.title}>
          Next.js template
        </Heading>
        <Button type='button' 
            onClick={
              () => getCurrentUser()}
            >Получить пользователя текущего</Button>
            <br></br>
        <Button as='a' href='/sign-in'>Sign in</Button>
        <br></br>
        
        <Button as='a' href='/sign-up'>Sign up</Button>
        <br></br>
        <FigmaCreateCard></FigmaCreateCard>
        
      </Wrapper>
    </main>
  )
}

export default Home
