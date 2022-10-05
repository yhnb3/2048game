import { useState } from 'react'
import { useMount, useUnmount } from 'react-use'

import { BackgroundBoard, Board } from 'components'
import { addNewCell, selectMoveFunc } from 'libs'
import { useCheckGameOver } from 'hooks'
import styles from './home.module.scss'
import { newMoveDown } from 'libs/newMoveDown'
import { ICell } from 'types'

const INIT_MATRIX = [
  [
    { prev: 0, current: 2, move: 0, isNew: false },
    { prev: 0, current: 0, move: 0, isNew: false },
    { prev: 0, current: 0, move: 0, isNew: false },
    { prev: 0, current: 0, move: 0, isNew: false },
  ],
  [
    { prev: 0, current: 0, move: 0, isNew: false },
    { prev: 0, current: 0, move: 0, isNew: false },
    { prev: 0, current: 0, move: 0, isNew: false },
    { prev: 0, current: 0, move: 0, isNew: false },
  ],
  [
    { prev: 0, current: 2, move: 0, isNew: false },
    { prev: 0, current: 2, move: 0, isNew: false },
    { prev: 0, current: 0, move: 0, isNew: false },
    { prev: 0, current: 0, move: 0, isNew: false },
  ],
  [
    { prev: 0, current: 0, move: 0, isNew: false },
    { prev: 0, current: 2, move: 0, isNew: false },
    { prev: 0, current: 0, move: 0, isNew: false },
    { prev: 0, current: 0, move: 0, isNew: false },
  ],
]
const Home = () => {
  const [matrix, setMatrix] = useState<ICell[][]>(INIT_MATRIX)
  const [score, setScore] = useState(0)

  // const { isGameOver } = useCheckGameOver({ matrix })
  const conditinalMoveFnc = (e: KeyboardEvent) => {
    // if (isGameOver) return
    const { key } = e
    if (key === 'ArrowDown') {
      // if (key === 'ArrowUp' || key === 'ArrowDown' || key === 'ArrowLeft' || key === 'ArrowRight') {
      setMatrix((prevMatrix) => {
        const { matrix: newMatrix } = newMoveDown({ matrix: prevMatrix })
        return newMatrix
      })
    }
  }

  useMount(() => {
    window.addEventListener('keydown', conditinalMoveFnc)
  })

  useUnmount(() => {
    window.removeEventListener('keydown', conditinalMoveFnc)
  })

  return (
    <main>
      <div className={styles.title}>
        <div>2048</div>
        <div className={styles.score}>
          <div>Score : {score}</div>
          <div>Highest Score : {score}</div>
        </div>
      </div>
      <section className={styles.boardSection}>
        <BackgroundBoard />
        <Board matrix={matrix} />
      </section>
    </main>
  )
}

export default Home
