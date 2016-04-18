import assert from 'assert'
import _ from 'lodash'
import { bs as binarySearch, ls as linearSearch } from './'

const arr = []
const max = 1000 * 1000
const searchKey = _.random(0, max)
let i = 0

while(i < max) {
  arr.push(i++)
}

describe('Тест алгоритмов поиска', () => {

  describe('#TEST binary search', () => {
    before(() => console.time(`binarySearch time ${searchKey}`))
    it('Нахождение 333 элемента (бинарный поиск)', () => {
      assert.equal(binarySearch(searchKey, arr), searchKey)
    })
    after(() => console.timeEnd(`binarySearch time ${searchKey}`))
  })

  describe('#TEST linear search', () => {
    before(() => console.time(`linearSearch time ${searchKey}`))
    it('Нахождение 333 элемента (линейный поиск)', () => {
      assert.equal(linearSearch(searchKey, arr), searchKey)
    })
    after(() => console.timeEnd(`linearSearch time ${searchKey}`))
  })

});
