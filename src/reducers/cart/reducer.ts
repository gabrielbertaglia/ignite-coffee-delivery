import { produce } from 'immer'
import { CartItem } from '../../context/CartContext'
import { ActionTypes, ActionTypesProps } from './actions'
import { OrderType } from '../../pages/Checkout'

import { v4 as uuidv4 } from 'uuid'

export interface Order extends OrderType {
  id: string
}

interface CartState {
  cart: CartItem[]
  orders: Order[]
}

export function cartReducer(state: CartState, action: ActionTypesProps) {
  switch (action.type) {
    case ActionTypes.ADD_COFFEE_TO_CART:
      return produce(state, (draft) => {
        const coffeeExistsInCart = draft.cart.findIndex(
          (cartItem) => cartItem.id === action.payload.item.id,
        )

        if (coffeeExistsInCart < 0) {
          draft.cart.push(action.payload.item)
        } else {
          draft.cart[coffeeExistsInCart].quantity +=
            action.payload.item.quantity
        }
      })

    case ActionTypes.COFFEE_QUANTITY:
      return produce(state, (draft) => {
        const coffeeExistsInCart = draft.cart.findIndex(
          (cartItem) => cartItem.id === action.payload.cartItemId,
        )

        const coffee = draft.cart[coffeeExistsInCart]
        coffee.quantity =
          action.payload.type === 'increment'
            ? coffee.quantity + 1
            : coffee.quantity - 1
      })

    case ActionTypes.REMOVE_COFFEE_FROM_CART:
      return produce(state, (draft) => {
        const coffeeExistsInCart = draft.cart.findIndex(
          (cartItem) => cartItem.id === action.payload.cartItemId,
        )

        if (coffeeExistsInCart >= 0) {
          draft.cart.splice(coffeeExistsInCart, 1)
        }
      })

    case ActionTypes.CHECKOUT_ORDER:
      return produce(state, (draft) => {
        const newOrder = {
          id: uuidv4(),
          item: state.cart,
          ...action.payload.order,
        }
        draft.orders = [...draft.orders, newOrder]
        draft.cart = []
        action.payload.callback(`/order/${newOrder.id}/success`)
      })
    default:
      return state
  }
}
