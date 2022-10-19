import { fireEvent, render, screen } from '@testing-library/react'
import StartBox from './index'

describe('Start Box 테스트', () => {
  it('새 게임 버튼 테스트', () => {
    const startNewGame = jest.fn()
    render(<StartBox startNewGame={startNewGame} />)
    fireEvent.click(screen.getByText('NEW GAME'))
    expect(startNewGame).toBeCalled()
  })
})
