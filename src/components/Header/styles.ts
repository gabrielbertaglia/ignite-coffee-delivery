import styled from 'styled-components'

export const Container = styled.header`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 2rem 0;
`

export const Aside = styled.aside`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;

  a {
    /* text-decoration: none; */
    display: flex;
    align-items: center;
    position: relative;
    padding: 0.5rem;
    /* width: 38px;
    height: 38px; */
    /* width: 100%; */
    justify-content: center;
    border-radius: 6px;

    background-color: ${(props) => props.theme['yellow-light']};
    svg {
      /* margin: 0.5rem; */
      color: ${(props) => props.theme['yellow-dark']};
    }

    > span {
      background-color: ${(props) => props.theme['yellow-dark']};
      padding: 2px;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      top: 0;
      right: 0;
      transform: translate(50%, -50%);
    }
  }
`

export const Location = styled.div`
  display: flex;
  gap: 4px;
  background-color: ${(props) => props.theme['purple-light']};
  padding: 0.5rem;
  border-radius: 6px;

  span {
    color: ${(props) => props.theme['purple-dark']};
  }

  svg {
    color: ${(props) => props.theme.purple};
  }
`
