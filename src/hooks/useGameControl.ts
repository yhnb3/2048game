import { checkGameOver, isEqual, newMoveDown, newMoveLeft, newMoveRight, newMoveUp } from 'libs'
import { useEffect, useState } from 'react'
import { ICell } from 'types'

interface IProps {
  matrix: ICell[][]
}

export const useGameControl = ({ matrix }: IProps) => {
  const [isGameOver, setIsGameOver] = useState(false)
  const [isLeftPossible, setIsLeftPossible] = useState(true)
  const [isRightPossible, setIsRightPossible] = useState(true)
  const [isUpPossible, setIsUpPossible] = useState(true)
  const [isDownPossible, setIsDownPossible] = useState(true)
  useEffect(() => {
    const { matrix: movedLeftMatrix } = newMoveLeft({ matrix })
    const { matrix: movedRightMatrix } = newMoveRight({ matrix })
    const { matrix: movedUpMatrix } = newMoveUp({ matrix })
    const { matrix: movedDownMatrix } = newMoveDown({ matrix })
    setIsGameOver(checkGameOver({ movedLeftMatrix, movedRightMatrix, movedUpMatrix, movedDownMatrix }))
    setIsLeftPossible(!isEqual({ matrix1: matrix, matrix2: movedLeftMatrix }))
    setIsRightPossible(!isEqual({ matrix1: matrix, matrix2: movedRightMatrix }))
    setIsUpPossible(!isEqual({ matrix1: matrix, matrix2: movedUpMatrix }))
    setIsDownPossible(!isEqual({ matrix1: matrix, matrix2: movedDownMatrix }))
  }, [matrix])

  return {
    isGameOver,
    isPossible: { left: isLeftPossible, right: isRightPossible, down: isDownPossible, up: isUpPossible },
  }
}
