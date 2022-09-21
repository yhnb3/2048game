import { moveDown } from './moveDown'
import { moveLeft } from './moveLeft'
import { moveRight } from './moveRight'
import { moveUp } from './moveUp'

describe('2048에 필요한 함수들 테스트', () => {
  describe('아래로 누적하는 함수', () => {
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
  })
  describe('위로 누적하는 함수', () => {
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
  })
  describe('왼쪽으로 누적하는 함수', () => {
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
  })
  describe('오른쪽으로 누적하는 함수', () => {
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
})
