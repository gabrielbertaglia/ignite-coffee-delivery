import { createContext, ReactNode, useEffect, useReducer } from 'react'
import { Coffee } from '../@types/coffee'

import { cartReducer, Order } from '../reducers/cart/reducer'
import {
  addCoffeeAction,
  checkoutOrderAction,
  coffeeQtdAction,
  removeCoffeeFromCartAction,
} from '../reducers/cart/actions'
import { OrderType } from '../pages/Checkout'
import { useNavigate } from 'react-router-dom'

export interface CartItem extends Coffee {
  quantity: number
}

export type CoffeeType = 'increment' | 'decrement'

interface CartContextType {
  cart: CartItem[]
  orders: Order[]
  coffeeQuantity: number
  addCoffeeToCart: (coffee: CartItem) => void
  coffeeQtd: (cartItemId: string, type: CoffeeType) => void
  removeCoffeeFromCart: (cartItemId: string) => void
  cartItemsTotal: number
  checkoutOrder: (order: OrderType) => void
}

interface CartContextProviderProps {
  children: ReactNode
}

const COFFEE_ITEMS_STORAGE_KEY = 'coffee-delivery:cartItems'

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartState, dispatch] = useReducer(
    cartReducer,
    {
      cart: [],
      orders: null,
    },
    (cartState) => {
      const storageCartItems = localStorage.getItem(COFFEE_ITEMS_STORAGE_KEY)
      if (storageCartItems) {
        return JSON.parse(storageCartItems)
      }

      return cartState
    },
  )

  const { cart, orders } = cartState

  const navigate = useNavigate()
  const coffeeQuantity = cart.length

  const cartItemsTotal = cart.reduce((total, cartItem) => {
    return total + cartItem.price * cartItem.quantity
  }, 0)

  function addCoffeeToCart(item: CartItem) {
    dispatch(addCoffeeAction(item))
  }

  function coffeeQtd(cartItemId: string, type: CoffeeType) {
    dispatch(coffeeQtdAction(cartItemId, type))
  }

  function removeCoffeeFromCart(cartItemId: string) {
    dispatch(removeCoffeeFromCartAction(cartItemId))
  }

  function checkoutOrder(order: OrderType) {
    dispatch(checkoutOrderAction(order, navigate))
  }

  useEffect(() => {
    if (cartState) {
      const stateJSON = JSON.stringify(cartState)

      localStorage.setItem(COFFEE_ITEMS_STORAGE_KEY, stateJSON)
    }
  }, [cartState])

  return (
    <CartContext.Provider
      value={{
        cart,
        orders,
        coffeeQuantity,
        addCoffeeToCart,
        coffeeQtd,
        removeCoffeeFromCart,
        cartItemsTotal,
        checkoutOrder,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
