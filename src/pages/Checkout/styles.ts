import styled from 'styled-components'

export const BaseCardCheckout = styled.div`
  background-color: ${(props) => props.theme['base-card']};
  border-radius: 6px;

  padding: 2.5rem;
`

export const MainContainer = styled.main`
  display: flex;
  padding: 40px 0;
  gap: 32px;

  > form {
    flex: 1;
  }
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
`
export const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-top: 15px;
`

export const ContainerForm = styled.div`
  display: flex;
  justify-content: space-between;

  gap: 32px;

  /* width: 100%; */
`
