import { useMemo } from 'react'
import styles from './backgroundBoard.module.scss'

const INIT_ARRAY = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

const BackgroundBoard = () => {
  const board = useMemo(() => {
    return INIT_ARRAY.map((_, idx) => {
      const key = `background-cell-${idx}`
      return <div key={key} className={styles.cell} />
    })
  }, [])

  return <div className={styles.board}>{board}</div>
}

export default BackgroundBoard
