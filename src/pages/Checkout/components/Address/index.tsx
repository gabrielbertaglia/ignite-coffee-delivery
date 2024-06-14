import { useTheme } from 'styled-components'
import { MapPinLine } from '@phosphor-icons/react'
import { AddressHeader, ContainerAddress } from './styles'
import { Paragraph } from '../../../../components/Text'

import { NewAddressForm } from '../NewAddressForm'

export function Address() {
  const theme = useTheme()

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

      <NewAddressForm />
    </ContainerAddress>
  )
}
