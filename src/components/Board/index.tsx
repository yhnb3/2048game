import { useMemo } from 'react'

import styles from './board.module.scss'
import { ICell } from 'types'
import Cell from './Cell'

interface IProps {
  matrix: ICell[][]
  isAdd: boolean
}

const Board = ({ matrix, isAdd }: IProps) => {
  const board = useMemo(
    () =>
      matrix.map((row, rowIdx) =>
        row.map((cell, colIdx) => {
          const key = `${rowIdx} ${colIdx}`
          return <Cell key={key} cell={cell} isAdd={isAdd} />
        })
      ),
    [matrix, isAdd]
  )
  return <section className={styles.boardSection}>{board}</section>
}

export default Board
