// Author: Igor Dimitrijević (@igorskyflyer)

import { assert, describe, test } from 'vitest'
import {
  FilePath,
  assertMyFilePath,
  createMyFilePath,
  isMyFilePath,
} from '../src/index.mjs'

type JsonFile = FilePath<'json'>

describe('🧪 my-file-path tests 🧪', () => {
  describe('isMyFilePath()', () => {
    test('#1 should return false', () => {
      const file: JsonFile = 'D:\\a.json'
      // @ts-expect-error
      assert.isFalse(isMyFilePath(file))
    }) // #1

    test('#2 should return true', () => {
      const file: JsonFile = 'D:\\a.json'
      assert.isTrue(isMyFilePath(file, 'json'))
    }) // #2

    test('#3 should return false', () => {
      const file: JsonFile = 'D:\\a.json'
      assert.isFalse(isMyFilePath(file, 'txt'))
    }) // #3
  })

  describe('createMyFilePath()', () => {
    test('#4 should return an empty string', () => {
      const file: JsonFile = 'D:\\a.json'
      // @ts-expect-error
      assert.isEmpty(createMyFilePath(file))
    }) // #4

    test('#5 should return the filepath', () => {
      const file: JsonFile = 'D:\\a.json'
      assert.equal(createMyFilePath(file, 'json'), 'D:\\a.json')
    }) // #5

    test('#6 should return an empty string', () => {
      const file: JsonFile = 'D:\\a.json'
      assert.isEmpty(createMyFilePath(file, 'txt'))
    }) // #6
  })

  describe('assertMyFilePath()', () => {
    test('#7 should not throw', () => {
      const file: JsonFile = 'D:\\a.json'
      assert.doesNotThrow(() => {
        assertMyFilePath(file, 'json')
      })
    }) // #7

    test('#8 should throw', () => {
      const file: JsonFile = 'D:\\a.json'
      assert.throws(() => {
        assertMyFilePath(file, 'txt')
      })
    }) // #8
  })
})
