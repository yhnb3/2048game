import { useMemo } from 'react'
import cx from 'classnames'

import styles from './board.module.scss'
import { ICell } from 'types'

interface IProps {
  matrix: ICell[][]
}

const Board = ({ matrix }: IProps) => {
  const board = useMemo(
    () =>
      matrix.map((row, rowIdx) =>
        row.map((cell, colIdx) => {
          const key = `${rowIdx} ${colIdx}`
          return cell.current !== 0 ? (
            <div className={cx(styles.cell, styles.colored, styles.move)} key={key}>
              {cell.current}
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
