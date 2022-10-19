import { fireEvent, render, screen } from '@testing-library/react'

import GameOver from './index'

describe('게임오버시 잘 작동하는지 체크', () => {
  it('잘 나오는지 체크', () => {
    const startNewGame = jest.fn()
    render(<GameOver isGameOver startNewGame={startNewGame} />)
    expect(screen.getByTestId('gameover').classList.contains('show')).toBe(true)
  })
  it('새게임 버튼 잘되는지 테스트', () => {
    const startNewGame = jest.fn()
    render(<GameOver isGameOver startNewGame={startNewGame} />)
    const btnElement = screen.getByText('Try Again')
    fireEvent.click(btnElement)
    expect(startNewGame).toBeCalled()
  })
})
