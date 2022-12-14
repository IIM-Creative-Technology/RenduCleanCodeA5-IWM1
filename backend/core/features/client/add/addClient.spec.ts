import { beforeEach, describe, expect, it } from 'vitest'
import { addClient } from './addClient'
import { InMemoryClientGateway } from '~/adapters/secondary/gateways/client/InMemoryClientGateway'
import type { Client } from '~/core/types/client'
import { ClientError } from '~/core/errors/ClientError'

describe('Add client', () => {
  describe('Add a new client', () => {
    const expectedClient: Client = {
      id: 'test_id',
      name: 'Francis Doe',
    }
    let res: Client
    let clientGateway: InMemoryClientGateway
    beforeEach(async () => {
      const uuidGenerator = () => 'test_id'
      clientGateway = new InMemoryClientGateway(uuidGenerator)
      res = await addClient('Francis Doe', clientGateway)
    })
    it('should return client', async () => {
      expect(res).toEqual(expectedClient)
    })
    it('should save client', async () => {
      expect(await clientGateway.getById(expectedClient.id)).toEqual(expectedClient)
    })
    it('should throw an error if client has no name', async () => {
      await expect(addClient(undefined, clientGateway)).rejects.toThrow(ClientError)
    })
  })
})
