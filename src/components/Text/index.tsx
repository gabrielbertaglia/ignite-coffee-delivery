import { ReactNode } from 'react'
import { TextComponent, VariantText } from './styles'

interface TextProps {
  variant: VariantText
  variantColor?: string
  bold?: boolean
  children: ReactNode
}

export function Paragraph({
  variant,
  children,
  bold,
  variantColor,
}: TextProps) {
  return (
    <TextComponent variant={variant} variantColor={variantColor} bold={bold}>
      {children}
    </TextComponent>
  )
}
