import type { ClientGateway } from '~/core/gateways/ClientGateway'

export const getClientById = async (id: string, clientGateway: ClientGateway) => {
  const res = await clientGateway.getById(id)
  return res
}
