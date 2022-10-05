import { addNewCell } from './addNewCell'
import { checkGameOver } from './checkGameOver'
import { moveDown } from './moveDown'
import { moveLeft } from './moveLeft'
import { moveRight } from './moveRight'
import { moveUp } from './moveUp'
import { newMoveDown } from './newMoveDown'

describe('2048에 필요한 함수들 테스트', () => {
  describe('위, 아래, 왼쪽, 오른쪽으로 누적하는 함수', () => {
    it('아래로 누적하는 함수 ex1', () => {
      const matrix = [
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
      const { matrix: newMatrix, score } = newMoveDown({ matrix })
      expect(newMatrix).toEqual([
        [
          { prev: 2, current: 0, move: 3, isNew: false },
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
          { prev: 2, current: 0, move: 1, isNew: false },
          { prev: 2, current: 0, move: 1, isNew: false },
          { prev: 0, current: 0, move: 0, isNew: false },
          { prev: 0, current: 0, move: 0, isNew: false },
        ],
        [
          { prev: 0, current: 4, move: 0, isNew: false },
          { prev: 2, current: 4, move: 0, isNew: false },
          { prev: 0, current: 0, move: 0, isNew: false },
          { prev: 0, current: 0, move: 0, isNew: false },
        ],
      ])
      expect(score).toEqual(8)
    })
    it('위로 누적하는 함수 ex1', () => {
      const matrix = [
        [2, 0, 0, 0],
        [2, 4, 0, 2],
        [2, 4, 0, 0],
        [2, 4, 2, 2],
      ]
      const { matrix: newMatrix, score } = moveUp({ matrix })
      expect(newMatrix).toEqual([
        [4, 8, 2, 4],
        [4, 4, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
      ])
      expect(score).toEqual(20)
    })
    it('왼쪽으로 누적하는 함수 ex1', () => {
      const matrix = [
        [2, 2, 2, 2],
        [0, 2, 2, 2],
        [0, 2, 0, 2],
        [0, 0, 0, 2],
      ]
      const { matrix: newMatrix, score } = moveLeft({ matrix })
      expect(newMatrix).toEqual([
        [4, 4, 0, 0],
        [4, 2, 0, 0],
        [4, 0, 0, 0],
        [2, 0, 0, 0],
      ])
      expect(score).toEqual(16)
    })
    it('오른쪽으로 누적하는 함수 ex1', () => {
      const matrix = [
        [2, 2, 2, 2],
        [0, 2, 2, 2],
        [0, 0, 2, 4],
        [2, 0, 0, 0],
      ]
      const { matrix: newMatrix, score } = moveRight({ matrix })
      expect(newMatrix).toEqual([
        [0, 0, 4, 4],
        [0, 0, 2, 4],
        [0, 0, 2, 4],
        [0, 0, 0, 2],
      ])
      expect(score).toEqual(12)
    })
  })
  it('새로운 수 추가하는 함수', () => {
    const matrix = [
      [2, 2, 2, 2],
      [0, 2, 2, 2],
      [2, 0, 2, 0],
      [2, 0, 0, 0],
    ]
    // 난수를 이용하였기 때문에 10번의 시행
    for (let i = 0; i < 10; i += 1) {
      const newMatrix = addNewCell({ matrix })
      const nonEmptyCell = newMatrix.reduce((acc, cur) => acc + cur.filter((cell) => cell !== 0).length, 0)
      expect(nonEmptyCell).toEqual(11)
    }
  })
  it('Game over 체크하는 함수', () => {
    const movedLeftMatrix = [
      [4, 2, 4, 2],
      [2, 4, 2, 4],
      [4, 2, 4, 2],
      [2, 4, 2, 4],
    ]
    const movedRightMatrix = [
      [4, 2, 4, 2],
      [2, 4, 2, 4],
      [4, 2, 4, 2],
      [2, 4, 2, 4],
    ]
    const movedUpMatrix = [
      [4, 2, 4, 2],
      [2, 4, 2, 4],
      [4, 2, 4, 2],
      [2, 4, 2, 4],
    ]
    const movedDownMatrix = [
      [4, 2, 4, 2],
      [2, 4, 2, 4],
      [4, 2, 4, 2],
      [2, 4, 2, 4],
    ]
    expect(checkGameOver({ movedLeftMatrix, movedRightMatrix, movedUpMatrix, movedDownMatrix })).toEqual(true)
  })
})
