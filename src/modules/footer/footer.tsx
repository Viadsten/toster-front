import { FC } from 'react'
import { Wrapper } from '@/ui'
import IconGithub from '@icons/github-mark.svg'

import styles from './footer.module.scss'
import { FooterSocialItemI } from './footer.types'
import Social from './social'


const Footer: FC = () => {
  return (
    <footer className={styles.root}>
      <Wrapper className={styles.wrapper}>
      </Wrapper>
    </footer>
  )
}

export default Footer
