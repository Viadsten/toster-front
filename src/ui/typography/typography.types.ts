import { ElementType, ReactNode } from "react"

export interface TypographyProps<T extends ElementType> {
  children?: string | ReactNode
  className?: string
  as?: T
}