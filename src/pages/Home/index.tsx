import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react'
import { Paragraph } from '../../components/Text'
import { Title } from '../../components/Title'
import {
  Intro,
  IntroContainer,
  Heading,
  Info,
  MainContainer,
  CoffeeContainer,
} from './styles'
import cupImg from '../../assets/cup-coffe-delivery.png'

import { useTheme } from 'styled-components'
import { Card } from './components/Card'
import { coffees } from '../../utils'

export function Home() {
  const theme = useTheme()

  return (
    <>
      <Intro>
        <IntroContainer>
          <div>
            <Heading>
              <Title variant="xl" variantColor={theme['base-title']}>
                Encontre o café perfeito para qualquer hora do dia
              </Title>
              <Paragraph variant="l">
                Com o Coffee Delivery você recebe seu café onde estiver, a
                qualquer hora
              </Paragraph>
            </Heading>

            <Info>
              <div
              // style={{
              //   justifyContent: `start`,
              // }}
              >
                <ShoppingCart
                  weight="fill"
                  size={32}
                  color={theme.white}
                  style={{
                    backgroundColor: theme['yellow-dark'],
                  }}
                />
                <Paragraph variant="m">Compra simples e segura</Paragraph>
              </div>
              <div>
                <Package
                  weight="fill"
                  size={32}
                  color={theme.white}
                  style={{
                    backgroundColor: theme['base-text'],
                  }}
                />
                <Paragraph variant="m">
                  Embalagem mantém o café intacto
                </Paragraph>
              </div>
              <div>
                <Timer
                  weight="fill"
                  size={32}
                  color={theme.white}
                  style={{
                    backgroundColor: theme.yellow,
                  }}
                />
                <Paragraph variant="m">Entrega rápida e rastreada</Paragraph>
              </div>
              <div>
                <Coffee
                  weight="fill"
                  size={32}
                  color={theme.white}
                  style={{
                    backgroundColor: theme.purple,
                  }}
                />
                <Paragraph variant="m">
                  O café chega fresquinho até você
                </Paragraph>
              </div>
            </Info>
          </div>
        </IntroContainer>

        <img src={cupImg} alt="" />
      </Intro>

      {/* Main */}

      <MainContainer>
        <Title variant="l" variantColor={theme['base-subtitle']}>
          Nossos cafés
        </Title>

        <CoffeeContainer>
          {coffees.map((coffee) => (
            <Card key={Number(coffee.id)} coffee={coffee} />
          ))}
        </CoffeeContainer>
      </MainContainer>
    </>
  )
}
