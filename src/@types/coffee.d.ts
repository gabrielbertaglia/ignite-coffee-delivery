/* eslint-disable no-use-before-define */
export interface Coffee {
  id: string
  img: string
  tags: Tag[]
  name: string
  description: string
  price: number
}

export interface Tag {
  id: string
  name: string
}
