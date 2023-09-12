// Author: Igor Dimitrijević (@igorskyflyer)

import { assert, describe, test } from 'vitest'
import { FilePath, assertMyFilePath, isMyFilePath } from '../src/index.mjs'

type JsonFile = FilePath<'json'>

describe('🧪 my-file-path tests 🧪', () => {
  describe('assertMyFilePath()', () => {
    test('#1 should return the filepath', () => {
      const file: JsonFile = 'D:\\a.json'
      assert.equal(assertMyFilePath(file, 'json'), 'D:\\a.json')
    }) // #1

    test('#2 should an empty path', () => {
      const file: null = null
      // @ts-expect-error
      assert.equal(assertMyFilePath(file, 'png'), '')
    }) // #2

    test('#3 should an empty path', () => {
      const file: JsonFile = 'D:\\test.json'
      // @ts-expect-error
      assert.equal(assertMyFilePath(file), '')
    }) // #3

    test('#4 should throw', () => {
      const file: JsonFile = 'D:\\test.json'
      assert.throws(() => {
        assertMyFilePath(file, 'txt')
      })
    }) // #4
  })

  describe('isMyFilePath()', () => {
    test('#5 should return false', () => {
      const file: JsonFile = 'D:\\a.json'
      // @ts-expect-error
      assert.isFalse(isMyFilePath(file))
    }) // #5

    test('#6 should return true', () => {
      const file: JsonFile = 'D:\\a.json'
      assert.isTrue(isMyFilePath(file, 'json'))
    }) // #6

    test('#7 should return false', () => {
      const file: JsonFile = 'D:\\a.json'
      assert.isFalse(isMyFilePath(file, 'txt'))
    }) // #7
  })
})
