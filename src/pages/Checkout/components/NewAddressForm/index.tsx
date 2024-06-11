import { useFormContext } from 'react-hook-form'
import { AddressForm } from './styles'
import { Input } from '../../../../components/Input'

export function NewAddressForm() {
  const { register } = useFormContext()
  return (
    <AddressForm>
      {/* <Cep> */}

      <Input
        placeholder="CEP"
        {...register('cep')}
        containerProps={{ style: { gridArea: 'cep' } }}
      />
      {/* </Cep> */}
      {/* <Address> */}
      <Input
        placeholder="Address"
        {...register('address')}
        containerProps={{ style: { gridArea: 'address' } }}
      />
      {/* </Address> */}
      {/* <NumberComplement> */}
      <Input
        placeholder="Number"
        {...register('number')}
        containerProps={{ style: { gridArea: 'number' } }}
      />
      <Input
        placeholder="Complement"
        {...register('complement')}
        containerProps={{ style: { gridArea: 'complement' } }}
      />
      {/* </NumberComplement> */}
      <Input
        placeholder="Neighborhood"
        {...register('neighborhood')}
        containerProps={{ style: { gridArea: 'neighborhood' } }}
      />
      <Input
        placeholder="City"
        {...register('city')}
        containerProps={{ style: { gridArea: 'city' } }}
      />
      <Input
        placeholder="UF"
        {...register('state')}
        containerProps={{ style: { gridArea: 'state' } }}
      />
    </AddressForm>
  )
}
