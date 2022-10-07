import { ICell } from 'types'
import { newMoveDown } from './newMoveDown'
import { newMoveLeft } from './newMoveLeft'
import { newMoveRight } from './newMoveRight'
import { newMoveUp } from './newMoveUp'

interface IProps {
  key: string
  matrix: ICell[][]
}

export const selectMoveFunc = ({ key, matrix }: IProps) => {
  if (key === 'ArrowUp') return newMoveUp({ matrix })
  if (key === 'ArrowDown') return newMoveDown({ matrix })
  if (key === 'ArrowLeft') return newMoveLeft({ matrix })

  return newMoveRight({ matrix })
}
