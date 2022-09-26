interface IProps {
  matrix: number[][]
}

/**
 * 새로운 셀을 추가하는 함수
 * @param { number[][] } matrix 기존 2048 매트릭스
 * @returns 새로운 셀이 추가된 함수
 */
export const addNewCell = ({ matrix }: IProps) => {
  const newMatrix = new Array(4).fill(0).map(() => new Array(4).fill(0))
  const empty = matrix.reduce((acc, cur) => acc + cur.filter((cell) => cell === 0).length, 0)
  let target = Math.floor(Math.random() * empty)
  for (let i = 0; i < 4; i += 1) {
    for (let j = 0; j < 4; j += 1) {
      if (matrix[i][j] === 0) {
        if (target === 0) {
          newMatrix[i][j] = 2
        }
        target -= 1
      } else {
        newMatrix[i][j] = matrix[i][j]
      }
    }
  }
  return newMatrix
}
