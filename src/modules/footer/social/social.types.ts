import { ReactNode } from 'react'
import { FooterSocialItemI } from '../footer.types'

export interface ISocialItem {
  icon: ReactNode
  href: string
  label: string
}

export interface FooterSocialProps {
  items: ISocialItem[]
}
