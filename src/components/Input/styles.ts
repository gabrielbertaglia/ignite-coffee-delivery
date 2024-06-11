import styled from 'styled-components'

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

export const Container = styled.label`
  display: flex;
  justify-content: space-between;
  align-items: center;

  border: 1px solid ${(props) => props.theme['base-button']};
  border-radius: 6px;

  :focus {
    border: 1px solid ${(props) => props.theme['yellow-dark']};
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
`
