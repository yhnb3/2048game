import { render, waitFor } from '@testing-library/react'
import Home from './index'

describe('여러가지 함수 동작 테스트', () => {
  let handleKeydown: () => void
  beforeEach(() => {
    handleKeydown = jest.fn()
    render(<Home />)
  })
  it('방향키 아래 버튼 동작 테스트', () => {
    const event = new KeyboardEvent('keydown', { key: 'ArrowDown', code: 'ArrowDown' })
    document.dispatchEvent(event)
    waitFor(() => expect(handleKeydown).toBeCalled())
  })
  it('방향키 위 버튼 동작 테스트', () => {
    const event = new KeyboardEvent('keydown', { key: 'ArrowUp', code: 'ArrowUp' })
    document.dispatchEvent(event)
    waitFor(() => expect(handleKeydown).toBeCalled())
  })
  it('방향키 왼 버튼 동작 테스트', () => {
    const event = new KeyboardEvent('keydown', { key: 'ArrowLeft', code: 'ArrowLeft' })
    document.dispatchEvent(event)
    waitFor(() => expect(handleKeydown).toBeCalled())
  })
  it('방향키 오른쪽 버튼 동작 테스트', () => {
    const event = new KeyboardEvent('keydown', { key: 'ArrowRight', code: 'ArrowRight' })
    document.dispatchEvent(event)
    waitFor(() => expect(handleKeydown).toBeCalled())
  })
})
