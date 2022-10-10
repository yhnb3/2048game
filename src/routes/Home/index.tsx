import { useEffect, useState } from 'react'

import { BackgroundBoard, Board, Header, StartBox } from 'components'
import { addNewCell, selectMoveFunc } from 'libs'
import { useGameControl } from 'hooks'
import { ICell } from 'types'

import styles from './home.module.scss'

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
  const [isAdd, setIsAdd] = useState(false)
  const [matrix, setMatrix] = useState<ICell[][]>(() => {
    setIsAdd(true)
    return addNewCell({ matrix: addNewCell({ matrix: INIT_MATRIX }) })
  })
  const [score, setScore] = useState(0)
  const { isGameOver, isPossible } = useGameControl({ matrix })

  const startNewGame = () => {
    setMatrix(addNewCell({ matrix: addNewCell({ matrix: INIT_MATRIX }) }))
    setScore(0)
  }

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
    setIsAdd(false)
    setMatrix((prevMatrix) => {
      const { matrix: newMatrix, score: scoreToAdd } = selectMoveFunc({
        key,
        matrix: prevMatrix,
      })
      setScore((prevScore) => prevScore + scoreToAdd)
      return newMatrix
    })

    setTimeout(() => {
      setIsAdd(true)
      setMatrix((prevMatrix) => addNewCell({ matrix: prevMatrix }))
    }, 100)
  }

  useEffect(() => {
    window.addEventListener('keydown', conditionalMoveFnc)
    return () => {
      window.removeEventListener('keydown', conditionalMoveFnc)
    }
  })
  return (
    <main>
      <Header score={score} maxScore={score} />
      <StartBox startNewGame={startNewGame} />
      <section className={styles.boardSection}>
        <BackgroundBoard />
        <Board matrix={matrix} isAdd={isAdd} />
      </section>
    </main>
  )
}

export default Home
