import { NavigateFunction } from 'react-router-dom'
import { OrderType } from '../../pages/Checkout'
import { CartItem, CoffeeType } from './../../context/CartContext'
export enum ActionTypes {
  ADD_COFFEE_TO_CART = 'ADD_COFFEE_TO_CART',
  COFFEE_QUANTITY = 'COFFEE_QUANTITY',
  REMOVE_COFFEE_FROM_CART = 'REMOVE_COFFEE_FROM_CART',
  CHECKOUT_ORDER = 'CHECKOUT_ORDER',
}

export type ActionTypesProps =
  | { type: ActionTypes.ADD_COFFEE_TO_CART; payload: { item: CartItem } }
  | {
      type: ActionTypes.REMOVE_COFFEE_FROM_CART
      payload: {
        cartItemId: CartItem['id']
      }
    }
  | {
      type: ActionTypes.COFFEE_QUANTITY
      payload: {
        cartItemId: CartItem['id']
        type: CoffeeType
      }
    }
  | {
      type: ActionTypes.CHECKOUT_ORDER
      payload: { order: OrderType; callback: NavigateFunction }
    }

export function addCoffeeAction(item: CartItem): ActionTypesProps {
  return {
    type: ActionTypes.ADD_COFFEE_TO_CART,
    payload: { item },
  }
}

export function coffeeQtdAction(
  cartItemId: CartItem['id'],
  type: CoffeeType,
): ActionTypesProps {
  return {
    type: ActionTypes.COFFEE_QUANTITY,
    payload: {
      cartItemId,
      type,
    },
  }
}

export function removeCoffeeFromCartAction(
  cartItemId: CartItem['id'],
): ActionTypesProps {
  return {
    type: ActionTypes.REMOVE_COFFEE_FROM_CART,
    payload: {
      cartItemId,
    },
  }
}

export function checkoutOrderAction(
  order: OrderType,
  callback: NavigateFunction,
): ActionTypesProps {
  return {
    type: ActionTypes.CHECKOUT_ORDER,
    payload: {
      order,
      callback,
    },
  }
}
