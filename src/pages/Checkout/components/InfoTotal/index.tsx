import { Paragraph } from '../../../../components/Text'
import {
  BtnConfirmOrder,
  Buttons,
  Coffee,
  ContainerTotal,
  ContainerTotalInfo,
  TotalInfo,
} from './styles'

import cafe from '../../../../assets/coffees/americano.png'
import { Counter } from '../../../../components/Counter'
import { Trash } from '@phosphor-icons/react'

export function InfoTotal() {
  return (
    <ContainerTotal>
      {[1, 2].map((_) => (
        <>
          <Coffee>
            <div>
              <img src={cafe} alt="" />
              <div>
                <Paragraph variant="m">Expresso Tradicional</Paragraph>

                <Buttons>
                  <Counter />
                  <button>
                    <Trash weight="regular" />
                    <span>Remover</span>
                  </button>
                </Buttons>
              </div>
            </div>
            <Paragraph variant="m" bold>
              R$ 9,90
            </Paragraph>
          </Coffee>
          <span />
        </>
      ))}
      <ContainerTotalInfo>
        <TotalInfo>
          <Paragraph variant="s">Total de itens</Paragraph>
          <Paragraph variant="m">R$ 29,70</Paragraph>
        </TotalInfo>

        <TotalInfo>
          <Paragraph variant="s">Entrega</Paragraph>
          <Paragraph variant="m">R$ 3,50</Paragraph>
        </TotalInfo>

        <TotalInfo>
          <Paragraph variant="l" bold>
            Total
          </Paragraph>
          <Paragraph variant="l" bold>
            R$ 33,20
          </Paragraph>
        </TotalInfo>
        <BtnConfirmOrder>Confirmar Pedido</BtnConfirmOrder>
      </ContainerTotalInfo>
    </ContainerTotal>
  )
}
