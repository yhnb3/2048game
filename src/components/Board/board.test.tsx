import { render } from '@testing-library/react'

import Board from './index'

const matrix = [
  [
    { prev: 2, current: 0, move: 3, isNew: false, direction: 'X' },
    { prev: 2, current: 0, move: 2, isNew: false, direction: 'X' },
    { prev: 0, current: 0, move: 0, isNew: false, direction: 'X' },
    { prev: 0, current: 4, move: 0, isNew: true, direction: 'X' },
  ],
  [
    { prev: 0, current: 0, move: 0, isNew: false, direction: 'X' },
    { prev: 0, current: 0, move: 0, isNew: false, direction: 'X' },
    { prev: 0, current: 0, move: 0, isNew: false, direction: 'X' },
    { prev: 0, current: 0, move: 0, isNew: false, direction: 'X' },
  ],
  [
    { prev: 0, current: 2, move: 0, isNew: true, direction: 'X' },
    { prev: 0, current: 0, move: 0, isNew: false, direction: 'X' },
    { prev: 0, current: 0, move: 0, isNew: false, direction: 'X' },
    { prev: 0, current: 0, move: 0, isNew: false, direction: 'X' },
  ],
  [
    { prev: 0, current: 0, move: 0, isNew: false, direction: 'X' },
    { prev: 0, current: 0, move: 0, isNew: false, direction: 'X' },
    { prev: 0, current: 0, move: 0, isNew: false, direction: 'X' },
    { prev: 0, current: 0, move: 0, isNew: false, direction: 'X' },
  ],
]

it('Matrix에 따라 제대로 Board에 그려지는지 테스트', () => {
  const { container } = render(<Board matrix={matrix} isAdd />)
  let count2 = 0
  let count4 = 0
  container.querySelectorAll('div').forEach((node) => {
    if (node.textContent === '2') count2 += 1
    if (node.textContent === '4') count4 += 1
  })
  expect(count2).toBe(3)
  expect(count4).toBe(1)
})
