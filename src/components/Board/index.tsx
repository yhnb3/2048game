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
          if (cell.current !== 0) {
            if (cell.isNew) {
              return (
                <div className={cx(styles.cell, styles.colored, styles.new, styles[`color${cell.current}`])} key={key}>
                  {cell.current}
                </div>
              )
            }
            return (
              <div className={cx(styles.cell, styles.colored, styles[`color${cell.current}`])} key={key}>
                {cell.current}
              </div>
            )
          }
          return cell.prev !== 0 ? (
            <div
              className={cx(styles.cell, styles.colored, styles.move, styles[`color${cell.prev}`])}
              key={key}
              style={{ transform: `translateY(${cell.move * 110}px)` }}
            >
              {cell.prev}
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
