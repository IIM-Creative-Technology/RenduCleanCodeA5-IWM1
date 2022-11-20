import type { Client } from '~/core/types/client.d'
import { addClient } from '~/core/features/client/add/addClient'
import { clientGateway } from '~/utils/gateways'

export default eventHandler(async (event) => {
  const clientToAdd: Client = await readBody(event)
  try {
    const clients = addClient(clientToAdd.name, clientGateway)
    return clients
  }
  catch (error) {
    sendError(event, error)
  }
})
