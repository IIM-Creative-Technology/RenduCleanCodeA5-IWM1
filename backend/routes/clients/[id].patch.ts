import type { Client } from '~/core/types/client.d'
import { clientGateway } from '~/utils/gateways'
import { updateClient } from '~/core/features/client/update/updateClient'

export default eventHandler(async (event) => {
  const clientToUpdate: Client = await readBody(event)
  clientToUpdate.id = event.context.params.id
  try {
    const clients = updateClient(clientToUpdate, clientGateway)
    return clients
  }
  catch (error) {
    sendError(event, error)
  }
})
