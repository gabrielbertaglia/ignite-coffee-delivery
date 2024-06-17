import { Bank, CreditCard, MapPin, Money, Timer } from '@phosphor-icons/react'
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
import { Path, useNavigate, useParams } from 'react-router-dom'
import { OrderType } from '../Checkout'
import { useContext, useEffect } from 'react'
import { CartContext } from '../../context/CartContext'

interface PaymentMethodsProps {
  credit: {
    label: string
    icon: JSX.Element
  }
  debit: {
    label: string
    icon: JSX.Element
  }
  cash: {
    label: string
    icon: JSX.Element
  }
}

export const paymentMethods: PaymentMethodsProps = {
  credit: {
    label: 'Cartão de Crédito',
    icon: <CreditCard />,
  },
  debit: {
    label: 'Cartão de Débito',
    icon: <Bank />,
  },
  cash: {
    label: 'Dinheiro',
    icon: <Money />,
  },
}

export interface LocationType extends Path {
  state: OrderType
}

export function Success() {
  const theme = useTheme()
  const { orders } = useContext(CartContext)
  const navigate = useNavigate()

  const { id } = useParams()
  const orderInfo = orders.find((order) => order.id === id)

  useEffect(() => {
    if (!orderInfo?.id) {
      navigate('/')
    }
  }, [navigate, orderInfo?.id])

  if (!orderInfo?.id) {
    return <></>
  }

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
                    {orderInfo.address}, {orderInfo.number}
                  </Paragraph>
                </span>
                <span>
                  <Paragraph variant="m">
                    {orderInfo.neighborhood} - {orderInfo.city},{' '}
                    {orderInfo?.state}
                  </Paragraph>
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
                {paymentMethods[orderInfo.paymentMethod].icon}
              </IconButton>
              <div>
                <span>
                  <Paragraph variant="m">Pagamento na entrega</Paragraph>
                </span>
                <span>
                  <Paragraph variant="m" bold>
                    {paymentMethods[orderInfo.paymentMethod].label}
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
