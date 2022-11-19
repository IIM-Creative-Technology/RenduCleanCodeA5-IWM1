import { beforeEach, describe, expect, it } from 'vitest'
import { updateClient } from './updateclient'
import { InMemoryClientGateway } from '~/adapters/secondary/gateways/client/InMemoryClientGateway'
import type { Client } from '~/core/types/client'

describe('Update a client', () => {
  let clientGateway: InMemoryClientGateway
  beforeEach(() => {
    const uuidGenerator = () => 'test_id'
    clientGateway = new InMemoryClientGateway(uuidGenerator)
  })

  describe('The client exists', () => {
    it('should return the updated client', async () => {
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
      const modifiedClient: Client = {
        id: '1',
        name: 'Jojo Doe',
      }

      const res = await updateClient(modifiedClient, clientGateway)

      expect(res).toEqual(modifiedClient)
    })
  })
})
