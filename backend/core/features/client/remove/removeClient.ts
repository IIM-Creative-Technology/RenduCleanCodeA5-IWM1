import type { ClientGateway } from '~/core/gateways/ClientGateway'

export const removeClient = async (id: string, clientGateway: ClientGateway) => {
  return await clientGateway.remove(id)
}
