import { addNewCell } from './addNewCell'
import { checkGameOver } from './checkGameOver'
import { newMoveLeft } from './newMoveLeft'
import { moveRight } from './moveRight'
import { newMoveDown } from './newMoveDown'
import { newMoveUp } from './newMoveUp'
import { newMoveRight } from './newMoveRight'

describe('2048에 필요한 함수들 테스트', () => {
  describe('위, 아래, 왼쪽, 오른쪽으로 누적하는 함수', () => {
    it('아래로 누적하는 함수 ex1', () => {
      const matrix = [
        [
          { prev: 0, current: 2, move: 0, isNew: false, direction: 'X' },
          { prev: 0, current: 0, move: 0, isNew: false, direction: 'X' },
          { prev: 0, current: 0, move: 0, isNew: false, direction: 'X' },
          { prev: 0, current: 4, move: 0, isNew: false, direction: 'X' },
        ],
        [
          { prev: 0, current: 0, move: 0, isNew: false, direction: 'X' },
          { prev: 0, current: 0, move: 0, isNew: false, direction: 'X' },
          { prev: 0, current: 0, move: 0, isNew: false, direction: 'X' },
          { prev: 0, current: 0, move: 0, isNew: false, direction: 'X' },
        ],
        [
          { prev: 0, current: 2, move: 0, isNew: false, direction: 'X' },
          { prev: 0, current: 2, move: 0, isNew: false, direction: 'X' },
          { prev: 0, current: 0, move: 0, isNew: false, direction: 'X' },
          { prev: 0, current: 0, move: 0, isNew: false, direction: 'X' },
        ],
        [
          { prev: 0, current: 0, move: 0, isNew: false, direction: 'X' },
          { prev: 0, current: 2, move: 0, isNew: false, direction: 'X' },
          { prev: 0, current: 0, move: 0, isNew: false, direction: 'X' },
          { prev: 0, current: 0, move: 0, isNew: false, direction: 'X' },
        ],
      ]
      const { matrix: newMatrix, score } = newMoveDown({ matrix })
      expect(newMatrix).toEqual([
        [
          { prev: 2, current: 0, move: 3, isNew: false, direction: 'Y' },
          { prev: 0, current: 0, move: 0, isNew: false, direction: 'Y' },
          { prev: 0, current: 0, move: 0, isNew: false, direction: 'Y' },
          { prev: 4, current: 0, move: 3, isNew: false, direction: 'Y' },
        ],
        [
          { prev: 0, current: 0, move: 0, isNew: false, direction: 'Y' },
          { prev: 0, current: 0, move: 0, isNew: false, direction: 'Y' },
          { prev: 0, current: 0, move: 0, isNew: false, direction: 'Y' },
          { prev: 0, current: 0, move: 0, isNew: false, direction: 'Y' },
        ],
        [
          { prev: 2, current: 0, move: 1, isNew: false, direction: 'Y' },
          { prev: 2, current: 0, move: 1, isNew: false, direction: 'Y' },
          { prev: 0, current: 0, move: 0, isNew: false, direction: 'Y' },
          { prev: 0, current: 0, move: 0, isNew: false, direction: 'Y' },
        ],
        [
          { prev: 0, current: 4, move: 0, isNew: true, direction: 'Y' },
          { prev: 2, current: 4, move: 0, isNew: true, direction: 'Y' },
          { prev: 0, current: 0, move: 0, isNew: false, direction: 'Y' },
          { prev: 0, current: 4, move: 0, isNew: false, direction: 'Y' },
        ],
      ])
      expect(score).toEqual(8)
    })
    it('위로 누적하는 함수 ex1', () => {
      const matrix = [
        [
          { prev: 0, current: 2, move: 0, isNew: false, direction: 'X' },
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
          { prev: 0, current: 2, move: 0, isNew: false, direction: 'X' },
          { prev: 0, current: 2, move: 0, isNew: false, direction: 'X' },
          { prev: 0, current: 0, move: 0, isNew: false, direction: 'X' },
          { prev: 0, current: 0, move: 0, isNew: false, direction: 'X' },
        ],
        [
          { prev: 0, current: 0, move: 0, isNew: false, direction: 'X' },
          { prev: 0, current: 2, move: 0, isNew: false, direction: 'X' },
          { prev: 0, current: 0, move: 0, isNew: false, direction: 'X' },
          { prev: 0, current: 0, move: 0, isNew: false, direction: 'X' },
        ],
      ]
      const { matrix: newMatrix, score } = newMoveUp({ matrix })
      expect(newMatrix).toEqual([
        [
          { prev: 2, current: 4, move: 0, isNew: true, direction: 'Y' },
          { prev: 0, current: 4, move: 0, isNew: true, direction: 'Y' },
          { prev: 0, current: 0, move: 0, isNew: false, direction: 'Y' },
          { prev: 0, current: 0, move: 0, isNew: false, direction: 'Y' },
        ],
        [
          { prev: 0, current: 0, move: 0, isNew: false, direction: 'Y' },
          { prev: 0, current: 0, move: 0, isNew: false, direction: 'Y' },
          { prev: 0, current: 0, move: 0, isNew: false, direction: 'Y' },
          { prev: 0, current: 0, move: 0, isNew: false, direction: 'Y' },
        ],
        [
          { prev: 2, current: 0, move: -2, isNew: false, direction: 'Y' },
          { prev: 2, current: 0, move: -2, isNew: false, direction: 'Y' },
          { prev: 0, current: 0, move: 0, isNew: false, direction: 'Y' },
          { prev: 0, current: 0, move: 0, isNew: false, direction: 'Y' },
        ],
        [
          { prev: 0, current: 0, move: 0, isNew: false, direction: 'Y' },
          { prev: 2, current: 0, move: -3, isNew: false, direction: 'Y' },
          { prev: 0, current: 0, move: 0, isNew: false, direction: 'Y' },
          { prev: 0, current: 0, move: 0, isNew: false, direction: 'Y' },
        ],
      ])
      expect(score).toEqual(8)
    })
    it('왼쪽으로 누적하는 함수 ex1', () => {
      const matrix = [
        [
          { prev: 0, current: 2, move: 0, isNew: false, direction: 'X' },
          { prev: 0, current: 2, move: 0, isNew: false, direction: 'X' },
          { prev: 0, current: 0, move: 0, isNew: false, direction: 'X' },
          { prev: 0, current: 0, move: 0, isNew: false, direction: 'X' },
        ],
        [
          { prev: 0, current: 2, move: 0, isNew: false, direction: 'X' },
          { prev: 0, current: 0, move: 0, isNew: false, direction: 'X' },
          { prev: 0, current: 0, move: 0, isNew: false, direction: 'X' },
          { prev: 0, current: 2, move: 0, isNew: false, direction: 'X' },
        ],
        [
          { prev: 0, current: 2, move: 0, isNew: false, direction: 'X' },
          { prev: 0, current: 2, move: 0, isNew: false, direction: 'X' },
          { prev: 0, current: 0, move: 0, isNew: false, direction: 'X' },
          { prev: 0, current: 0, move: 0, isNew: false, direction: 'X' },
        ],
        [
          { prev: 0, current: 0, move: 0, isNew: false, direction: 'X' },
          { prev: 0, current: 4, move: 0, isNew: false, direction: 'X' },
          { prev: 0, current: 0, move: 0, isNew: false, direction: 'X' },
          { prev: 0, current: 0, move: 0, isNew: false, direction: 'X' },
        ],
      ]
      const { matrix: newMatrix, score } = newMoveLeft({ matrix })
      expect(newMatrix).toEqual([
        [
          { prev: 2, current: 4, move: 0, isNew: true, direction: 'X' },
          { prev: 2, current: 0, move: -1, isNew: false, direction: 'X' },
          { prev: 0, current: 0, move: 0, isNew: false, direction: 'X' },
          { prev: 0, current: 0, move: 0, isNew: false, direction: 'X' },
        ],
        [
          { prev: 2, current: 4, move: 0, isNew: true, direction: 'X' },
          { prev: 0, current: 0, move: 0, isNew: false, direction: 'X' },
          { prev: 0, current: 0, move: 0, isNew: false, direction: 'X' },
          { prev: 2, current: 0, move: -3, isNew: false, direction: 'X' },
        ],
        [
          { prev: 2, current: 4, move: 0, isNew: true, direction: 'X' },
          { prev: 2, current: 0, move: -1, isNew: false, direction: 'X' },
          { prev: 0, current: 0, move: 0, isNew: false, direction: 'X' },
          { prev: 0, current: 0, move: 0, isNew: false, direction: 'X' },
        ],
        [
          { prev: 0, current: 4, move: 0, isNew: false, direction: 'X' },
          { prev: 4, current: 0, move: -1, isNew: false, direction: 'X' },
          { prev: 0, current: 0, move: 0, isNew: false, direction: 'X' },
          { prev: 0, current: 0, move: 0, isNew: false, direction: 'X' },
        ],
      ])
      expect(score).toEqual(12)
    })
    it('오른쪽으로 누적하는 함수 ex1', () => {
      const matrix = [
        [
          { prev: 0, current: 2, move: 0, isNew: false, direction: 'X' },
          { prev: 0, current: 2, move: 0, isNew: false, direction: 'X' },
          { prev: 0, current: 0, move: 0, isNew: false, direction: 'X' },
          { prev: 0, current: 0, move: 0, isNew: false, direction: 'X' },
        ],
        [
          { prev: 0, current: 2, move: 0, isNew: false, direction: 'X' },
          { prev: 0, current: 0, move: 0, isNew: false, direction: 'X' },
          { prev: 0, current: 0, move: 0, isNew: false, direction: 'X' },
          { prev: 0, current: 2, move: 0, isNew: false, direction: 'X' },
        ],
        [
          { prev: 0, current: 2, move: 0, isNew: false, direction: 'X' },
          { prev: 0, current: 2, move: 0, isNew: false, direction: 'X' },
          { prev: 0, current: 0, move: 0, isNew: false, direction: 'X' },
          { prev: 0, current: 0, move: 0, isNew: false, direction: 'X' },
        ],
        [
          { prev: 0, current: 0, move: 0, isNew: false, direction: 'X' },
          { prev: 0, current: 4, move: 0, isNew: false, direction: 'X' },
          { prev: 0, current: 0, move: 0, isNew: false, direction: 'X' },
          { prev: 0, current: 0, move: 0, isNew: false, direction: 'X' },
        ],
      ]
      const { matrix: newMatrix, score } = newMoveRight({ matrix })
      expect(newMatrix).toEqual([
        [
          { prev: 2, current: 0, move: 3, isNew: false, direction: 'X' },
          { prev: 2, current: 0, move: 2, isNew: false, direction: 'X' },
          { prev: 0, current: 0, move: 0, isNew: false, direction: 'X' },
          { prev: 0, current: 4, move: 0, isNew: true, direction: 'X' },
        ],
        [
          { prev: 2, current: 0, move: 3, isNew: false, direction: 'X' },
          { prev: 0, current: 0, move: 0, isNew: false, direction: 'X' },
          { prev: 0, current: 0, move: 0, isNew: false, direction: 'X' },
          { prev: 2, current: 4, move: 0, isNew: true, direction: 'X' },
        ],
        [
          { prev: 2, current: 0, move: 3, isNew: false, direction: 'X' },
          { prev: 2, current: 0, move: 2, isNew: false, direction: 'X' },
          { prev: 0, current: 0, move: 0, isNew: false, direction: 'X' },
          { prev: 0, current: 4, move: 0, isNew: true, direction: 'X' },
        ],
        [
          { prev: 0, current: 0, move: 0, isNew: false, direction: 'X' },
          { prev: 4, current: 0, move: 2, isNew: false, direction: 'X' },
          { prev: 0, current: 0, move: 0, isNew: false, direction: 'X' },
          { prev: 0, current: 4, move: 0, isNew: false, direction: 'X' },
        ],
      ])
      expect(score).toEqual(12)
    })
  })
  it('새로운 수 추가하는 함수', () => {
    const matrix = [
      [
        { prev: 0, current: 2, move: 0, isNew: false, direction: 'X' },
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
        { prev: 0, current: 2, move: 0, isNew: false, direction: 'X' },
        { prev: 0, current: 2, move: 0, isNew: false, direction: 'X' },
        { prev: 0, current: 0, move: 0, isNew: false, direction: 'X' },
        { prev: 0, current: 0, move: 0, isNew: false, direction: 'X' },
      ],
      [
        { prev: 0, current: 0, move: 0, isNew: false, direction: 'X' },
        { prev: 0, current: 2, move: 0, isNew: false, direction: 'X' },
        { prev: 0, current: 0, move: 0, isNew: false, direction: 'X' },
        { prev: 0, current: 0, move: 0, isNew: false, direction: 'X' },
      ],
    ]
    // 난수를 이용하였기 때문에 10번의 시행
    for (let i = 0; i < 10; i += 1) {
      const newMatrix = addNewCell({ matrix })
      const nonEmptyCell = newMatrix.reduce((acc, cur) => acc + cur.filter((cell) => cell.current !== 0).length, 0)
      expect(nonEmptyCell).toEqual(5)
    }
  })
  it('Game over 체크하는 함수', () => {
    const matrix = [
      [
        { prev: 0, current: 4, move: 0, isNew: false, direction: 'X' },
        { prev: 0, current: 2, move: 0, isNew: false, direction: 'X' },
        { prev: 0, current: 4, move: 0, isNew: false, direction: 'X' },
        { prev: 0, current: 2, move: 0, isNew: false, direction: 'X' },
      ],
      [
        { prev: 0, current: 2, move: 0, isNew: false, direction: 'X' },
        { prev: 0, current: 4, move: 0, isNew: false, direction: 'X' },
        { prev: 0, current: 2, move: 0, isNew: false, direction: 'X' },
        { prev: 0, current: 4, move: 0, isNew: false, direction: 'X' },
      ],
      [
        { prev: 0, current: 4, move: 0, isNew: false, direction: 'X' },
        { prev: 0, current: 2, move: 0, isNew: false, direction: 'X' },
        { prev: 0, current: 4, move: 0, isNew: false, direction: 'X' },
        { prev: 0, current: 2, move: 0, isNew: false, direction: 'X' },
      ],
      [
        { prev: 0, current: 2, move: 0, isNew: false, direction: 'X' },
        { prev: 0, current: 4, move: 0, isNew: false, direction: 'X' },
        { prev: 0, current: 2, move: 0, isNew: false, direction: 'X' },
        { prev: 0, current: 4, move: 0, isNew: false, direction: 'X' },
      ],
    ]
    expect(
      checkGameOver({
        movedLeftMatrix: matrix,
        movedRightMatrix: matrix,
        movedUpMatrix: matrix,
        movedDownMatrix: matrix,
      })
    ).toEqual(true)
  })
})
