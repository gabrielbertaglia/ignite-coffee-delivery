import styled from 'styled-components'
import { BaseCardCheckout } from '../../styles'

export const ContainerPaymentMethod = styled(BaseCardCheckout)`
  // monitor
  width: 640px;
`

export const ContainerRadio = styled.div`
  display: flex;
  gap: 12px;
`
export const PaymentHeader = styled.div`
  display: flex;
  gap: 0.5rem;

  padding-bottom: 2rem;

  > svg {
    color: ${(props) => props.theme.purple};
  }
`
