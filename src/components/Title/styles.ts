import styled from 'styled-components'

export type VariantTitle = 'xl' | 'l' | 'm' | 's' | 'xs'

interface TitleComponentProps {
  variant: VariantTitle
  variantColor?: string
}

export const TitleComponent = styled.p<TitleComponentProps>`
  font-family: 'Baloo 2', sans-serif;
  color: ${(props) => props.variantColor};
  ${(props) =>
    props.variant === 'xl'
      ? `
      font-size: 3rem;
      line-height: 1.3;
      font-weight: 900;

  `
      : props.variant === 'l'
        ? `
      font-size: 2rem;
      line-height: 1.3;
      font-weight: 900;
  `
        : props.variant === 'm'
          ? `
  font-size: 1.5rem;
    line-height: 1.3;
    font-weight: 900;
  `
          : props.variant === 's'
            ? `
  font-size: 1.25rem;
    line-height: 1.3;
    font-weight: bold;
  `
            : `
  font-size: 1.125rem;
    line-height: 1.3;
    font-weight: bold;
  `}
`
