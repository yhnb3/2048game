import { useMemo } from 'react'
import styles from './board.module.scss'

interface IProps {
  matrix: number[][]
}

const Board = ({ matrix }: IProps) => {
  const board = useMemo(
    () =>
      matrix.map((row, rowIdx) =>
        row.map((cell, colIdx) => {
          const key = `${rowIdx} ${colIdx}`
          return (
            <div className={styles.cell} key={key}>
              {cell}
            </div>
          )
        })
      ),
    [matrix]
  )

  return <section className={styles.boardSection}>{board}</section>
}

export default Board
