import { Board } from 'components'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Board />} />
    </Routes>
  )
}

export default App
