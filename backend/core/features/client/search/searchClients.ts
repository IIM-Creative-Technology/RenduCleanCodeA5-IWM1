import type { ClientGateway } from '~/core/gateways/ClientGateway'
export const searchClients = async (query: string, clientGateway: ClientGateway) => {
  return await clientGateway.search(query)
}
