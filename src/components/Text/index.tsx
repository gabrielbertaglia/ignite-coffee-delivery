import { ReactNode } from 'react'
import { TextComponent, VariantText } from './styles'

interface TextProps {
  variant: VariantText
  variantColor?: string
  children: ReactNode
}

export function Paragraph({ variant, children, variantColor }: TextProps) {
  return (
    <TextComponent variant={variant} variantColor={variantColor}>
      {children}
    </TextComponent>
  )
}
