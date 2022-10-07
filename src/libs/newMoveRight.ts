import { ICell } from 'types'

interface IProps {
  matrix: ICell[][]
}

/**
 * 매트릭스를 오른쪽 방향으로 누적하게 하는 함수
 * @param { ICell[][] } matrix 기존 2048 매트릭스
 * @returns matrix 누적된 매트릭스와 점수
 */

export const newMoveRight = ({ matrix }: IProps) => {
  const newMatrix = new Array(4).fill(0).map(() =>
    new Array(4).fill(0).map(() => {
      return { prev: 0, current: 0, move: 0, isNew: false, direction: 'X' }
    })
  )
  let score = 0
  for (let x = 0; x < 4; x += 1) {
    let idx = 3
    let newIdx = 3
    let canBeMergeNum = -1
    let canBeMergeIdx = -1
    while (idx >= 0) {
      newMatrix[x][idx].prev = matrix[x][idx].current
      if (matrix[x][idx].current !== 0) {
        if (canBeMergeNum === -1) {
          canBeMergeNum = matrix[x][idx].current
          canBeMergeIdx = idx
        } else if (matrix[x][idx].current === canBeMergeNum) {
          newMatrix[x][newIdx].current = canBeMergeNum * 2
          newMatrix[x][newIdx].isNew = true
          score += canBeMergeNum * 2
          newMatrix[x][canBeMergeIdx].move = newIdx - canBeMergeIdx
          newMatrix[x][idx].move = newIdx - idx
          canBeMergeNum = -1
          newIdx -= 1
        } else {
          newMatrix[x][newIdx].current = canBeMergeNum
          newMatrix[x][canBeMergeIdx].move = newIdx - canBeMergeIdx
          canBeMergeNum = matrix[x][idx].current
          canBeMergeIdx = idx
          newIdx -= 1
        }
      }
      idx -= 1
    }
    if (canBeMergeNum !== -1) {
      newMatrix[x][newIdx].current = canBeMergeNum
      newMatrix[x][canBeMergeIdx].move = newIdx - canBeMergeIdx
    }
  }

  return { matrix: newMatrix, score }
}
