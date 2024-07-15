import { FC } from 'react'
import Image from 'next/image'
import { Button, Heading, Wrapper } from '@/ui'
import classNames from 'classnames'

import styles from './home.module.scss'
import { HomeProps } from './home.types'

const Home: FC<HomeProps> = ({ className }) => {
  const rootClassName = classNames(styles.root, className)

  return (
    <main className={rootClassName}>
      <Wrapper>
        <Heading tagName="h1" className={styles.title}>
          Next.js template
        </Heading>
        <Button as='a' href='/sign-in'>Sign in</Button>
        <Button as='a' href='/sign-up'>Sign up</Button>
      </Wrapper>
    </main>
  )
}

export default Home
