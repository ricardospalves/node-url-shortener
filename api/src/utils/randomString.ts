import { randomBytes } from 'node:crypto'

export const randomString = (size: number) => {
  if (size % 2 !== 0) {
    size += 1
  }

  return randomBytes(size / 2).toString('hex')
}
