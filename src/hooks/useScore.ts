import { useState } from 'react'
import store from 'store'

export const useScore = () => {
  const [score, setScore] = useState(store.get('score') || 0)
  const [maxScore, setMaxScore] = useState(store.get('maxScore') || 0)

  const initScore = () => {
    setScore(0)
    setMaxScore(store.get('maxScore') || 0)
  }

  return { score, setScore, maxScore, initScore }
}
