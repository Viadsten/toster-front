import { FC } from 'react'
import Link from 'next/link'

import styles from './logo.module.scss'

const Logo: FC = () => (
  <Link href="/" className={styles.root} aria-label="home">
    LOGO
  </Link>
)

export default Logo
