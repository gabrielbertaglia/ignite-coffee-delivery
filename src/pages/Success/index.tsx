import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react'
import { Paragraph } from '../../components/Text'
import { Title } from '../../components/Title'
import {
  CardBody,
  CardHeader,
  CardInfo,
  CardSuccess,
  IconButton,
  Info,
} from './styles'

import motorcycle from '../../assets/motorcycle.svg'
import { useTheme } from 'styled-components'

export function Success() {
  const theme = useTheme()

  return (
    <CardSuccess>
      <CardHeader>
        <Title variant="l" variantColor={theme['yellow-dark']}>
          Uhu! Pedido confirmado
        </Title>
        <Paragraph variant="l">
          Agora é só aguardar que logo o café chegará até você
        </Paragraph>
      </CardHeader>
      <CardBody>
        <CardInfo>
          <Info>
            <div>
              <IconButton
                style={{
                  backgroundColor: theme.purple,
                }}
              >
                <MapPin weight="fill" />
              </IconButton>
              <div>
                <span>
                  <Paragraph variant="m"> Entrega em&nbsp;</Paragraph>
                  <Paragraph variant="m" bold>
                    Rua João Daniel Martinelli, 102
                  </Paragraph>
                </span>
                <span>
                  <Paragraph variant="m">Farrapos - Porto Alegre, RS</Paragraph>
                </span>
              </div>
            </div>

            <div>
              <IconButton
                style={{
                  backgroundColor: theme.yellow,
                }}
              >
                <Timer weight="fill" />
              </IconButton>
              <div>
                <span>
                  <Paragraph variant="m">Previsão de entrega</Paragraph>
                </span>
                <span>
                  <Paragraph variant="m" bold>
                    20 min - 30 min
                  </Paragraph>
                </span>
              </div>
            </div>

            <div>
              <IconButton
                style={{
                  backgroundColor: theme['yellow-dark'],
                }}
              >
                <CurrencyDollar />
              </IconButton>
              <div>
                <span>
                  <Paragraph variant="m">Pagamento na entrega</Paragraph>
                </span>
                <span>
                  <Paragraph variant="m" bold>
                    Cartão de Crédito
                  </Paragraph>
                </span>
              </div>
            </div>
          </Info>
        </CardInfo>
        <img src={motorcycle} alt="" />
      </CardBody>
    </CardSuccess>
  )
}
