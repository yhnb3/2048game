import cx from 'classnames'
import { useWindowWidth } from 'hooks'

import { ICell } from 'types'

import styles from './board.module.scss'

interface IProps {
  cell: ICell
  isAdd: boolean
}

const Cell = ({ cell, isAdd }: IProps) => {
  const { prev, current, direction, move, isNew } = cell
  const { innerWidth: width } = useWindowWidth()
  const cellSize = width > 680 ? 110 : 66

  if (isNew && isAdd) {
    const newStyle = current === 2 ? styles.new : styles.add
    return <div className={cx(styles.cell, styles.colored, newStyle, styles[`color${current}`])}>{current}</div>
  }
  if (prev !== 0) {
    if (move !== 0) {
      return (
        <div
          className={cx(styles.cell, styles.colored, styles.move, styles[`color${prev}`])}
          style={{ transform: `translate${direction}(${move * cellSize}px)` }}
        >
          {prev}
        </div>
      )
    }
    return <div className={cx(styles.cell, styles.colored, styles[`color${prev}`])}>{prev}</div>
  }
  return <div className={styles.cell} />
}

export default Cell
