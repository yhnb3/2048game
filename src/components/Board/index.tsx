import { useMemo } from 'react'
import cx from 'classnames'

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
          return cell !== 0 ? (
            <div className={cx(styles.cell, styles.colored)} key={key}>
              {cell}
            </div>
          ) : (
            <div className={styles.cell} />
          )
        })
      ),
    [matrix]
  )
  return <section className={styles.boardSection}>{board}</section>
}

export default Board
