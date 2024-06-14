import { useTheme } from 'styled-components'
import { Title } from '../../components/Title'
import { Container, MainContainer } from './styles'
import { Address } from './components/Address'
import { PaymentMethod } from './components/PaymentMethod'
import { InfoTotal } from './components/InfoTotal'
import * as zod from 'zod'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

enum PaymentMethods {
  credit = 'credit',
  debit = 'debit',
  cash = 'cash',
}

const newAddressFormValidation = zod.object({
  cep: zod.string().min(8, { message: 'Informe o CEP' }),
  address: zod.string().min(3, { message: 'Informe o endereço' }),
  number: zod.string().min(1, { message: 'Informe o número' }),
  complement: zod.string(),
  neighborhood: zod.string().min(1, { message: 'Informe o bairro' }),
  city: zod.string().min(1, { message: 'Informe a cidade' }),
  state: zod.string().min(1, { message: 'Informe o estado' }),
  paymentMethod: zod.nativeEnum(PaymentMethods, {
    errorMap: () => {
      return { message: 'Informe o método de pagamento' }
    },
  }),
})

export type OrderType = Zod.infer<typeof newAddressFormValidation>

type ConfirmOrderFormData = OrderType

export function Checkout() {
  const theme = useTheme()
  const navigate = useNavigate()
  const { cleanCart } = useContext(CartContext)

  const newAddressForm = useForm<ConfirmOrderFormData>({
    resolver: zodResolver(newAddressFormValidation),
  })

  const {
    handleSubmit,
    formState: { errors },
  } = newAddressForm

  function handleConfirmOrder(data: ConfirmOrderFormData) {
    console.log(data)
    navigate(`/order/${32}/success`, {
      state: data,
    })
    cleanCart()
  }

  console.log('error', errors)

  return (
    <MainContainer>
      <FormProvider {...newAddressForm}>
        <form onSubmit={handleSubmit(handleConfirmOrder)} id="order">
          <Container>
            <Title variant="xs" variantColor={theme['base-subtitle']}>
              Complete seu pedido
            </Title>

            <Address />
            <PaymentMethod />
          </Container>
        </form>
        <Container>
          <Title variant="xs" variantColor={theme['base-subtitle']}>
            Cafés selecionados
          </Title>
          <InfoTotal />
        </Container>
      </FormProvider>
    </MainContainer>
  )
}
