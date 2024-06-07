import { ReactNode } from 'react'
import { TitleComponent, VariantTitle } from './styles'

interface TitleProps {
  variant: VariantTitle
  children: ReactNode
  variantColor?: string
}

export function Title({ variant, children, variantColor }: TitleProps) {
  return (
    <TitleComponent variant={variant} variantColor={variantColor}>
      {children}
    </TitleComponent>
  )
}
