import { CurrencyDollar } from '@phosphor-icons/react'
import { PaymentMethodInput } from '../../../../components/Radio'
import { ContainerPaymentMethod, ContainerRadio, PaymentHeader } from './styles'
import { Paragraph } from '../../../../components/Text'
import { useTheme } from 'styled-components'
import { paymentMethods } from '../../../Success'
import { useFormContext } from 'react-hook-form'
import { ErrorMessage } from '../../../../components/Input/styles'
import { OrderType } from '../..'

export function PaymentMethod() {
  const theme = useTheme()

  const {
    register,
    formState: { errors },
  } = useFormContext<OrderType>()

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
        <div>
          {Object.entries(paymentMethods).map(([key, { label, icon }]) => (
            // eslint-disable-next-line react/jsx-key
            <PaymentMethodInput
              key={label}
              value={key}
              id={key}
              icon={icon}
              label={label}
              {...register('paymentMethod')}
            />
          ))}
        </div>
        {errors && (
          <ErrorMessage role="alert">
            <Paragraph variant="xs">{errors.paymentMethod?.message}</Paragraph>
          </ErrorMessage>
        )}
        {/* <Radio>
          <Bank weight="regular" />
          Cartao de Débito
        </Radio>
        <Radio>
          <Money weight="regular" />
          Dinheiro
        </Radio> */}
      </ContainerRadio>
    </ContainerPaymentMethod>
  )
}
