import styled from 'styled-components'

export const AddressForm = styled.div`
  display: grid;
  grid-template-areas:
    'cep . .'
    'address address address'
    'number complement complement'
    'neighborhood city state';
  grid-template-columns: 200px 1fr 60px;
  grid-gap: 16px 12px;
`
