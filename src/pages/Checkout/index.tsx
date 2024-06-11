import { useTheme } from 'styled-components'
import { Title } from '../../components/Title'
import { Container, LeftSide, MainContainer } from './styles'
import { Address } from './components/Address'
import { PaymentMethod } from './components/PaymentMethod'
import { InfoTotal } from './components/InfoTotal'

export function Checkout() {
  const theme = useTheme()
  return (
    <MainContainer>
      <Container>
        <form
        //  action="" onSubmit={handleSubmit(handleCreateNewCycle)}
        >
          <Title variant="xs" variantColor={theme['base-subtitle']}>
            Complete seu pedido
          </Title>

          <LeftSide>
            <Address />
            <PaymentMethod />
          </LeftSide>
        </form>
      </Container>
      <Container>
        <Title variant="xs" variantColor={theme['base-subtitle']}>
          Cafés selecionados
        </Title>
        <InfoTotal />
      </Container>
    </MainContainer>
  )
}
