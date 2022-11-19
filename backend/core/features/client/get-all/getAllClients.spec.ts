import { InMemoryClientGateway } from 'adapters/secondary/gateways/client/InMemoryClientGateway'
import { beforeEach, describe, expect, it } from 'vitest'
import { getAllClients } from './getAllClients'

describe('List all clients', () => {
  let clientGateway: InMemoryClientGateway
  beforeEach(() => {
    const uuidGenerator = () => 'test_id'
    clientGateway = new InMemoryClientGateway(uuidGenerator)
  })
  describe('There is no clients', () => {
    it('should return an empty array', async () => {
      const clients = await getAllClients(clientGateway)
      expect(clients).toEqual([])
    })
  })

  describe('There are clients', () => {
    it('should return an array containing all the clients', async () => {
      const testClients = [
        {
          id: '1',
          name: 'John Doe',
        },
        {
          id: '2',
          name: 'Jane Doe',
        },
      ]
      clientGateway.set(testClients)
      const clients = await getAllClients(clientGateway)
      expect(clients).toEqual(testClients)
    })
  })
})
