import { ICell } from 'types'

interface IProps {
  matrix1: ICell[][]
  matrix2: ICell[][]
}

export const isEqual = ({ matrix1, matrix2 }: IProps) => {
  for (let x = 0; x < 4; x += 1) {
    for (let y = 0; y < 4; y += 1) {
      if (matrix1[x][y].current !== matrix2[x][y].current) return false
    }
  }
  return true
}
