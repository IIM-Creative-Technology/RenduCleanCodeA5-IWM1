import { getAllClients } from '~/core/features/client/get-all/getAllClients'
import { clientGateway } from '~/utils/gateways'

export default eventHandler(async (_) => {
  const clients = getAllClients(clientGateway)
  return clients
})
