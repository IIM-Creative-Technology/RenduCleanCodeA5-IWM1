import { InMemoryClientGateway } from 'adapters/secondary/gateways/client/InMemoryClientGateway'
import { beforeEach, describe, expect, it } from 'vitest'
import { getClientById } from './getClientById'
import { ClientError } from '~/core/errors/ClientError'

describe('Get a client\'s details', () => {
  let clientGateway
  beforeEach(() => {
    const uuidGenerator = () => 'test_id'
    clientGateway = new InMemoryClientGateway(uuidGenerator)
  })

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
      clientGateway.set(testClients)

      const testId = '1'

      // When
      const client = await getClientById(testId, clientGateway)

      // Then
      expect(client).toEqual(testClients[0])
    })
  })

  describe('The client doesn\'t exist', () => {
    it('should throw an error of type ClientError', async () => {
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

      const testId = '3'

      await expect(getClientById(testId, clientGateway)).rejects.toThrow(ClientError)
    })
  })
})
