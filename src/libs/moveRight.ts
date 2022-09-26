interface IProps {
  matrix: number[][]
}

/**
 * 매트릭스를 오른쪽 방향으로 누적하게 하는 함수
 * @param { number[][] } matrix 기존 2048 매트릭스
 * @returns 오른쪽으로 누적된 매트릭스
 */

export const moveRight = ({ matrix }: IProps) => {
  const newMatrix = new Array(4).fill(0).map(() => new Array(4).fill(0))
  for (let x = 0; x < 4; x += 1) {
    let idx = 3
    let newIdx = 3
    let prevNum = -1
    while (idx >= 0) {
      if (matrix[x][idx] !== 0) {
        if (prevNum === -1) {
          prevNum = matrix[x][idx]
        } else if (matrix[x][idx] === prevNum) {
          newMatrix[x][newIdx] = prevNum * 2
          prevNum = -1
          newIdx -= 1
        } else {
          newMatrix[x][newIdx] = prevNum
          prevNum = matrix[x][newIdx]
          newIdx -= 1
        }
      }
      idx -= 1
    }
    if (prevNum !== -1) {
      newMatrix[x][newIdx] = prevNum
    }
  }
  return newMatrix
}
