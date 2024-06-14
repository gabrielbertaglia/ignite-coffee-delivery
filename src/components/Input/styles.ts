import styled, { css } from 'styled-components'

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const InputForm = styled.input`
  background-color: transparent;
  border: none;
  font-size: 14px;
  line-height: 1.3;
  width: 100%;
  padding: 12px;
  outline: none;

  color: ${(props) => props.theme['base-text']};

  background-color: ${(props) => props.theme['base-input']};

  &::placeholder {
    color: ${(props) => props.theme['base-label']};
  }
`

interface ContainerProps {
  hasError: boolean
}

export const Container = styled.label<ContainerProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;

  border: 1px solid ${(props) => props.theme['base-button']};
  border-radius: 6px;

  :focus {
    border: 1px solid ${(props) => props.theme['yellow-dark']};
    border-radius: 6px;
  }

  span {
    padding-right: 12px;
    -webkit-user-select: none; /* Safari */
    -ms-user-select: none; /* IE 10 and IE 11 */
    user-select: none; /* Standard syntax */
    font-style: italic;
    color: ${(props) => props.theme['base-label']};
    font-size: 12px;
  }

  ${(props) =>
    props.hasError &&
    css`
      border: 1px solid ${(props) => props.theme['base-error']};
      :focus {
        border: 1px solid ${(props) => props.theme['base-error']};
        border-radius: 6px;
      }
    `}
`
export const ErrorMessage = styled.p`
  font-weight: 400;
  color: red;
`
