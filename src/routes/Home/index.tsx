import { useState } from 'react'
import { useMount, useUnmount } from 'react-use'
import _ from 'lodash'

import { Board } from 'components'
import { addNewCell, selectMoveFunc } from 'libs'
import { useCheckGameOver } from 'hooks'

const INIT_MATRIX = [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [2, 0, 0, 0],
]
const Home = () => {
  const [matrix, setMatrix] = useState(addNewCell({ matrix: INIT_MATRIX }))
  const [score, setScore] = useState(0)
  const { isGameOver } = useCheckGameOver({ matrix })
  const conditinalMoveFnc = (e: KeyboardEvent) => {
    if (isGameOver) return
    const { key } = e
    if (key === 'ArrowUp' || key === 'ArrowDown' || key === 'ArrowLeft' || key === 'ArrowRight') {
      setMatrix((prevMatrix) => {
        const { score: newScore, matrix: nextMatrix } = selectMoveFunc({ key, matrix: prevMatrix })
        if (_.isEqual(prevMatrix, nextMatrix)) return prevMatrix
        setScore((prevScore) => prevScore + newScore)
        return addNewCell({ matrix: nextMatrix })
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
      <div>score: {score}</div>
      <Board matrix={matrix} />
    </main>
  )
}

export default Home
