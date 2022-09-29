import { moveDown } from './moveDown'
import { moveLeft } from './moveLeft'
import { moveRight } from './moveRight'
import { moveUp } from './moveUp'

interface IProps {
  key: string
  matrix: number[][]
}

export const selectMoveFunc = ({ key, matrix }: IProps) => {
  if (key === 'ArrowUp') return moveUp({ matrix })
  if (key === 'ArrowDown') return moveDown({ matrix })
  if (key === 'ArrowLeft') return moveLeft({ matrix })
  return moveRight({ matrix })
}
