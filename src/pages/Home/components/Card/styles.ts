import styled from 'styled-components'

export const CardContainer = styled.div`
  background-color: ${(props) => props.theme['base-card']};
  display: flex;
  align-items: center;
  flex-direction: column;

  padding: 0 24px 20px;

  border-radius: 6px 36px 6px 36px;
  img {
    margin-top: -20px;
    margin-bottom: 12px;
  }
`

export const Tags = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 4px;

  span {
    padding: 4px 8px;
    border-radius: 999px;
    background-color: ${(props) => props.theme['yellow-light']};
    color: ${(props) => props.theme['yellow-dark']};
    text-transform: uppercase;
    font-size: 10px;
    line-height: 1.3;
    font-weight: bold;
  }
`

export const BottomContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;

  a {
    display: flex;
    align-items: center;
    padding: 0.5rem;
    justify-content: center;
    border-radius: 6px;

    background-color: ${(props) => props.theme['purple-dark']};
    svg {
      color: ${(props) => props.theme.white};
    }
  }
`

export const AsideBottom = styled.aside`
  display: flex;
  align-items: center;
  height: 100%;
  gap: 8px;
`

export const Price = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`

export const ContainerMiddle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  padding: 1rem 0 2.063rem;
`
