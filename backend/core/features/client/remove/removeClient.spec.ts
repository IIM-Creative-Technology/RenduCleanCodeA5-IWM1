import { beforeEach, describe, expect, it } from 'vitest'
import { removeClient } from './removeClient'
import { InMemoryClientGateway } from '~/adapters/secondary/gateways/client/InMemoryClientGateway'
import { ClientError } from '~/core/errors/ClientError'

describe('Remove a client', () => {
  let clientGateway: InMemoryClientGateway
  beforeEach(() => {
    const uuidGenerator = () => 'test_id'
    clientGateway = new InMemoryClientGateway(uuidGenerator)
  })
  it('should remove the client corresponding to the given id', async () => {
    const clients = [
      { id: '1', name: 'John Doe' },
      { id: '2', name: 'Jane Doe' },
    ]
    clientGateway.set(clients)
    await removeClient('1', clientGateway)
    expect(await clientGateway.getAll()).toEqual([{
      id: '2',
      name: 'Jane Doe',
    }])
  })
  it('should return the removed client corresponding to the given id', async () => {
    const clients = [
      { id: '1', name: 'John Doe' },
      { id: '2', name: 'Jane Doe' },
    ]
    clientGateway.set(clients)
    const removedClient = await removeClient('2', clientGateway)
    expect(removedClient).toEqual({
      id: '2',
      name: 'Jane Doe',
    })
  })
  it('should throw an error if the given id does not correspond to any client', async () => {
    await expect(removeClient('1', clientGateway)).rejects.toThrowError(ClientError)
  })
})
