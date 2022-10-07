import { useMemo } from 'react'

import styles from './board.module.scss'
import { ICell } from 'types'
import Cell from './Cell'

interface IProps {
  matrix: ICell[][]
}

const Board = ({ matrix }: IProps) => {
  const board = useMemo(
    () =>
      matrix.map((row, rowIdx) =>
        row.map((cell, colIdx) => {
          const key = `${rowIdx} ${colIdx}`
          return <Cell key={key} cell={cell} />
        })
      ),
    [matrix]
  )
  return <section className={styles.boardSection}>{board}</section>
}

export default Board
