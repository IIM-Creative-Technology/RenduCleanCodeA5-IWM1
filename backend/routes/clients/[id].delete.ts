import { removeClient } from '~/core/features/client/remove/removeClient'
import { clientGateway } from '~/utils/gateways'

export default eventHandler(async (event) => {
  const client = removeClient(event.context.params.id, clientGateway)
  return client
})
