import { Container, Aside, Location } from './styles'
import LogoCoffee from '../../assets/coffee-delivery-logo.svg'
import { MapPin, ShoppingCartSimple } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'

export function Header() {
  return (
    <Container>
      <img src={LogoCoffee} alt="" />

      <Aside>
        <Location>
          <MapPin size={22} weight="fill" />
          <span>Porto Alegre, RS</span>
        </Location>

        <Link to="/checkout">
          <ShoppingCartSimple size={22} weight="fill" />
        </Link>
      </Aside>
    </Container>
  )
}
