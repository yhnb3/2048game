import { checkGameOver, moveDown, moveLeft, moveRight, moveUp } from 'libs'
import { useEffect, useState } from 'react'

interface IProps {
  matrix: number[][]
}

export const useCheckGameOver = ({ matrix }: IProps) => {
  const [isGameOver, setIsGameOver] = useState(false)
  useEffect(() => {
    const { matrix: movedLeftMatrix } = moveLeft({ matrix })
    const { matrix: movedRightMatrix } = moveRight({ matrix })
    const { matrix: movedUpMatrix } = moveUp({ matrix })
    const { matrix: movedDownMatrix } = moveDown({ matrix })
    setIsGameOver(checkGameOver({ movedLeftMatrix, movedRightMatrix, movedUpMatrix, movedDownMatrix }))
  }, [matrix])

  return { isGameOver }
}
