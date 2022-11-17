import { InMemoryClientGateway } from 'adapters/secondary/gateways/client/InMemoryClientGateway'
import { describe, expect, it } from 'vitest'
import { getAllClients } from './getAllClients'

describe('List all clients', () => {
  describe('There is no clients', () => {
    it('should return an empty array', async () => {
      const clientGateway = new InMemoryClientGateway()
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
      const clientGateway = new InMemoryClientGateway()
      clientGateway.set(testClients)
      const clients = await getAllClients(clientGateway)
      expect(clients).toEqual(testClients)
    })
  })
})
