import { InMemoryClientGateway } from 'adapters/secondary/gateways/client/InMemoryClientGateway'
import { describe, expect, it, beforeEach } from 'vitest'
import { addClient } from './addClient'
import { Client } from "~/core/types/client";

describe ('Add client',() => {
  describe('Add a new client', () => {
    const expectedClient: Client = {
      id: 'test_id',
      name: 'Francis Doe'
    }

    let res
    let clientGateway: InMemoryClientGateway
    beforeEach(async ()=> {
      const uuidGenerator = ()=> 'test_id'
      clientGateway = new InMemoryClientGateway(uuidGenerator)
      res = await addClient('Francis Doe', clientGateway)
    })
    it('should return client', async () => {
      expect(res).toEqual(expectedClient)
    });
    it('should save client', async () => {
      expect(await clientGateway.getById(expectedClient.id)).toEqual(expectedClient)
    });
  })
})
