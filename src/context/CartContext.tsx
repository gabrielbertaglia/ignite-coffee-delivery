import { createContext, ReactNode, useEffect, useState } from 'react'
import { Coffee } from '../@types/coffee'

import { produce } from 'immer'

export interface CartItem extends Coffee {
  quantity: number
}

type CoffeeType = 'increment' | 'decrement'

interface CartContextType {
  cartItems: CartItem[]
  coffeeQuantity: number
  addCoffeeToCart: (coffee: CartItem) => void
  coffeeQtd: (cartItemId: string, type: CoffeeType) => void
  removeCoffeeFromCart: (cartItemId: string) => void
  cartItemsTotal: number
  cleanCart: () => void
}

interface CartContextProviderProps {
  children: ReactNode
}

const COFFEE_ITEMS_STORAGE_KEY = 'coffee-delivery:cartItems'

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const storageCartItems = localStorage.getItem(COFFEE_ITEMS_STORAGE_KEY)
    if (storageCartItems) {
      return JSON.parse(storageCartItems)
    }
    return []
  })

  const coffeeQuantity = cartItems.length

  const cartItemsTotal = cartItems.reduce((total, cartItem) => {
    return total + cartItem.price * cartItem.quantity
  }, 0)

  function addCoffeeToCart(coffee: CartItem) {
    const coffeeExistsInCart = cartItems.findIndex(
      (cartItem) => cartItem.id === coffee.id,
    )

    const newCart = produce(cartItems, (draft) => {
      if (coffeeExistsInCart < 0) {
        draft.push(coffee)
      } else {
        draft[coffeeExistsInCart].quantity += coffee.quantity
      }
    })

    setCartItems(newCart)
  }

  function coffeeQtd(cartItemId: string, type: CoffeeType) {
    const newCart = produce(cartItems, (draft) => {
      const coffeeExistsInCart = cartItems.findIndex(
        (cartItem) => cartItem.id === cartItemId,
      )
      const coffee = draft[coffeeExistsInCart]
      coffee.quantity =
        type === 'increment' ? coffee.quantity + 1 : coffee.quantity - 1
    })

    setCartItems(newCart)
  }

  function removeCoffeeFromCart(cartItemId: string) {
    const newCart = produce(cartItems, (draft) => {
      const coffeeExistsInCart = cartItems.findIndex(
        (cartItem) => cartItem.id === cartItemId,
      )

      if (coffeeExistsInCart >= 0) {
        draft.splice(coffeeExistsInCart, 1)
      }
    })

    setCartItems(newCart)
  }

  function cleanCart() {
    setCartItems([])
  }

  useEffect(() => {
    localStorage.setItem(COFFEE_ITEMS_STORAGE_KEY, JSON.stringify(cartItems))
  }, [cartItems])

  return (
    <CartContext.Provider
      value={{
        cartItems,
        coffeeQuantity,
        addCoffeeToCart,
        coffeeQtd,
        removeCoffeeFromCart,
        cartItemsTotal,
        cleanCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
