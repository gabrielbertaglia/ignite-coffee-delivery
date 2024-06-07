import styled from 'styled-components'

export type VariantText = 'l' | 'm' | 's' | 'xs'

interface TextComponentProps {
  variant: VariantText
  variantColor?: string
}

export const TextComponent = styled.p<TextComponentProps>`
  color: ${(props) => props.variantColor};

  ${({ variant, theme }) =>
    variant === 'l'
      ? `
      font-size: 1.25rem;
      line-height: 1.3;
  `
      : variant === 'm'
        ? `
  font-size: 1rem;
    line-height: 1.3;
  `
        : variant === 's'
          ? `
  font-size: 0.875rem;
    line-height: 1.3;
    // color: ${theme['base-label']}
  `
          : `
  font-size: 0.75rem;
    line-height: 1.3;
    font-weight: bold;
  `}
`
