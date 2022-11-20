import type { Storage } from 'unstorage'
import type { ClientGateway } from '~/core/gateways/ClientGateway'
import type { Client } from '~/core/types/client'

export const setClientsFromStorage = async (storage: Storage, gateway: ClientGateway) => {
  const clients = await storage.getItem('clients')
  await gateway.set(clients as Client[])
}
