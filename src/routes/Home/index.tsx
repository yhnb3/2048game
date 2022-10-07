import { useCallback, useEffect, useState } from 'react'
import { useMount, useUnmount } from 'react-use'

import { BackgroundBoard, Board } from 'components'
import { addNewCell, selectMoveFunc } from 'libs'
import { useGameControl } from 'hooks'
import { ICell } from 'types'

import styles from './home.module.scss'
import { isIP } from 'net'

const INIT_MATRIX = [
  [
    { prev: 0, current: 0, move: 0, isNew: false, direction: 'X' },
    { prev: 0, current: 0, move: 0, isNew: false, direction: 'X' },
    { prev: 0, current: 0, move: 0, isNew: false, direction: 'X' },
    { prev: 0, current: 0, move: 0, isNew: false, direction: 'X' },
  ],
  [
    { prev: 0, current: 0, move: 0, isNew: false, direction: 'X' },
    { prev: 0, current: 0, move: 0, isNew: false, direction: 'X' },
    { prev: 0, current: 0, move: 0, isNew: false, direction: 'X' },
    { prev: 0, current: 0, move: 0, isNew: false, direction: 'X' },
  ],
  [
    { prev: 0, current: 0, move: 0, isNew: false, direction: 'X' },
    { prev: 0, current: 0, move: 0, isNew: false, direction: 'X' },
    { prev: 0, current: 0, move: 0, isNew: false, direction: 'X' },
    { prev: 0, current: 0, move: 0, isNew: false, direction: 'X' },
  ],
  [
    { prev: 0, current: 0, move: 0, isNew: false, direction: 'X' },
    { prev: 0, current: 0, move: 0, isNew: false, direction: 'X' },
    { prev: 0, current: 0, move: 0, isNew: false, direction: 'X' },
    { prev: 0, current: 0, move: 0, isNew: false, direction: 'X' },
  ],
]
const Home = () => {
  const [matrix, setMatrix] = useState<ICell[][]>(() => {
    return addNewCell({ matrix: addNewCell({ matrix: INIT_MATRIX }) })
  })
  const [score, setScore] = useState(0)
  const { isGameOver, isPossible } = useGameControl({ matrix })
  const checkPossible = (key: string) => {
    const { left, right, up, down } = isPossible
    if (key === 'ArrowUp' && up) return true
    if (key === 'ArrowLeft' && left) return true
    if (key === 'ArrowRight' && right) return true
    if (key === 'ArrowDown' && down) return true
    return false
  }
  const conditionalMoveFnc = (e: KeyboardEvent) => {
    const { key } = e
    if (isGameOver || !checkPossible(key)) return
    setMatrix((prevMatrix) => {
      const { matrix: newMatrix, score: scoreToAdd } = selectMoveFunc({
        key,
        matrix: prevMatrix,
      })
      setScore((prevScore) => prevScore + scoreToAdd)
      return newMatrix
    })

    setTimeout(() => {
      setMatrix((prevMatrix) => addNewCell({ matrix: prevMatrix }))
    }, 200)
  }

  useEffect(() => {
    window.addEventListener('keydown', conditionalMoveFnc)
    return () => {
      window.removeEventListener('keydown', conditionalMoveFnc)
    }
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
