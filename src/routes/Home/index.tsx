import store from 'store'
import { useEffect, useState } from 'react'

import { BackgroundBoard, Board, Gameover, Header, HowToPlay, StartBox } from 'components'
import { addNewCell, selectMoveFunc } from 'libs'
import { useGameControl, useMatrix, useScore, useTouchEvent } from 'hooks'

import styles from './home.module.scss'

const Home = () => {
  const [isAdd, setIsAdd] = useState(false)
  const { matrix, setMatrix, initMatrix } = useMatrix({ setIsAdd })
  const { score, maxScore, setScore, initScore } = useScore()
  const { isGameOver, isPossible } = useGameControl({ matrix })

  const startNewGame = () => {
    initMatrix()
    initScore()
  }

  const checkPossible = (key: string) => {
    const { left, right, up, down } = isPossible
    if (key === 'ArrowUp' && up) return true
    if (key === 'ArrowLeft' && left) return true
    if (key === 'ArrowRight' && right) return true
    if (key === 'ArrowDown' && down) return true
    return false
  }

  const conditionalMoveFnc = (key: string) => {
    if (isGameOver || !checkPossible(key)) return
    setIsAdd(false)
    setMatrix((prevMatrix) => {
      const { matrix: newMatrix, score: scoreToAdd } = selectMoveFunc({
        key,
        matrix: prevMatrix,
      })
      setScore((prevScore: number) => {
        const newScore = prevScore + scoreToAdd
        store.set('score', newScore)
        store.set('maxScore', Math.max(newScore, maxScore))
        return newScore
      })
      return newMatrix
    })

    setTimeout(() => {
      setIsAdd(true)
      setMatrix((prevMatrix) => {
        const newMatrix = addNewCell({ matrix: prevMatrix })
        store.set('matrix', newMatrix)
        return newMatrix
      })
    }, 100)
  }

  const { handleTouchStart, handleTouchEnd } = useTouchEvent({ conditionalMoveFnc })

  const handleKeydown = (e: KeyboardEvent) => {
    const { key } = e
    conditionalMoveFnc(key)
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeydown)
    window.addEventListener('touchstart', handleTouchStart)
    window.addEventListener('touchend', handleTouchEnd)
    return () => {
      window.removeEventListener('keydown', handleKeydown)
      window.removeEventListener('touchstart', handleTouchStart)
      window.removeEventListener('touchend', handleTouchEnd)
    }
  })

  return (
    <main>
      <Header score={score} maxScore={Math.max(score, maxScore)} />
      <StartBox startNewGame={startNewGame} />
      <section className={styles.boardSection}>
        {isGameOver ? <Gameover isGameOver={isGameOver} startNewGame={startNewGame} /> : null}
        <BackgroundBoard />
        <Board matrix={matrix} isAdd={isAdd} />
      </section>
      <HowToPlay />
    </main>
  )
}

export default Home
