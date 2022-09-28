interface IProps {
  matrix: number[][]
}

/**
 * 매트릭스를 아래 방향으로 누적하게 하는 함수
 * @param { number[][] } matrix 기존 2048 매트릭스
 * @returns { matrix: number[][], score: number } 누적된 매트릭스와 점수
 */
export const moveDown = ({ matrix }: IProps) => {
  const newMatrix = new Array(4).fill(0).map(() => new Array(4).fill(0))
  let score = 0
  for (let y = 0; y < 4; y += 1) {
    let idx = 3
    let newIdx = 3
    let prevNum = -1
    while (idx >= 0) {
      if (matrix[idx][y] !== 0) {
        if (prevNum === -1) {
          prevNum = matrix[idx][y]
        } else if (matrix[idx][y] === prevNum) {
          newMatrix[newIdx][y] = prevNum * 2
          score += prevNum * 2
          prevNum = -1
          newIdx -= 1
        } else {
          newMatrix[newIdx][y] = prevNum
          prevNum = matrix[idx][y]
          newIdx -= 1
        }
      }
      idx -= 1
    }
    if (prevNum !== -1) {
      newMatrix[newIdx][y] = prevNum
    }
  }

  return { matrix: newMatrix, score }
}
