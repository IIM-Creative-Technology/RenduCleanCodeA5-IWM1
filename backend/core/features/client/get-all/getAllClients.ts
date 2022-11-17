import type { ClientGateway } from '@core/gateways/ClientGateway'

export const getAllClients = async (clientGateway: ClientGateway) => {
  const res = await clientGateway.getAll()
  return res
}
