import { ElementType, FC } from 'react'
import classNames from 'classnames'

import styles from './typography.module.scss'
import { TypographyProps } from './typography.types'

const defaultElement = 'p'

export default function Typography<T extends ElementType = typeof defaultElement>({
  className,
  children,
  as
}:TypographyProps<T> ) {
  const rootClassName = classNames(styles.root, className)
  const TagName = as || defaultElement
  
  return (
    <TagName className={rootClassName}>{children}</TagName>
  )
}