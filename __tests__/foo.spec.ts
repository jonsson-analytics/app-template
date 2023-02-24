import { bar } from '@lib/bar.js'
import { foo } from '@lib/foo.js'

describe('suite name', () => {
  it('foo', () => {
    console.log(foo())
    expect(Math.sqrt(4)).toBe(2)
    expect(true).toBe(true)
  })

  it('bar', () => {
    expect(1 + 1).toBe(2)
  })

  it('snapshot', () => {
    expect(foo()).toBe(foo())
    expect(bar()).toBe('bar')
  })
})
