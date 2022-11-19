import { createStorage } from 'unstorage'
import type { Storage } from 'unstorage'
import { beforeEach, describe, expect, it } from 'vitest'
import { setClientsFromStorage } from './setClientsFromStorage'
import { InMemoryClientGateway } from '~/adapters/secondary/gateways/client/InMemoryClientGateway'
import type { Client } from '~/core/types/client'

describe('Set clients in gateway from storage', () => {
  let storage: Storage
  let clientGateway: InMemoryClientGateway
  const testClients: Client[] = [
    { id: '1', name: 'John Doe' },
    { id: '2', name: 'Jane Doe' },
  ]
  beforeEach(async () => {
    const uuidGenerator = () => 'test_id'
    clientGateway = new InMemoryClientGateway(uuidGenerator)
    storage = createStorage()
    await storage.setItem('clients', testClients)
  })
  it('should set clients from storage to gateway', async () => {
    await setClientsFromStorage(storage, clientGateway)
    expect(await clientGateway.getAll()).toEqual(testClients)
  })
})
