import { render } from '@testing-library/react'

import Cell from './Cell'

describe('Cell이 제대로 동작하는지 알아보기', () => {
  it('움직이는 cell style제대로 적용되는지 확인', () => {
    const cell = {
      current: 2,
      prev: 2,
      move: 2,
      isNew: false,
      direction: 'X',
    }
    const { container } = render(<Cell cell={cell} isAdd />)
    expect(container.textContent).toBe('2')
    expect(container.children[0]).toHaveStyle({ transform: 'translateX(220px)' })
  })
  it('새로 등장하는 cell 제대로 나오는지 확인', () => {
    const cell = {
      current: 4,
      prev: 0,
      move: 0,
      isNew: true,
      direction: 'X',
    }
    const { container } = render(<Cell cell={cell} isAdd />)
    expect(container.textContent).toBe('4')
    expect(container.children[0].classList.contains('add')).toBe(true)
  })
})
