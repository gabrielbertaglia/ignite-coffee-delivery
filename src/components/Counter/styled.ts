import styled from 'styled-components'

export const CounterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  height: 100%;
  padding: 0.5rem;

  border-radius: 6px;

  background: ${(props) => props.theme['base-button']};

  button > svg {
    color: ${(props) => props.theme.purple};
  }

  button {
    cursor: pointer;
    display: flex;
    border: 0;
    background: none;
  }
`
