import { ICell } from 'types'

interface IProps {
  matrix: ICell[][]
}

/**
 * 매트릭스를 위 방향으로 누적하게 하는 함수
 * @param { ICell[][] } matrix 기존 2048 매트릭스
 * @returns matrix 누적된 매트릭스와 점수
 */

export const newMoveUp = ({ matrix }: IProps) => {
  const newMatrix = new Array(4).fill(0).map(() =>
    new Array(4).fill(0).map(() => {
      return { prev: 0, current: 0, move: 0, isNew: false, direction: 'Y' }
    })
  )
  let score = 0
  for (let y = 0; y < 4; y += 1) {
    let idx = 0
    let newIdx = 0
    let canBeMergeNum = -1
    let canBeMergeIdx = -1
    while (idx < 4) {
      newMatrix[idx][y].prev = matrix[idx][y].current
      if (matrix[idx][y].current !== 0) {
        if (canBeMergeNum === -1) {
          canBeMergeNum = matrix[idx][y].current
          canBeMergeIdx = idx
        } else if (matrix[idx][y].current === canBeMergeNum) {
          newMatrix[newIdx][y].current = canBeMergeNum * 2
          newMatrix[newIdx][y].isNew = true
          score += canBeMergeNum * 2
          newMatrix[canBeMergeIdx][y].move = newIdx - canBeMergeIdx
          newMatrix[idx][y].move = newIdx - idx
          canBeMergeNum = -1
          newIdx += 1
        } else {
          newMatrix[newIdx][y].current = canBeMergeNum
          newMatrix[canBeMergeIdx][y].move = newIdx - canBeMergeIdx
          canBeMergeNum = matrix[idx][y].current
          canBeMergeIdx = idx
          newIdx += 1
        }
      }
      idx += 1
    }
    if (canBeMergeNum !== -1) {
      newMatrix[newIdx][y].current = canBeMergeNum
      newMatrix[canBeMergeIdx][y].move = newIdx - canBeMergeIdx
    }
  }

  return { matrix: newMatrix, score }
}
