import { Bank, CreditCard, CurrencyDollar, Money } from '@phosphor-icons/react'
import { Radio } from '../../../../components/Radio'
import { ContainerPaymentMethod, ContainerRadio, PaymentHeader } from './styles'
import { Paragraph } from '../../../../components/Text'
import { useTheme } from 'styled-components'

export function PaymentMethod() {
  const theme = useTheme()
  return (
    <ContainerPaymentMethod>
      <PaymentHeader>
        <CurrencyDollar size={22} weight="regular" />
        <div>
          <Paragraph variant="m" variantColor={theme['base-subtitle']}>
            Pagamento
          </Paragraph>
          <Paragraph variant="s">
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </Paragraph>
        </div>
      </PaymentHeader>
      <ContainerRadio>
        <Radio isSelected>
          <CreditCard weight="regular" />
          Cartao de Crédito
        </Radio>
        <Radio>
          <Bank weight="regular" />
          Cartao de Débito
        </Radio>
        <Radio>
          <Money weight="regular" />
          Dinheiro
        </Radio>
      </ContainerRadio>
    </ContainerPaymentMethod>
  )
}
