import americano from './assets/coffees/americano.png'
import arabe from './assets/coffees/arabe.png'
import cafeComLeite from './assets/coffees/cafe-com-leite.png'
import cafeGelado from './assets/coffees/cafe-gelado.png'
import capuccino from './assets/coffees/capuccino.png'
import chocolateQuente from './assets/coffees/chocolate-quente.png'
import cubano from './assets/coffees/cubano.png'
import expressoCremoso from './assets/coffees/expresso-cremoso.png'
import expresso from './assets/coffees/expresso.png'
import havaiano from './assets/coffees/havaiano.png'
import irlandes from './assets/coffees/irlandes.png'
import latte from './assets/coffees/latte.png'
import macchiato from './assets/coffees/macchiato.png'
import mochaccino from './assets/coffees/mochaccino.png'

export const coffees = [
  {
    id: '1',
    img: expresso,
    tags: [
      {
        id: '1',
        name: 'Tradicional',
      },
    ],
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.99,
  },
  {
    id: '2',
    img: americano,
    tags: [
      {
        id: '1',
        name: 'Tradicional',
      },
    ],
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 9,
  },
  {
    id: '3',
    img: expressoCremoso,
    tags: [
      {
        id: '1',
        name: 'Tradicional',
      },
    ],
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    price: 9.9,
  },
  {
    id: '4',
    img: cafeGelado,
    tags: [
      {
        id: '1',
        name: 'Tradicional',
      },
      {
        id: '2',
        name: 'Gelado',
      },
    ],
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 9.9,
  },
  {
    id: '5',
    img: cafeComLeite,
    tags: [
      {
        id: '1',
        name: 'Tradicional',
      },
      {
        id: '2',
        name: 'Com Leite',
      },
    ],
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 9.9,
  },
  {
    id: '6',
    img: latte,
    tags: [
      {
        id: '1',
        name: 'Tradicional',
      },
      {
        id: '2',
        name: 'Com Leite',
      },
    ],
    name: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 9.9,
  },
  {
    id: '7',
    img: capuccino,
    tags: [
      {
        id: '1',
        name: 'Tradicional',
      },
      {
        id: '2',
        name: 'Com Leite',
      },
    ],
    name: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 9.9,
  },
  {
    id: '8',
    img: macchiato,
    tags: [
      {
        id: '1',
        name: 'Tradicional',
      },
      {
        id: '2',
        name: 'Com Leite',
      },
    ],
    name: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    price: 9.9,
  },
  {
    id: '9',
    img: mochaccino,
    tags: [
      {
        id: '1',
        name: 'Tradicional',
      },
      {
        id: '2',
        name: 'Com Leite',
      },
    ],
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 9.9,
  },
  {
    id: '10',
    img: chocolateQuente,
    tags: [
      {
        id: '1',
        name: 'Especial',
      },
      {
        id: '2',
        name: 'Com Leite',
      },
    ],
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 9.9,
  },
  {
    id: '11',
    img: cubano,
    tags: [
      {
        id: '1',
        name: 'Especial',
      },
      {
        id: '2',
        name: 'Alcoólico',
      },
      {
        id: '3',
        name: 'Gelado',
      },
    ],
    name: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 9.9,
  },
  {
    id: '12',
    img: havaiano,
    tags: [
      {
        id: '1',
        name: 'Especial',
      },
    ],
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: 9.9,
  },
  {
    id: '13',
    img: arabe,
    tags: [
      {
        id: '1',
        name: 'Especial',
      },
    ],
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 9.9,
  },
  {
    id: '14',
    img: irlandes,
    tags: [
      {
        id: '1',
        name: 'Especial',
      },
      {
        id: '2',
        name: 'Alcoólico',
      },
    ],
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: 9.9,
  },
]

export function formatCurrency(price: number) {
  const newPrice = new Intl.NumberFormat('pt-BR', {
    minimumFractionDigits: 2,
  }).format(price)

  return newPrice
}
