import { ICell } from 'types'

interface IProps {
  matrix: ICell[][]
}

/**
 * 새로운 셀을 추가하는 함수
 * @param { ICell[][] } matrix 기존 2048 매트릭스
 * @returns 새로운 셀이 추가된 함수
 */
export const addNewCell = ({ matrix }: IProps) => {
  let possibleFour = false
  const newMatrix = new Array(4).fill(0).map(() =>
    new Array(4).fill(0).map(() => {
      return { prev: 0, current: 0, move: 0, isNew: false, direction: 'Y' }
    })
  )
  const empty = matrix.reduce(
    (acc, cur) =>
      acc +
      cur.filter((cell) => {
        if (cell.current >= 16) possibleFour = true
        return cell.current === 0
      }).length,
    0
  )
  let target = Math.floor(Math.random() * empty)
  const isFour = possibleFour && Math.random() < 0.2
  for (let i = 0; i < 4; i += 1) {
    for (let j = 0; j < 4; j += 1) {
      if (matrix[i][j].current === 0) {
        if (target === 0) {
          newMatrix[i][j].current = isFour ? 4 : 2
          newMatrix[i][j].isNew = true
        }
        target -= 1
      } else {
        newMatrix[i][j].current = matrix[i][j].current
        newMatrix[i][j].prev = matrix[i][j].current
        newMatrix[i][j].isNew = matrix[i][j].isNew
      }
    }
  }
  return newMatrix
}
