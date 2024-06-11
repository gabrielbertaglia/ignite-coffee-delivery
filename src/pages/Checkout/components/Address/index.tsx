import { useTheme } from 'styled-components'
import { Title } from '../../components/Title'
import { MapPinLine } from '@phosphor-icons/react'
import { AddressForm, AddressHeader, ContainerAddress, Header } from './styles'
import { Paragraph } from '../../../../components/Text'

import * as zod from 'zod'
import { FormProvider, useForm } from 'react-hook-form'
import { NewAddressForm } from '../NewAddressForm'
import { zodResolver } from '@hookform/resolvers/zod'

const newAddressFormValidation = zod.object({
  cep: zod.string({
    required_error: 'CEP is required',
  }),
  address: zod.string({
    required_error: 'Address is required',
  }),
  number: zod.string({
    required_error: 'Number is required',
  }),
  complement: zod.string(),
  neighborhood: zod.string({
    required_error: 'Neighborhood is required',
  }),
  city: zod.string({
    required_error: 'City is required',
  }),
  state: zod.string({
    required_error: 'State is required',
  }),
  paymentMethod: zod.string({
    required_error: 'Payment is required',
  }),
})

type AddressFormType = {
  cep: string
  address: string
  number: string
  complement?: string
  neighborhood: string
  city: string
  state: string
  paymentMethod: 'credit' | 'debit' | 'cash'
}

export type OrderType = Zod.infer<typeof newAddressFormValidation>

export function Address() {
  const theme = useTheme()

  const newAddressForm = useForm<AddressFormType>({
    resolver: zodResolver(newAddressFormValidation),
  })

  return (
    <ContainerAddress>
      <AddressHeader>
        <MapPinLine size={22} color={theme['yellow-dark']} />
        <div>
          <Paragraph variant="m" variantColor={theme['base-subtitle']}>
            Endereço de Entrega
          </Paragraph>
          <Paragraph variant="s" variantColor={theme['base-text']}>
            Informe o endereço onde deseja receber seu pedido
          </Paragraph>
        </div>
      </AddressHeader>

      <FormProvider {...newAddressForm}>
        <NewAddressForm />
      </FormProvider>
    </ContainerAddress>
  )
}
