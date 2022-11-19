import { beforeEach, describe, expect, it } from 'vitest'
import { updateClient } from './updateclient'
import { InMemoryClientGateway } from '~/adapters/secondary/gateways/client/InMemoryClientGateway'
import type { Client } from '~/core/types/client'
import { ClientError } from '~/core/errors/ClientError'

describe('Update a client', () => {
  let clientGateway: InMemoryClientGateway
  beforeEach(() => {
    const uuidGenerator = () => 'test_id'
    clientGateway = new InMemoryClientGateway(uuidGenerator)
    const testClients: Client[] = [
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
  })

  describe('The client exists', () => {
    it('should return the updated client', async () => {
      const modifiedClient: Client = {
        id: '1',
        name: 'Jojo Doe',
      }

      const res = await updateClient(modifiedClient, clientGateway)

      expect(res).toEqual(modifiedClient)
    })

    it('should update the client\'s record', async () => {
      const modifiedClient: Client = {
        id: '1',
        name: 'Jojo Doe',
      }

      await updateClient(modifiedClient, clientGateway)

      const storedClient = await clientGateway.getById('1')

      expect(storedClient).toEqual(modifiedClient)
    })
  })

  describe('the client doesn\'t exist', () => {
    it('should return an error', async () => {
      const modifiedClient: Client = {
        id: '123',
        name: 'jojo',
      }

      await expect(updateClient(modifiedClient, clientGateway)).rejects.toThrowError(ClientError)
    })
  })
})
