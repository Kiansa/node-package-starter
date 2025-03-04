import { describe, it, expect, vi } from 'vitest'
import { greet } from '../src/utils/hello'

describe('greet function', () => {
  it('prints a greeting to console', () => {
    // Mock console
    const spy = vi.spyOn(console, 'log').mockImplementation(() => {})
    greet('World')
    expect(spy).toHaveBeenCalledWith('Hello, World!')
    spy.mockRestore()
  })
})
