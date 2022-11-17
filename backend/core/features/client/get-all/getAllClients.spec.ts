import { InMemoryClientGateway } from 'adapters/secondary/gateways/client/InMemoryClientGateway'
import { describe, expect, it } from 'vitest'
import { getAllClients } from './getAllClients'

describe('List all clients', () => {
  describe('There is no clients', () => {
    it('should list nothing', async () => {
      const clientGateway = new InMemoryClientGateway()
      const clients = await getAllClients(clientGateway)
      expect(clients).toEqual([])
    })
  })
})
