import { render, screen } from '@testing-library/react'
import Header from './index'

describe('헤더 잘 나오는지 테스트', () => {
  it('2048 잘 나오는지 테스트', () => {
    render(<Header score={10} maxScore={20} />)
    expect(screen.getByText('2048')).toBeTruthy()
  })
  it('score 잘 나오는지 테스트', () => {
    render(<Header score={10} maxScore={20} />)
    expect(screen.getByText('10')).toBeTruthy()
  })
  it('maxscore 잘 나오는지 테스트', () => {
    render(<Header score={10} maxScore={20} />)
    expect(screen.getByText('20')).toBeTruthy()
  })
})
