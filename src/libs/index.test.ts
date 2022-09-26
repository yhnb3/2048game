import { addNewCell } from './addNewCell'
import { checkGameOver } from './checkGameOver'
import { moveDown } from './moveDown'
import { moveLeft } from './moveLeft'
import { moveRight } from './moveRight'
import { moveUp } from './moveUp'

describe('2048에 필요한 함수들 테스트', () => {
  describe('위, 아래, 왼쪽, 오른쪽으로 누적하는 함수', () => {
    it('아래로 누적하는 함수 ex1', () => {
      const matrix = [
        [2, 2, 0, 0],
        [2, 0, 0, 2],
        [2, 0, 0, 0],
        [2, 2, 0, 0],
      ]
      expect(moveDown({ matrix })).toEqual([
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [4, 0, 0, 0],
        [4, 4, 0, 2],
      ])
    })
    it('위로 누적하는 함수 ex1', () => {
      const matrix = [
        [2, 0, 0, 0],
        [2, 4, 0, 2],
        [2, 4, 0, 0],
        [2, 4, 2, 2],
      ]
      expect(moveUp({ matrix })).toEqual([
        [4, 8, 2, 4],
        [4, 4, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
      ])
    })
    it('왼쪽으로 누적하는 함수 ex1', () => {
      const matrix = [
        [2, 2, 2, 2],
        [0, 2, 2, 2],
        [0, 2, 0, 2],
        [0, 0, 0, 2],
      ]
      expect(moveLeft({ matrix })).toEqual([
        [4, 4, 0, 0],
        [4, 2, 0, 0],
        [4, 0, 0, 0],
        [2, 0, 0, 0],
      ])
    })
    it('오른쪽으로 누적하는 함수 ex1', () => {
      const matrix = [
        [2, 2, 2, 2],
        [0, 2, 2, 2],
        [2, 0, 2, 0],
        [2, 0, 0, 0],
      ]
      expect(moveRight({ matrix })).toEqual([
        [0, 0, 4, 4],
        [0, 0, 2, 4],
        [0, 0, 0, 4],
        [0, 0, 0, 2],
      ])
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
