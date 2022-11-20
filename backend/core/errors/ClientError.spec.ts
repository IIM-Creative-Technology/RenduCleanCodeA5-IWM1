import { describe, expect, it } from 'vitest'
import { ClientError } from '~/core/errors/ClientError'

describe('Client error', () => {
  it('should have a custom status property', async () => {
    const error = new ClientError('message', 404)
    expect(error).toHaveProperty('status')
  })

  it('should have a custom status property set from the constructor', async () => {
    const error = new ClientError('message', 404)
    expect(error.status).toEqual(404)
  })
})
