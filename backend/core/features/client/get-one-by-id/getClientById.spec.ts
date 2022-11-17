import { InMemoryClientGateway } from 'adapters/secondary/gateways/client/InMemoryClientGateway'
import { describe, expect, it } from 'vitest'
import { getClientById } from './getClientById'

describe('Get a client\'s details', () => {
  describe('The client already exists', () => {
    it('should return an object containing the client\'s details for a given id', async () => {
      // Given
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

      const testId = '1'

      // When
      const client = await getClientById(testId, clientGateway)

      // Then
      expect(client).toEqual(testClients[0])
    })
  })
})
