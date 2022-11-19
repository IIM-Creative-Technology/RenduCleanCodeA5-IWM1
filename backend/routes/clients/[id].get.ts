import { getClientById } from '~/core/features/client/get-one-by-id/getClientById'
import { clientGateway } from '~/utils/gateways'

export default eventHandler(async (event) => {
  const client = getClientById(event.context.params.id, clientGateway)
  return client
})
