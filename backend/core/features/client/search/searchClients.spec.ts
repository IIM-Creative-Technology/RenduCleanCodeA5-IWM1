import { beforeEach, describe, expect, it } from 'vitest'
import { searchClients } from './searchClients'
import { InMemoryClientGateway } from '~/adapters/secondary/gateways/client/InMemoryClientGateway'
// import { ClientError } from '~/core/errors/ClientError'

describe('Search clients', () => {
  let clientGateway: InMemoryClientGateway
  beforeEach(() => {
    const uuidGenerator = () => 'test_id'
    clientGateway = new InMemoryClientGateway(uuidGenerator)
  })
  it('should return the clients with names containing the given string', async () => {
    const wantedResult = [
      { id: '1', name: 'John Doe' },
      { id: '2', name: 'Jane Doe' },
    ]
    clientGateway.set([
      ...wantedResult,
      { id: '3', name: 'Mark Brown' },
      { id: '4', name: 'Stephen Chicken' },
    ])
    const result = await searchClients('Doe', clientGateway)
    expect(result).toEqual(wantedResult)
  })
  it('should return an empty array if no name containing the given string is found', async () => {
    clientGateway.set([
      { id: '3', name: 'Mark Brown' },
      { id: '4', name: 'Stephen Chicken' },
    ])
    const result = await searchClients('Doe', clientGateway)
    expect(result).toEqual([])
  })
})
