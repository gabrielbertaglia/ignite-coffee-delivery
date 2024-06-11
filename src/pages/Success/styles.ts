import styled from 'styled-components'

export const CardSuccess = styled.main`
  display: flex;
  flex-direction: column;

  padding-top: 80px;
  gap: 40px;
`

export const CardHeader = styled.div`
  display: flex;
  flex-direction: column;

  gap: 4px;
`

export const CardBody = styled.div`
  display: flex;
  justify-content: space-between;

  gap: 102px;
`

export const CardInfo = styled.div`
  border: 1px solid;
  border-radius: 6px 36px;
  width: 100%;

  border-color: transparent;
  background-origin: border-box;
  background-image: ${(props) =>
    `linear-gradient(to bottom right, ${props.theme.yellow}, ${props.theme.purple})`};
`

export const Info = styled.div`
  padding: 40px;
  background-color: ${(props) => props.theme.background};
  border-radius: 6px 36px;
  height: 100%;

  display: flex;
  flex-direction: column;
  gap: 32px;

  > div {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  > div div {
    > span {
      display: flex;
    }
  }
`

export const IconButton = styled.div`
  width: 32px;
  height: 32px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 999px;

  svg {
    color: ${(props) => props.theme.background};
  }
`
