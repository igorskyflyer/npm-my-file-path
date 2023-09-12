// Author: Igor Dimitrijević (@igorskyflyer)

import { zing } from '@igor.dvlpr/zing'

export type FilePath<ext extends string> = `${string}.${ext}`

/**
 * Checks whether the provided filepath conforms with the provided file extension.
 * @param filePath The filepath to check.
 * @param extension The file extension to perform the check with.
 * @returns {boolean}
 */
export function isMyFilePath<Ext extends string>(
  filePath: string,
  extension: Ext
): boolean {
  if (typeof filePath !== 'string' || typeof extension !== 'string') {
    return false
  }

  const normalizedExtension: string = extension.toLowerCase()

  return filePath.endsWith(`.${normalizedExtension}`)
}

/**
 * Asserts whether the provided filepath conforms with the provided file extension.
 * @param filePath The filepath to check.
 * @param extension The file extension to perform the check with.
 * @param errorMessage The error message to throw.
 * @throws {Error}
 * @returns {FilePath<Ext>}
 */
export function assertMyFilePath<Ext extends string>(
  filePath: string,
  extension: Ext,
  errorMessage?: string
): FilePath<Ext> {
  if (typeof filePath !== 'string' || typeof extension !== 'string') {
    return '' as FilePath<Ext>
  }

  const normalizedExtension: string = extension.toLowerCase()

  if (filePath.endsWith(`.${normalizedExtension}`)) {
    return filePath as FilePath<Ext>
  }

  if (typeof errorMessage === 'string') {
    throw new Error(zing(errorMessage, filePath, normalizedExtension))
  } else {
    throw new Error(
      `The provided file does not match the required extension: ".${normalizedExtension}"`
    )
  }
}
