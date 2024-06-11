import styled from 'styled-components'

export const ContainerTotal = styled.div`
  background-color: ${(props) => props.theme['base-card']};

  border-radius: 6px 44px;

  padding: 2.5rem;

  > span {
    display: block;
    width: 100%;
    height: 1px;
    background-color: ${(props) => props.theme['base-button']};
    margin: 24px 0;
  }
`

export const Coffee = styled.div`
  display: flex;
  justify-content: space-between;

  > div {
    display: flex;
    flex: 1;
    align-items: center;
    gap: 20px;
  }

  img {
    width: 64px;
    height: 64px;
  }
`
export const Buttons = styled.div`
  display: flex;
  gap: 8px;

  width: 171px;

  svg {
    color: ${(props) => props.theme.purple};
  }

  > button {
    background-color: ${(props) => props.theme['base-button']};
    display: flex;
    align-items: center;
    gap: 4px;
    padding: 6.5px 8px;
    border: 0;
    color: ${(props) => props.theme['base-text']};
    font-size: 12px;
    line-height: 1.3;
    font-weight: bold;
    border-radius: 6px;

    text-transform: uppercase;

    cursor: pointer;
  }
`
export const ContainerTotalInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  a {
    text-decoration: none;
    text-align: center;
    margin-top: 12px;
    border: 0;
    background-color: ${(props) => props.theme.yellow};
    color: ${(props) => props.theme.white};
    font-size: 14px;
    font-weight: bold;
    line-height: 1.6;
    padding: 12px 0;
    border-radius: 6px;
    text-transform: uppercase;
    cursor: pointer;
  }
`
export const TotalInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const BtnConfirmOrder = styled.button``
