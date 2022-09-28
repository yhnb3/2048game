import { Board } from 'components'
import { useState } from 'react'

const INIT_MATRIX = [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
]
const Home = () => {
  const [matrix, setMatrix] = useState(INIT_MATRIX)
  return (
    <main>
      <Board matrix={matrix} />
    </main>
  )
}

export default Home
