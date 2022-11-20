import type { ClientGateway } from '~/core/gateways/ClientGateway'
import type { Client } from '~/core/types/client'

export const updateClient = async (modifiedClient: Client, clientGateway: ClientGateway) => {
  return await clientGateway.update(modifiedClient)
}
