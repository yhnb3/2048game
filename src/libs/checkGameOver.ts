interface IProps {
  movedLeftMatrix: number[][]
  movedRightMatrix: number[][]
  movedUpMatrix: number[][]
  movedDownMatrix: number[][]
}

/**
 * 게임오버 인지 체크하는 함수
 * @param { number[][] } movedLeftMatrix 왼쪽으로 누적된 매트릭스
 * @param { number[][] } movedRightMatrix 오른쪽으로 누적된 매트릭스
 * @param { number[][] } movedUpMatrix 위으로 누적된 매트릭스
 * @param { number[][] } movedDownMatrix 아랫으로 누적된 매트릭스
 * @returns 게임 오버 유무
 */

export const checkGameOver = ({ movedLeftMatrix, movedRightMatrix, movedUpMatrix, movedDownMatrix }: IProps) => {
  let empty = movedLeftMatrix.reduce((acc, cur) => acc + cur.filter((cell) => cell === 0).length, 0)
  if (empty !== 0) return false
  empty = movedRightMatrix.reduce((acc, cur) => acc + cur.filter((cell) => cell === 0).length, 0)
  if (empty !== 0) return false
  empty = movedUpMatrix.reduce((acc, cur) => acc + cur.filter((cell) => cell === 0).length, 0)
  if (empty !== 0) return false
  empty = movedDownMatrix.reduce((acc, cur) => acc + cur.filter((cell) => cell === 0).length, 0)
  if (empty !== 0) return false
  return true
}
