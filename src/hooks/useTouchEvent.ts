import { useState } from 'react'

interface IProps {
  conditionalMoveFnc: (key: string) => void
}

export const useTouchEvent = ({ conditionalMoveFnc }: IProps) => {
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)

  const handleTouchStart = (e: TouchEvent) => {
    setX(e.changedTouches[0].clientX)
    setY(e.changedTouches[0].clientY)
  }

  const handleTouchEnd = (e: TouchEvent) => {
    const moveX = x - e.changedTouches[0].clientX
    const moveY = y - e.changedTouches[0].clientY
    if (Math.abs(moveX) > Math.abs(moveY)) {
      conditionalMoveFnc(moveX > 0 ? 'ArrowLeft' : 'ArrowRight')
    } else {
      conditionalMoveFnc(moveY > 0 ? 'ArrowUp' : 'ArrowDown')
    }
  }

  return { handleTouchStart, handleTouchEnd }
}
