import { SetStateAction, useState } from 'react'
import store from 'store'

import { addNewCell } from 'libs'
import { ICell } from 'types'

interface IProps {
  setIsAdd: (value: SetStateAction<boolean>) => void
}

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

export const useMatrix = ({ setIsAdd }: IProps) => {
  const [matrix, setMatrix] = useState<ICell[][]>(() => {
    setIsAdd(true)
    const newMatrix = addNewCell({ matrix: addNewCell({ matrix: INIT_MATRIX }) })
    if (store.get('gameover')) return newMatrix
    return store.get('matrix') || newMatrix
  })

  const initMatrix = () => {
    setMatrix(addNewCell({ matrix: addNewCell({ matrix: INIT_MATRIX }) }))
  }

  return { matrix, setMatrix, initMatrix }
}
