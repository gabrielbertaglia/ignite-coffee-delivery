import { Container, Aside, Location } from './styles'
import LogoCoffee from '../../assets/coffee-delivery-logo.svg'
import { MapPin, ShoppingCartSimple } from '@phosphor-icons/react'
import { Link, matchPath, useLocation, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Paragraph } from '../Text'
import { useTheme } from 'styled-components'
import { LocationType } from '../../pages/Success'

export function Header() {
  const theme = useTheme()
  const { coffeeQuantity } = useContext(CartContext)
  const { state, pathname } = useLocation() as LocationType
  const navigate = useNavigate()

  console.log('state0', state)

  function handleCleanState() {
    const isOnOrderRoute = matchPath({ path: '/order/*' }, pathname)
    console.log('isOnOrderRoute', isOnOrderRoute !== null)
    if (isOnOrderRoute !== null) {
      navigate(pathname, { replace: true, state: null })
    }
  }

  return (
    <Container>
      <Link to={'/'} onClick={handleCleanState}>
        <img src={LogoCoffee} alt="" />
      </Link>

      <Aside>
        {state && Object.keys(state).length !== 0 ? (
          <Location>
            <MapPin size={22} weight="fill" />
            <span>
              {state.city}, {state.state}
            </span>
          </Location>
        ) : (
          <></>
        )}

        <Link to="/checkout">
          <>
            <ShoppingCartSimple size={22} weight="fill" />
            {coffeeQuantity > 0 && (
              <>
                <span>
                  <Paragraph variant="s" bold variantColor={theme.white}>
                    {coffeeQuantity}
                  </Paragraph>
                </span>
              </>
            )}
          </>
        </Link>
      </Aside>
    </Container>
  )
}
