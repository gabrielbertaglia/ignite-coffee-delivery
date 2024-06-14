import { useFormContext } from 'react-hook-form'
import { AddressForm } from './styles'
import { Input } from '../../../../components/Input'
import { OrderType } from '../..'

export function NewAddressForm() {
  const {
    register,
    formState: { errors },
  } = useFormContext<OrderType>()

  return (
    <AddressForm>
      <Input
        placeholder="CEP"
        containerProps={{ style: { gridArea: 'cep' } }}
        error={errors.cep}
        {...register('cep')}
        maxLength={8}
      />
      <Input
        placeholder="Address"
        {...register('address')}
        containerProps={{ style: { gridArea: 'address' } }}
        error={errors.address}
      />
      <Input
        placeholder="Number"
        {...register('number')}
        containerProps={{ style: { gridArea: 'number' } }}
        error={errors.number}
      />
      <Input
        placeholder="Complement"
        {...register('complement')}
        containerProps={{ style: { gridArea: 'complement' } }}
      />
      <Input
        placeholder="Neighborhood"
        {...register('neighborhood')}
        containerProps={{ style: { gridArea: 'neighborhood' } }}
        error={errors.neighborhood}
      />
      <Input
        placeholder="City"
        {...register('city')}
        containerProps={{ style: { gridArea: 'city' } }}
        error={errors.city}
      />
      <Input
        placeholder="UF"
        {...register('state')}
        containerProps={{ style: { gridArea: 'state' } }}
        error={errors.state}
      />
    </AddressForm>
  )
}
