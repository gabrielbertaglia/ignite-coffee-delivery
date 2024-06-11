import { InputHTMLAttributes } from 'react'
import styled from 'styled-components'

export interface RadioProps extends InputHTMLAttributes<HTMLInputElement> {
  isSelected?: boolean
}

export const Container = styled.label<RadioProps>`
  display: flex;
  align-items: center;
  padding: 1rem;
  border-radius: 6px;
  gap: 12px;
  color: ${(props) => props.theme['base-text']};

  width: 100%;

  text-transform: uppercase;

  font-size: 12px;
  font-weight: bold;
  line-height: 1.6;
  transition: all 0.5s;

  input {
    display: none;
  }

  border: ${(props) =>
    props.isSelected ? `1px solid ${props.theme.purple};` : 'none;'};
  background-color: ${(props) =>
    props.isSelected
      ? `${props.theme['purple-light']};`
      : props.theme['base-button']};

  &:hover {
    background-color: ${(props) => props.theme['base-hover']};
    color: ${(props) => props.theme['base-subtitle']};
  }

  svg {
    color: ${(props) => props.theme.purple};
  }
`
