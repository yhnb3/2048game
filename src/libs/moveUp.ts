interface IProps {
  matrix: number[][]
}

/**
 * 매트릭스를 윗 방향으로 누적하게 하는 함수
 * @param { number[][] } matrix 기존 2048 매트릭스
 * @returns 위로 누적된 매트릭스
 */
export const moveUp = ({ matrix }: IProps) => {
  const newMatrix = new Array(4).fill(0).map(() => new Array(4).fill(0))
  for (let y = 0; y < 4; y += 1) {
    let idx = 0
    let newIdx = 0
    let prevNum = -1
    while (idx < 4) {
      if (matrix[idx][y] !== 0) {
        if (prevNum === -1) {
          prevNum = matrix[idx][y]
        } else if (matrix[idx][y] === prevNum) {
          newMatrix[newIdx][y] = prevNum * 2
          prevNum = -1
          newIdx += 1
        } else {
          newMatrix[newIdx][y] = prevNum
          prevNum = matrix[idx][y]
          newIdx += 1
        }
      }
      idx += 1
    }
    if (prevNum !== -1) {
      newMatrix[newIdx][y] = prevNum
    }
  }
  return newMatrix
}
